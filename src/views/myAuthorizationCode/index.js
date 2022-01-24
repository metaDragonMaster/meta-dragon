import {
	mapGetters
} from "vuex";
import axios from "axios"
export default {
	data: () => ({
		uuid: '',
	}),
	mounted() {
		// this.createUUID()
		this.init()
	},
	computed: {
		...mapGetters({
			web3Provider: 'web3Provider',
			ethAddress: 'ethAddress'
		}),
	},
	methods: {
		init() {
			this.findLoginAuthByAddress().then(res=>{
				let {message} = res.data.result;
				this.uuid = message;
				console.log(res)
			}).catch(e=>{
				console.error(e)
				this.createUUID()
			});
		},
		createUUID() {
			let s = [];
			let hexDigits = "0123456789abcdef";
			for (let i = 0; i < 36; i++) {
				s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
			}
			s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
			s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
			s[8] = s[13] = s[18] = s[23] = "-";

			this.uuid = s.join("");
			// return uuid;
		},
		axiosPost(url, data) {
			return axios({
				method: 'post',
				baseURL: 'https://udprphavlyfp.usemoralis.com:2053',
				url: url,
				data: data,
			})
		},
		sign() {
			if (!this.web3Provider) return;
			let web3 = this.web3Provider;
			// console.log(this.uuid,this.ethAddress)
			// web3.eth.sign(this.uuid,this.ethAddress).then(res=>{
			// 	console.log(res)
			// });

			// let message = "Somestring"
			let message = this.uuid
			let hash = web3.utils.sha3(message);
			// let account = web3.eth.accounts[0]
			let ethAddress = this.ethAddress;
			console.log("ethAddress:", ethAddress);
			console.log("uuid:", message);
			web3.eth.personal.sign(hash, ethAddress, async (error, signature) => {
				console.log(signature, error)
				this.createLoginAuth({
					message: message,
					ethAddress: ethAddress,
					signature: signature,
					time: ''
				}).then(res=> {
					this.$message.success('create success')
				}).catch(e=>{
					this.$message.error('create error')
				})
			});
		},
		createLoginAuth(data) {
			return this.axiosPost('/server/functions/createLoginAuth', data)
		},
		findLoginAuthByAddress() {
			return this.axiosPost('/server/functions/findLoginAuthByAddress', {
				ethAddress: this.ethAddress,
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
