import rate from "@/components/rate.vue";
import dragonCard from "@/components/dragonCard.vue"
import Abi721Nft from "@/jsons/abi-721-NFT.js";
import AbiLCErc20 from "@/jsons/abi-LC-ERC20.js";
import AbiUSDT from "@/jsons/USDT_token_abi.js";
import AbiLb from "@/jsons/LB_abi.js";
import {
	lbAddress,
	lcAddress,
	NftAddress,
} from "@/jsons/contractAddress.js"
import {
	mapGetters
} from "vuex";
import axios from "axios";
export default {
	name:'myAssets',
	data() {
		return {
			elementLoadingBackground:'rgba(0, 0, 0, 0.8)',
			loading:false,
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
		async getUsdtValue() {
			if (!this.web3Provider) return;
			let web3 = this.web3Provider;
			this.loading = true;
			web3.eth.getAccounts().then(async res => {
				let address = res[0];
				console.log(address);
				// let lbAddress = "0xb31429e1016D7Dc48280d9770859A26f1eA18168";
				let lbContract = new web3.eth.Contract(AbiLb, lbAddress);
				let lbBalance = await lbContract.methods.balanceOf(address).call();
				// let lcAddress = "0x8D041FE9fe616D5d1B62f67D79AE0FA3cB792c14";
				let lcContract = new web3.eth.Contract(AbiLCErc20, lcAddress);
				let lcBalance = await lcContract.methods.balanceOf(address).call();
				// let NftAddress = "0xE9A6aA7D7eEa3E584cc32Be0f8f5Ee20dc51633A";
				let NftContract = new web3.eth.Contract(Abi721Nft, NftAddress);
				let NftBalance = await NftContract.methods.balanceOf(address).call();
				console.log(lbBalance);
				console.log(lcBalance);
				let lbValue = web3.utils.fromWei(lbBalance);
				let lcValue = web3.utils.fromWei(lcBalance);
				// let NftValue = web3.utils.fromWei(Nft_Balance);
				this.dragonGridList.map(item => {
					if (item.type == 'Lb') {
						item.num = lbValue
					} else if (item.type == 'Lc') {
						item.num = lcValue
					} else if (item.type == 'NFT') {
						item.num = NftBalance
					}
				})
				console.log(lbValue);
				console.log(lcValue);
				let NFTGetTokenIds = await NftContract.methods.getTokenIds(address).call();
				console.log(NFTGetTokenIds);
				NFTGetTokenIds.map(async item => {
					let tokenUrl = await NftContract.methods.tokenURI(item).call();
					console.log(item,tokenUrl);
					let dragonInfo = await axios.get(tokenUrl);
					console.log(dragonInfo.data);
					this.dragonList.push({
						id: item,
						...dragonInfo.data
					});
				})
				this.loading = false;
			}).catch(e=> this.loading = false);
		},
	}
}
