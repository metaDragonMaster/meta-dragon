import {
	mapGetters,
	mapActions,
} from "vuex";
import AbiTask from "@/jsons/abi-friendTask.js"
import {
	friendTaskAddress,
} from "@/jsons/contractAddress.js"
export default {
	data() {
		return {
			refAddress: "",
			loading: false,
		}
	},
	computed: {
		...mapGetters({
			web3Provider: 'web3Provider',
			ethAddress: 'ethAddress',
			haveRes: 'haveRes',
		}),
	},
	mounted() {
		this.init()
	},
	methods: {
		...mapActions({
			setHaveRes: 'setHaveRes'
		}),
		async init() {
			if (!this.web3Provider) return;
			if (this.haveRes) {
				const web3 = this.web3Provider;
				const address = await web3.eth.getAccounts();
				const userAddress = address[0];
				const userIsRef = await this.isRe(userAddress);
				if(userIsRef) {
					this.refAddress = userIsRef;
				}
			}
		},
		async isRe(address) {
			if (!this.web3Provider) return;
			const web3 = this.web3Provider;
			const contractTask = new web3.eth.Contract(AbiTask, friendTaskAddress);
			const is = await contractTask.methods.getRes(address).call();
			if (is == '0x0000000000000000000000000000000000000000') {
				return false;
			}
			return is;
		},
		async addRe() {
			if (!this.web3Provider) return;
			try {
				this.loading = true;
				const web3 = this.web3Provider;
				const address = await web3.eth.getAccounts();
				const userAddress = address[0];
				const userIsRef = await this.isRe(userAddress);
				const refIsRef = await this.isRe(this.refAddress);
				console.log(userIsRef, refIsRef);
				if (!userIsRef && refIsRef) {
					const contractTask = await new web3.eth.Contract(AbiTask, friendTaskAddress);
					await contractTask.methods.add_re(this.refAddress).send({
						from: userAddress,
					});
					this.setHaveRes(true);
					this.loading = false;
				} else {
					this.$message.error('add address failed');
					this.loading = false;
				}
			} catch (e) {
				console.error("addRe err", e);
				this.$message.error('add address failed');
				this.loading = false;
			}
		},
		mycopy(text) {
			let textareaEl = document.createElement('textarea');
			textareaEl.setAttribute('readonly', 'readonly'); // 防止手机上弹出软键盘
			textareaEl.value = text;
			document.body.appendChild(textareaEl);
			textareaEl.select();
			let success = document.execCommand('copy');
			document.body.removeChild(textareaEl);
			if (success) {
				this.$message.success('copy success');
			}
			return success;
		}
	}
}
