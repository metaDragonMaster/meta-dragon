import rate from "@/components/rate.vue";
import dragonCard from "@/components/dragonCard.vue"
import Abi721Nft from "@/jsons/abi-721-NFT.js";
import AbiLCErc20 from "@/jsons/abi-LC-ERC20.js";
import AbiUSDT from "@/jsons/USDT_token_abi.js";
import AbiLb from "@/jsons/LB_abi.js";
import {
	mapGetters
} from "vuex";
import axios from "axios";
export default {
	data() {
		return {
			dragonGridList: [{
					bgImage: require('@/assets/myAssets/col-1.png'),
					iconImage: require('@/assets/myAssets/col-1-icon.png'),
					num: '0',
					type: 'Lb',
				},
				{
					bgImage: require('@/assets/myAssets/col-2.png'),
					iconImage: require('@/assets/myAssets/col-2-icon.png'),
					num: '0.00',
					type: 'Lc',
				},
				{
					bgImage: require('@/assets/myAssets/col-3.png'),
					iconImage: require('@/assets/myAssets/col-3-icon.png'),
					num: '0',
					type: 'NFT',
				},
				{
					bgImage: require('@/assets/myAssets/col-4.png'),
					iconImage: require('@/assets/myAssets/col-4-icon.png'),
					num: '0',
					type: 'Egg',
				},

			],
			dragonList: [
				// {
				// 	cardType: "blue",
				// 	skills: [],
				// 	stars: 4,
				// 	dragonImage: '@/assets/myAssets/dragon.png'
				// },
				
			],
			defaultSkills: [{
					image: require("@/assets/myAssets/skill-1.png")
				},
				{
					image: require("@/assets/myAssets/skill-1.png")
				},
				{
					image: require("@/assets/myAssets/skill-1.png")
				},
				{
					image: require("@/assets/myAssets/skill-1.png")
				},
			]
		}
	},
	components: {
		rate,
		dragonCard,
	},
	computed: {
		...mapGetters({
			web3Provider: 'web3Provider',
		}),
	},
	mounted() {
		this.$nextTick(() => {
			this.getUsdtValue()
		})
	},
	methods: {
		toDetails() {
			this.$routerUtil.toPath('/myAssets/details')
			console.log('to details')
		},
		fetchGet() {
			
		},
		async getUsdtValue() {
			if (!this.web3Provider) return;
			let web3 = this.web3Provider;
			web3.eth.getAccounts().then(async res => {
				let address = res[0];
				console.log(address);
				let lb_address = "0xb31429e1016D7Dc48280d9770859A26f1eA18168";
				let lbContract = new web3.eth.Contract(AbiLb, lb_address);
				let lb_Balance = await lbContract.methods.balanceOf(address).call();
				let lc_address = "0x8D041FE9fe616D5d1B62f67D79AE0FA3cB792c14";
				let lcContract = new web3.eth.Contract(AbiLCErc20, lc_address);
				let lc_Balance = await lcContract.methods.balanceOf(address).call();
				let Nft_address = "0xE9A6aA7D7eEa3E584cc32Be0f8f5Ee20dc51633A";
				let NftContract = new web3.eth.Contract(Abi721Nft, Nft_address);
				let Nft_Balance = await NftContract.methods.balanceOf(address).call();

				console.log(lb_Balance);
				console.log(lc_Balance);
				let lbValue = web3.utils.fromWei(lb_Balance);
				let lcValue = web3.utils.fromWei(lc_Balance);
				// let NftValue = web3.utils.fromWei(Nft_Balance);
				this.dragonGridList.map(item => {
					if (item.type == 'Lb') {
						item.num = lbValue
					} else if (item.type == 'Lc') {
						item.num = lcValue
					} else if (item.type == 'NFT') {
						item.num = Nft_Balance
					}
				})
				console.log(lbValue);
				console.log(lcValue);
				// console.log(NftValue);
				// let Nft_address = "0xE9A6aA7D7eEa3E584cc32Be0f8f5Ee20dc51633A";
				// let NftContract = new web3.eth.Contract(AbiLb, Nft_address);
				let NFTGetTokenIds = await NftContract.methods.getTokenIds(address).call();
				console.log(NFTGetTokenIds);
				
				NFTGetTokenIds.map(async item => {
					let tokenUrl = await NftContract.methods.tokenURI(item).call();
					console.log(tokenUrl);
					let dragonInfo = await axios.get(tokenUrl);
					console.log(dragonInfo.data)
					this.dragonList.push(dragonInfo.data)
				})
				// let url108 = {
				// 	"description": "Violent redness10302000220650",
				// 	"external_url": "https://storageapi.fleek.co/f5158214-e839-49b4-a90e-fe6166fa3536-bucket/image_20/blue/Dragon_yuansu_002/10302000220650.jpg",
				// 	"image": "https://storageapi.fleek.co/f5158214-e839-49b4-a90e-fe6166fa3536-bucket/image_20/blue/Dragon_yuansu_002/10302000220650.jpg",
				// 	"name": "Violent redness",
				// 	"properties": {
				// 		"id": 10010,
				// 		"name": "Violent redness",
				// 		"quality": 1, //品质
				// 		"camp": 3,
				// 		"GrowUp": 1.3,
				// 		"energy": 20,
				// 		"hp": 180,
				// 		"attack": 60,
				// 		"defense": 20,
				// 		"skill": "5001,5030,5013,5008",
				// 		"speed": 25,
				// 		"critRate": 1000,
				// 		"critDamage": 1.5
				// 	}
				// }
			})
			// return {
			// 	usdtXs,
			// 	usdtPrice,
			// 	contract721,
			// };
		},
	}
}
