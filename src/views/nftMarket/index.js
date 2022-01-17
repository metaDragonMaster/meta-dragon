import {
	mapGetters
} from "vuex";
import {
	Notification
} from 'element-ui';
import Abi721Nft from "@/jsons/abi-721-NFT.js";
import AbiLCErc20 from "@/jsons/abi-LC-ERC20.js";
import AbiUSDT from "@/jsons/USDT_token_abi.js";
import Decimal from "decimal.js";

export default {
	data() {
		return {
			loading: false,
			haveAuth: false,
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
	create() {

	},
	mounted() {
		this.$nextTick(async () => {
			// this.getAuth()
			if(!this.web3Provider) return;
			let {
				usdtXs
			} = await this.getUsdtValue();
			// console.log(usdtXs)
			this.usdtValue = usdtXs;
		})
	},
	methods: {
		async getUsdtValue() {
			if(!this.web3Provider) return;
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
							this.haveAuth = true;
						} else {
							this.$message.warning("approve grant failed")
						}
						this.loading = false;
					} catch(e) {
						this.$message.warning("approve grant failed")
						this.loading = false;
					}
					
						// .on('confirmation', (confirmationNumber, receipt) => {
						// 	console.info('confirmation');
						// 	console.info(confirmationNumber);
						// 	console.info(receipt);
						// 	if (confirmationNumber >= 2) {
						// 		// console.log('over 1')
						// 		this.loading = false;
						// 		this.haveAuth = true;
						// 		return;
						// 	}
						// }).on('error',(e)=> {
						// 	this.loading = false;
						// });
				} else {
					//取消授权按
					this.loading = false;
					this.haveAuth = true;
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
				
				/*
					{
					    "blockHash": "0x050019b32d150b1a3accd4b4227c4b582b247b70f8fb75c648dce847c3a0e535",
					    "blockNumber": 15946915,
					    "contractAddress": null,
					    "cumulativeGasUsed": 2629640,
					    "from": "0x5c2571f4aabc057a100bdfc058264eee9c65c3d3",
					    "gasUsed": 176530,
					    "logsBloom": "0x00800000000000000000002000002000000000000000000000000000000001000000000000000000000000000000000000008000000400000000000000200000000000000000000000000008000000000000000000000000000000000000000000000000020001000000000000000800000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000400000000000000000000000000008000010000000000003000010020000000000000000000000000000000000000000020020000010000000000000000000000000000010000000000000000100000000000060",
					    "status": true,
					    "to": "0xe9a6aa7d7eea3e584cc32be0f8f5ee20dc51633a",
					    "transactionHash": "0xd132194d93a5c166115154de289864fac83689e6eee96c790ca98b1b2079daca",
					    "transactionIndex": 18,
					    "type": "0x0",
					    "events": {
					        "0": {
					            "address": "0xDA222D32dD3fec7bE55f5fA2FD2dA3400a4DE4CE",
					            "blockNumber": 15946915,
					            "transactionHash": "0xd132194d93a5c166115154de289864fac83689e6eee96c790ca98b1b2079daca",
					            "transactionIndex": 18,
					            "blockHash": "0x050019b32d150b1a3accd4b4227c4b582b247b70f8fb75c648dce847c3a0e535",
					            "logIndex": 39,
					            "removed": false,
					            "id": "log_ebb67d8d",
					            "returnValues": {},
					            "signature": null,
					            "raw": {
					                "data": "0x000000000000000000000000000000000000000000000000002386f26fc10000",
					                "topics": [
					                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
					                    "0x0000000000000000000000005c2571f4aabc057a100bdfc058264eee9c65c3d3",
					                    "0x000000000000000000000000363d394021b5b9249fee4c93ee27a753c307a95b"
					                ]
					            }
					        },
					        "1": {
					            "address": "0xDA222D32dD3fec7bE55f5fA2FD2dA3400a4DE4CE",
					            "blockNumber": 15946915,
					            "transactionHash": "0xd132194d93a5c166115154de289864fac83689e6eee96c790ca98b1b2079daca",
					            "transactionIndex": 18,
					            "blockHash": "0x050019b32d150b1a3accd4b4227c4b582b247b70f8fb75c648dce847c3a0e535",
					            "logIndex": 40,
					            "removed": false,
					            "id": "log_0c94d7e3",
					            "returnValues": {},
					            "signature": null,
					            "raw": {
					                "data": "0x199999999999c8d22cc0046a7c75ef87fd15adbcc496c1f4bfb8f21b207e0000",
					                "topics": [
					                    "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
					                    "0x0000000000000000000000005c2571f4aabc057a100bdfc058264eee9c65c3d3",
					                    "0x000000000000000000000000e9a6aa7d7eea3e584cc32be0f8f5ee20dc51633a"
					                ]
					            }
					        },
					        "Transfer": {
					            "address": "0xE9A6aA7D7eEa3E584cc32Be0f8f5Ee20dc51633A",
					            "blockNumber": 15946915,
					            "transactionHash": "0xd132194d93a5c166115154de289864fac83689e6eee96c790ca98b1b2079daca",
					            "transactionIndex": 18,
					            "blockHash": "0x050019b32d150b1a3accd4b4227c4b582b247b70f8fb75c648dce847c3a0e535",
					            "logIndex": 41,
					            "removed": false,
					            "id": "log_b819c814",
					            "returnValues": {
					                "0": "0x0000000000000000000000000000000000000000",
					                "1": "0x5c2571f4AaBc057a100bDfc058264EEE9C65C3D3",
					                "2": "109",
					                "from": "0x0000000000000000000000000000000000000000",
					                "to": "0x5c2571f4AaBc057a100bDfc058264EEE9C65C3D3",
					                "tokenId": "109"
					            },
					            "event": "Transfer",
					            "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
					            "raw": {
					                "data": "0x",
					                "topics": [
					                    "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
					                    "0x0000000000000000000000000000000000000000000000000000000000000000",
					                    "0x0000000000000000000000005c2571f4aabc057a100bdfc058264eee9c65c3d3",
					                    "0x000000000000000000000000000000000000000000000000000000000000006d"
					                ]
					            }
					        }
					    }
					}
				*/
				
				// .on('confirmation', (confirmationNumber, receipt) => {
				// 	console.info('confirmation');
				// 	console.info(confirmationNumber);
				// 	console.info(receipt);
				// 	if (confirmationNumber >= 2) {
				// 		that.loading = false;
				// 		that.currentStatic = 1;
				// 		return;
				// 	}
				// }).on('error',(e)=> {
				// 	that.loading = false;
				// 	that.currentStatic = 2;
				// });
			})
			// console.log(this.web3Provider)
		}
	}
}
