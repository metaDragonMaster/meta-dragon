import {
	mapActions,
	mapGetters,
} from "vuex";
import Abi721Nft from "@/jsons/abi-721-NFT.js";
import AbiLCErc20 from "@/jsons/abi-LC-ERC20.js";
import AbiUSDT from "@/jsons/USDT_token_abi.js";
import AbiLb from "@/jsons/LB_abi.js";
import Decimal from "decimal.js";
import {
	NftAddress,
	UsdtAddress,
	lbAddress
} from "@/jsons/contractAddress.js"
export default {
	name: 'homepage',
	data:()=>({
		downloadLink:{
			android:'https://dz-app.oss-cn-shenzhen.aliyuncs.com/MetaDragon.apk',
			exe:'https://dz-app.oss-cn-shenzhen.aliyuncs.com/MetaDragon.exe'
		},
		links:[
			{
				contract: 'LB',
				link: '0x7948d6bc05da31b4a0e0ac1060d4c3bd26ced322'
			},
			// {
			// 	contract: 'LC',
			// 	link: '0x75325deec14DA345a440C0212f263Fc72BcfE45F'
			// },
			{
				contract: 'NFT',
				link: '0x68102434902f1d995C7397f7DaC64cCfFfB0B328'
			},
		],
		dialogHandleValue:false,
		getAuthErr:false,
	}),
	mounted() {
		this.$nextTick(() => {
			// this.getAuth();
			this.getLbAuth();
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
			console.log('homepage',this.web3Provider)
			if (!this.web3Provider) return;
			console.log("this.web3Provider--4456");
			this.dialogHandleValue = true;
			this.getAuthErr = false;
			let web3 = this.web3Provider;
			web3.eth.getAccounts().then(async res => {
				console.log(res);
				// this.loading = true;
				let address = res[0];
				let contractAddress = NftAddress;
				let usdt_address = UsdtAddress;
				let contract = new web3.eth.Contract(AbiUSDT, usdt_address);
				let rs = await contract.methods.allowance(address, contractAddress).call();
				console.log(rs);
				let y = new Decimal(rs)
				console.log(y);
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
							this.dialogHandleValue = false;
							this.$message.success("approve success")
						} else {
							this.$message.warning("approve grant failed")
							this.getAuthErr = true;
						}
					} catch (e) {
						this.$message.warning("approve grant failed")
						this.getAuthErr = true;
					}
				} else {
					//取消授权按
					// this.loading = false;
					this.$message.success("approve success！")
					this.dialogHandleValue = false;
					this.getAuthErr = false;
					this.setHaveAuth(true)
				}
				// console.log(this.haveAuth)
			})
		},
		getLbAuth() {
			console.log('homepage',this.web3Provider)
			if (!this.web3Provider) return;
			console.log("this.web3Provider--4456");
			this.dialogHandleValue = true;
			this.getAuthErr = false;
			let web3 = this.web3Provider;
			web3.eth.getAccounts().then(async res => {
				console.log(res);
				// this.loading = true;
				let address = res[0];
				let contractAddress = NftAddress;
				let LbAddress = lbAddress;
				let contract = new web3.eth.Contract(AbiLb, LbAddress);
				let rs = await contract.methods.allowance(address, contractAddress).call();
				console.log(rs);
				let y = new Decimal(rs)
				console.log(y);
				let contract721 = new web3.eth.Contract(Abi721Nft, contractAddress);
				let usdt_price = await contract721.methods.getUSDT_Price().call();
				// let usdt = new Decimal(usdt_price);
				if (y.sub(usdt_price) < 0) {
					let usdtContract = new web3.eth.Contract(AbiLb, LbAddress);
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
							this.dialogHandleValue = false;
							this.$message.success("approve success")
						} else {
							this.$message.warning("approve grant failed")
							this.getAuthErr = true;
						}
					} catch (e) {
						this.$message.warning("approve grant failed")
						this.getAuthErr = true;
					}
				} else {
					//取消授权按
					// this.loading = false;
					this.$message.success("approve success！")
					this.dialogHandleValue = false;
					this.getAuthErr = false;
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
