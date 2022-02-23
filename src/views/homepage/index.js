import {
	mapActions,
	mapGetters,
} from "vuex";
import Abi721Nft from "@/jsons/abi-721-NFT.js";
import AbiLCErc20 from "@/jsons/abi-LC-ERC20.js";
import AbiTask from "@/jsons/abi-friendTask.js"
import AbiUSDT from "@/jsons/USDT_token_abi.js";
import AbiLb from "@/jsons/LB_abi.js";
import Decimal from "decimal.js";
import {
	NftAddress,
	UsdtAddress,
	lbAddress,
	lcAddress,
	friendTaskAddress,
} from "@/jsons/contractAddress.js"
export default {
	name: 'homepage',
	data: () => ({
		downloadLink: {
			android: 'http://down.metadragon.games/MetaDragon.apk',
			exe: 'http://down.metadragon.games/MetaDragon.exe'
		},
		links: [
			{
				contract: 'LB',
				link: lbAddress
			},
			{
				contract: 'LC',
				link: lcAddress
			},
			{
				contract: 'NFT',
				link: NftAddress
			},
		],
		dialogHandleValue: false,
		getAuthErr: false,
	}),
	mounted() {
		this.$nextTick(async () => {
			// this.getAuth();
			let r = await this.getLbAuth();
			this.init()
			if (this.$route.query.ref && r) {
				this.getRef(this.$route.query.ref)
			};
			// this.getLbAuth1();
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
			setHaveRes: 'setHaveRes',
		}),
		async init() {
			if (!this.web3Provider) return;
			const web3 = this.web3Provider;
			let address = await web3.eth.getAccounts();
			const userAddress = address[0];
			const refAddress = await this.isRe(userAddress);
			let haveRes = refAddress.length > 0;
			console.log("haveRes",haveRes);
			this.setHaveRes(haveRes)
		},
		async isRe(address) {
			if (!this.web3Provider) return;
			let web3 = this.web3Provider;
			const contractTask = new web3.eth.Contract(AbiTask, friendTaskAddress);
			const is = await contractTask.methods.getRes(address).call();
			if (is == '0x0000000000000000000000000000000000000000') {
				return false;
			}
			return is;
		},

		async addRe(reAddress) {
			if (!this.web3Provider) return;
			let web3 = this.web3Provider;
			reAddress = reAddress.trim()
			console.log("addRe", reAddress);
			let address = await web3.eth.getAccounts();
			const contractTask = new web3.eth.Contract(AbiTask, friendTaskAddress);
			try {
				const isAddSuccess = await contractTask.methods.add_re(reAddress).send({
					from: address[0],
				});
				console.log("addRe", isAddSuccess);
				return isAddSuccess;
			} catch (e) {
				console.error("addRe err", e);
				return false;
			}
		},
		async getRef(value) {
			if (!this.web3Provider) return;
			let web3 = this.web3Provider;
			const address = await new web3.eth.getAccounts();
			console.log(address)

			const isReBool = await this.isRe(value);
			const userIsRe = await this.isRe(address[0]);
			console.log(isReBool, userIsRe)
			if (isReBool && !userIsRe) {
				this.$prompt('推荐人地址', '设置推荐人', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					inputValue: value,
					closeOnPressEscape: false,
					closeOnClickModal: false,
				}).then(async ({ value }) => {
					//0x5c2571f4AaBc057a100bDfc058264EEE9C65C3D3
					let isAddRE = await this.addRe(value);
					console.log("isAddRE", isAddRE)
					if (!isAddRE.status) {
						this.$message.error('Execution failed')
					}
					return isAddRE.status
				}).catch(() => {
					return false;
				});
			}
		},
		getAuth() {
			console.log('homepage', this.web3Provider)
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
			// console.log('homepage',this.web3Provider)
			if (!this.web3Provider) return;
			// console.log("this.web3Provider--4456");
			this.dialogHandleValue = true;
			this.getAuthErr = false;
			let web3 = this.web3Provider;
			return web3.eth.getAccounts().then(async res => {
				// console.log(res);
				// this.loading = true;
				let address = res[0];
				let contractAddress = NftAddress;
				let LbAddress = lbAddress;
				let contract = new web3.eth.Contract(AbiLb, LbAddress);
				let rs = await contract.methods.allowance(address, contractAddress).call();
				// console.log(rs);
				let y = new Decimal(rs)
				// console.log(y);
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
							return true;
						} else {
							this.$message.warning("approve grant failed")
							this.getAuthErr = true;
						}
						return false;
					} catch (e) {
						this.$message.warning("approve grant failed")
						this.getAuthErr = true;
						return false;

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
			if (success) {
				this.$message.success('copy success');
			}
			return success;
		}
	}
}
