import dragonCard from "@/components/dragonCard.vue"
// import Abi721Nft from "@/jsons/abi-721-NFT.js";
// import AbiLCErc20 from "@/jsons/abi-LC-ERC20.js";
// import AbiUSDT from "@/jsons/USDT_token_abi.js";
// import AbiLb from "@/jsons/LB_abi.js";
// import {
// 	lbAddress,
// 	lcAddress,
// 	NftAddress,
// } from "@/jsons/contractAddress.js";
// import {
// 	mapGetters,
// 	mapActions
// } from "vuex";
import getAssetsMixin from "@/jsons/getAssetsMixin.js"
export default {
	name: 'myAssets',
	mixins:[getAssetsMixin],
	data() {
		return {
			elementLoadingBackground: 'rgba(0, 0, 0, 0.8)',
			// loading: false,
			dragonGridList: [
				{
					bgImage: require('@/assets/myAssets/col-1.png'),
					iconImage: require('@/assets/myAssets/col-1-icon.png'),
					// num: this.assets.Lb,
					num: '0',
					type: 'Lb',
				},
				{
					bgImage: require('@/assets/myAssets/col-2.png'),
					iconImage: require('@/assets/myAssets/col-2-icon.png'),
					// num: this.assets.Lc,
					num: '0',
					type: 'Lc',
				},
				{
					bgImage: require('@/assets/myAssets/col-3.png'),
					iconImage: require('@/assets/myAssets/col-3-icon.png'),
					// num: this.assets.NFT,
					num: '0',
					type: 'NFT',
				},
				{
					bgImage: require('@/assets/myAssets/col-4.png'),
					iconImage: require('@/assets/myAssets/col-4-icon.png'),
					// num: this.assets.EGG,
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
	// computed: {
	// 	...mapGetters({
	// 		web3Provider: 'web3Provider',
	// 		ethAddress: 'ethAddress',
	// 		userAssets:'userAssets'
	// 	}),
	// },
	created() {
		this.$nextTick(() => {
			this.getAssets()
		})
	},
	methods: {
		// ...mapActions({
		// 	setNftEggNum:'setNftEggNum',
		// 	setLc:'setLc',
		// 	setLb:'setLb'
		// }),
		toDetails(item) {
			// this.$routerUtil.toPath('/myAssets/details')
			this.$routerUtil.toName('myAssetsDetails', item);
			console.log('to details')
		},
		toPath(item) {
			if (item.path) {
				this.$routerUtil.toPath(item.path);
			}
		},
		// async getUsdtValue() {
		// 	if (!this.web3Provider) return;
		// 	let web3 = this.web3Provider;
		// 	this.loading = true;
		// 	let address = this.ethAddress;
		// 	// console.log(address);
		// 	let lbContract = new web3.eth.Contract(AbiLb, lbAddress);
		// 	let lbBalance = await lbContract.methods.balanceOf(address).call();
		// 	let lcContract = new web3.eth.Contract(AbiLCErc20, lcAddress);
		// 	let lcBalance = await lcContract.methods.balanceOf(address).call();
		// 	// let NftContract = new web3.eth.Contract(Abi721Nft, NftAddress);
		// 	// let NftBalance = await NftContract.methods.balanceOf(address).call();
		// 	// console.log(lbBalance);
		// 	// console.log(lcBalance);
		// 	let lbValue = web3.utils.fromWei(lbBalance);
		// 	let lcValue = web3.utils.fromWei(lcBalance);
		// 	console.log('-----------------------');
		// 	console.log(lbValue);
		// 	console.log(lcValue);
		// 	this.setLb(lbValue)
		// 	this.setLc(lcValue)
		// 	this.loading = false;
		// },
	}
}
