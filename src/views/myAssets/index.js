import dragonCard from "@/components/dragonCard.vue"
import Abi721Nft from "@/jsons/abi-721-NFT.js";
import AbiLCErc20 from "@/jsons/abi-LC-ERC20.js";
import AbiUSDT from "@/jsons/USDT_token_abi.js";
import AbiLb from "@/jsons/LB_abi.js";
import {
	lbAddress,
	lcAddress,
	NftAddress,
} from "@/jsons/contractAddress.js";
import {
	mapGetters
} from "vuex";
export default {
	name: 'myAssets',
	data() {
		return {
			elementLoadingBackground: 'rgba(0, 0, 0, 0.8)',
			loading: false,
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
			navList: [
				// <button :class="{'theme-type': $route.name == 'assetsList'}" @click="$routerUtil.toPath('/myAssets/assetsList')">My Assets</button>
				// <!-- <button :class="{'theme-type': $route.name == 'hatchEgg'}" @click="$routerUtil.toPath('/myAssets/hatchEgg')">Hatch</button> -->
				{
					path: "/myAssets/assetsList",
					text: "My Assets",
					name: 'assetsList'
				},
				{
					path: "/myAssets/hatchEgg",
					text: "Hatch",
					name: 'hatchEgg'
				},
			]
		}
	},
	components: {
		dragonCard,
	},
	computed: {
		...mapGetters({
			web3Provider: 'web3Provider',
			ethAddress: 'ethAddress'
		}),
	},
	mounted() {
		this.$nextTick(() => {
			this.getUsdtValue()
			// console.log(this.skillsList)
		})
	},
	methods: {
		toDetails(item) {
			// this.$routerUtil.toPath('/myAssets/details')
			this.$routerUtil.toName('myAssetsDetails', item);
			console.log('to details')
		},
		toPath(item) {
			if (item.path) {
				this.$routerUtil.toPath(item.path)
			}
		},
		async getUsdtValue() {
			if (!this.web3Provider) return;
			let web3 = this.web3Provider;
			this.loading = true;
			let address = this.ethAddress;
			console.log(address);
			let lbContract = new web3.eth.Contract(AbiLb, lbAddress);
			let lbBalance = await lbContract.methods.balanceOf(address).call();
			let lcContract = new web3.eth.Contract(AbiLCErc20, lcAddress);
			let lcBalance = await lcContract.methods.balanceOf(address).call();
			let NftContract = new web3.eth.Contract(Abi721Nft, NftAddress);
			let NftBalance = await NftContract.methods.balanceOf(address).call();
			console.log(lbBalance);
			console.log(lcBalance);
			let lbValue = web3.utils.fromWei(lbBalance);
			let lcValue = web3.utils.fromWei(lcBalance);
			this.dragonGridList.map(item => {
				if (item.type == 'Lb') {
					item.num = lbValue
				} else if (item.type == 'Lc') {
					item.num = lcValue
				} else if (item.type == 'NFT') {
					item.num = NftBalance
				}
			})
			this.loading = false;
		},
	}
}
