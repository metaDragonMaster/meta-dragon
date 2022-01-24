import Abi721Nft from "@/jsons/abi-721-NFT.js";
import AbiLCErc20 from "@/jsons/abi-LC-ERC20.js";
import AbiLb from "@/jsons/LB_abi.js";
import AbiUSDT from "@/jsons/USDT_token_abi.js";
import Decimal from "decimal.js";
import moment from "moment";
import {
	NftAddress,
	UsdtAddress,
	lbAddress,
} from "@/jsons/contractAddress.js"
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
			],
			timeStamp: '',
			timeDown: '',
			timer: null,
		}
	},
	computed: {
		...mapGetters({
			web3Provider: 'web3Provider',
			ethAddress:'ethAddress',
			haveAuth: 'haveAuth'
		}),
		static() {
			let r = this.staticList.filter(item => item.id == this.currentStatic)[0];
			return r || {
				title: "",
				type: ""
			}
		},
		// formatTimeDown() {
		// 	return function(time) {
		// 		let lefttime = time
		// 		// var lefttime = endtime.getTime() - nowtime.getTime() //距离结束时间的毫秒数
		// 		let leftd = Math.floor(lefttime / (60 * 60 * 24)) //计算天数
		// 		let lefth = Math.floor(lefttime / (60 * 60) % 24) //计算小时数
		// 		let leftm = Math.floor(lefttime / (60) % 60) //计算分钟数
		// 		let lefts = Math.floor(lefttime % 60); //计算秒数
		// 		return leftd + "天" + lefth + ":" + leftm + ":" + lefts; //返回倒计时的字符串
		// 	}
		// },
	},
	watch: {
		currentStatic(n) {
			if (n === 1) {
				setTimeout(() => {
					this.currentStatic = -1
				}, 3000)
			}
		}
	},
	mounted() {
		this.$nextTick(async () => {
			if (!this.web3Provider) return;
			this.getAuth()
			// this.getTimer()
			// this.countDown()
			let {
				usdtXs
			} = await this.getUsdtValue();
			console.log("usdtXs", usdtXs)
			this.usdtValue = usdtXs;
		})
	},
	beforeDestroy() {
		clearInterval(this.timer)
	},
	methods: {
		...mapActions({
			setHaveAuth: 'setHaveAuth',
		}),
		countDown() {
			this.timer = setInterval(() => {
				// let time = moment.unix(parseInt(timeStamp)).format('YYYY-MM-DD HH:mm:ss'); //未来
				let timeNow = moment(new Date()).unix()
				let timeDown = this.timeStamp - timeNow;
				this.timeDown = this.formatTimeDown(timeDown);
				// console.log( time)
			}, 1000)
		},
		formatTimeDown(time) {
			let lefttime = time
			let leftd = Math.floor(lefttime / (60 * 60 * 24)) //计算天数
			let lefth = Math.floor(lefttime / (60 * 60) % 24) //计算小时数
			let leftm = Math.floor(lefttime / (60) % 60) //计算分钟数
			let lefts = Math.floor(lefttime % 60); //计算秒数
			return `${leftd}day-${lefth}h-${leftm}m-${lefts}s `
		},
		getTimer() {
			let web3 = this.web3Provider;
			web3.eth.getAccounts().then(async res => {
				let address = res[0];
				// let contractAddress = "0x538D0e0857868077D70F7e977f4A3d5518A5aB01";
				let contractAddress = NftAddress;
				let contract = new web3.eth.Contract(Abi721Nft, contractAddress);
				let timeStamp = await contract.methods.getPreSaleStopTimestamp().call();
				console.log("timeStamp -- ", timeStamp);
				// let newTime = 
				this.timeStamp = timeStamp;
				this.countDown()
			}).catch(e => {
				console.log(e)
			})
		},
		async getUsdtValue() {
			if (!this.web3Provider || !this.haveAuth) return;
			let web3 = this.web3Provider;
			// let nft_address = "0x538D0e0857868077D70F7e977f4A3d5518A5aB01";
			let nft_address = NftAddress;
			let contract721 = new web3.eth.Contract(Abi721Nft, nft_address);
			let usdtPrice = await contract721.methods.getLB_Price().call();
			let usdtXs = web3.utils.fromWei(usdtPrice);
			return {
				usdtXs,
				usdtPrice,
				contract721,
			};
		},
		
		getLbAuth() {
			if (!this.web3Provider) return;
			if (this.haveAuth) return;
			let web3 = this.web3Provider;
			web3.eth.getAccounts().then(async res => {
				console.log(res);
				this.loading = true;
				let address = res[0];
				// let contractAddress = "0x538D0e0857868077D70F7e977f4A3d5518A5aB01";
				let contractAddress = NftAddress;
				// let usdt_address = UsdtAddress;
				let LbAddress = lbAddress;
				// let contract = new web3.eth.Contract(AbiUSDT, usdt_address);
				let contract = new web3.eth.Contract(AbiLb, LbAddress);
				let rs = await contract.methods.allowance(address, contractAddress).call();
				// console.log(rs);
				let y = new Decimal(rs)
				// console.log(y);
				let contract721 = new web3.eth.Contract(Abi721Nft, contractAddress);
				let usdt_price = await contract721.methods.getPreSalePrice().call();
				console.log(usdt_price);
				// let usdt = new Decimal(usdt_price);
				if (y.sub(usdt_price) < 0) {
					// let usdtContract = new web3.eth.Contract(AbiUSDT, usdt_address);
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
						} else {
							this.$message.warning("approve grant failed")
							// console.log('授权成功')
						}
						this.loading = false;
					} catch (e) {
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
		getAuth() {
			if (!this.web3Provider) return;
			if (this.haveAuth) return;
			let web3 = this.web3Provider;
			web3.eth.getAccounts().then(async res => {
				console.log(res);
				this.loading = true;
				let address = res[0];
				// let contractAddress = "0x538D0e0857868077D70F7e977f4A3d5518A5aB01";
				let contractAddress = NftAddress;
				let usdt_address = UsdtAddress;
				// let contract = new web3.eth.Contract(AbiUSDT, usdt_address);
				let contract = new web3.eth.Contract(AbiLb, usdt_address);
				let rs = await contract.methods.allowance(address, contractAddress).call();
				// console.log(rs);
				let y = new Decimal(rs)
				// console.log(y);
				let contract721 = new web3.eth.Contract(Abi721Nft, contractAddress);
				let usdt_price = await contract721.methods.getPreSalePrice().call();
				console.log(usdt_price);
				// let usdt = new Decimal(usdt_price);
				if (y.sub(usdt_price) < 0) {
					// let usdtContract = new web3.eth.Contract(AbiUSDT, usdt_address);
					let usdtContract = new web3.eth.Contract(AbiLb, usdt_address);
					
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
						} else {
							this.$message.warning("approve grant failed")
							// console.log('授权成功')
						}
						this.loading = false;
					} catch (e) {
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
		async ethLbSend(frequency) {
			if (!this.web3Provider) return;
			if (this.loading) return;
			let that = this;
			let web3 = this.web3Provider;
			that.loading = true;
			let address = this.ethAddress;
			let lb_address = lbAddress;
			// let contract = new web3.eth.Contract(AbiUSDT, usdt_address);
			let contract = new web3.eth.Contract(AbiLb, lb_address);
			let balanceUsdt = await contract.methods.balanceOf(address).call();
						
			let nft_address = NftAddress;
			let contract721 = new web3.eth.Contract(Abi721Nft, nft_address);
			let usdtPrice = await contract721.methods.getLB_Price().call();
			// let frequencyUsdtPrice = usdtPrice * frequency;
			let usdtXs = web3.utils.fromWei(usdtPrice);
						
			//let weiUsdtPrice = web3.utils.toWei(frequencyUsdtPrice)
			let weiUsdtPrice = web3.utils.toWei(parseInt(usdtXs * frequency).toString());
			let a = web3.utils.fromWei(weiUsdtPrice);
			let b = web3.utils.fromWei(balanceUsdt);
						
			if (parseInt(a) > parseInt(b)) {
				that.$message.error('usdt not enough');
				that.currentStatic = 2;
				that.loading = false;
			} else {
				let sendStatic = await contract721.methods.payLB(address, weiUsdtPrice,frequency).send({
					from: address,
				})
				if (sendStatic.status) {
					that.currentStatic = 1;
				} else {
					that.currentStatic = 2;
				}
				that.loading = false;
				console.log(sendStatic);
			}
		},
		ethSend(frequency) {
			if (!this.web3Provider) return;
			if (this.loading) return;
			let that = this;
			let web3 = this.web3Provider;
			web3.eth.getAccounts().then(async res => {
				// console.log(res);
				// console.log(that);
				that.loading = true;
				let address = res[0];
				let usdt_address = UsdtAddress;
				// let contract = new web3.eth.Contract(AbiUSDT, usdt_address);
				let contract = new web3.eth.Contract(AbiLb, usdt_address);
				let balanceUsdt = await contract.methods.balanceOf(address).call();

				let nft_address = NftAddress;
				let contract721 = new web3.eth.Contract(Abi721Nft, nft_address);
				let usdtPrice = await contract721.methods.getPreSalePrice().call();
				// let frequencyUsdtPrice = usdtPrice * frequency;
				let usdtXs = web3.utils.fromWei(usdtPrice);

				//let weiUsdtPrice = web3.utils.toWei(frequencyUsdtPrice)
				let weiUsdtPrice = web3.utils.toWei(parseInt(usdtXs * frequency).toString());
				let a = web3.utils.fromWei(weiUsdtPrice);
				let b = web3.utils.fromWei(balanceUsdt);

				if (parseInt(a) > parseInt(b)) {
					that.$message.error('usdt not enough');
					that.currentStatic = 2;
					that.loading = false;
				} else {
					let sendStatic = await contract721.methods.preSaleWithUSDT(address, weiUsdtPrice,
						frequency).send({
						from: address,
						// gas :
					})
					if (sendStatic.status) {
						that.currentStatic = 1;
					} else {
						that.currentStatic = 2;
					}
					that.loading = false;
					console.log(sendStatic);
				}

			}).catch(e => {
				that.loading = false;
				that.currentStatic = 2;
			})
		}
	}
}
