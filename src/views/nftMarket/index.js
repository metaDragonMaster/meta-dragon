import Abi721Nft from "@/jsons/abi-721-NFT.js";
import AbiLCErc20 from "@/jsons/abi-LC-ERC20.js";
import AbiUSDT from "@/jsons/USDT_token_abi.js";
import Decimal from "decimal.js";
import {
	mapActions,
	mapGetters,
} from "vuex"

export default {
	data() {
		return {
			loading: false,
			// haveAuth: false,
			usdtValue: 0,
			currentStatic: -1,
			staticList: [{
					id: -1
				},
				{
					id: 0,
					type: 'default',
					title: 'wait Hatching',
				},
				{
					id: 1,
					type: 'success',
					title: 'successful hatching',
				},
				{
					id: 2,
					type: 'error',
					title: 'hatching failure',
				},
			]
		}
	},
	computed: {
		...mapGetters({
			web3Provider: 'web3Provider',
			haveAuth: 'haveAuth'
		}),
		static() {
			let r = this.staticList.filter(item => item.id == this.currentStatic)[0];
			return r || {
				title: "",
				type: ""
			}
		}
	},
	watch:{
		currentStatic(n) {
			if(n === 1) {
				setTimeout(()=>{
					this.currentStatic = -1
				},3000)
			}
		}
	},
	mounted() {
		this.$nextTick(async () => {
			if(!this.web3Provider) return;
			this.getAuth()
			// let {
			// 	usdtXs
			// } = await this.getUsdtValue();
			// this.usdtValue = usdtXs;
		})
	},
	methods: {
		...mapActions({
			setHaveAuth: 'setHaveAuth',
		}),
		async getUsdtValue() {
			if(!this.web3Provider||!this.haveAuth) return;
			let web3 = this.web3Provider;
			let nft_address = "0xE9A6aA7D7eEa3E584cc32Be0f8f5Ee20dc51633A";
			let contract721 = new web3.eth.Contract(Abi721Nft, nft_address);
			let usdtPrice = await contract721.methods.getUSDT_Price().call();
			let usdtXs = web3.utils.fromWei(usdtPrice);
			return {
				usdtXs,
				usdtPrice,
				contract721,
			};
		},
		getAuth() {
			if(!this.web3Provider) return;
			if(this.haveAuth) return;
			let web3 = this.web3Provider;
			web3.eth.getAccounts().then(async res => {
				console.log(res);
				this.loading = true;
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
						if(sendStatic.status) {
							this.setHaveAuth(true)
						} else {
							this.$message.warning("approve grant failed")
							// console.log('授权成功')
						}
						this.loading = false;
					} catch(e) {
						this.$message.warning("approve grant failed")
						this.loading = false;
					}
				} else {
					this.loading = false;
					this.setHaveAuth(true)
					// console.log('已连接上区块链')
				}
			})
		},
		ethSend(frequency) {
			if(!this.web3Provider) return;
			if(this.loading) return;
			let that = this;
			let web3 = this.web3Provider;
			web3.eth.getAccounts((error, result) => {
				if (!error) {
					this.currentStatic = 0;
					// console.log(result);
				} //授权成功后result能正常获取到账号了
				// result: ['0x5c2571f4AaBc057a100bDfc058264EEE9C65C3D3']
			}).then(async res => {
				// console.log(res);
				// console.log(that);
				that.loading = true;
				let address = res[0];
				let {
					usdtXs,
					usdtPrice,
					contract721,
				} = await that.getUsdtValue();
				let frequencyUsdtPrice = web3.utils.toBN(usdtPrice * frequency) ;
				let sendStatic = await contract721.methods.payUSDT(address, frequencyUsdtPrice, frequency).send({
					from: address
				})
				if(sendStatic.status) {
					that.currentStatic = 1;
				} else {
					that.currentStatic = 2;
				}
				that.loading = false;
				console.log(sendStatic);
			})
		}
	}
}
