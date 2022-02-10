import Abi721Nft from "@/jsons/abi-721-NFT.js";
import AbiLCErc20 from "@/jsons/abi-LC-ERC20.js";
import AbiLb from "@/jsons/LB_abi.js";
import {
	lbAddress,
	lcAddress,
	NftAddress,
} from "@/jsons/contractAddress.js";
import {
	mapGetters,
	mapActions
} from "vuex";
export default {
	data() {
		return {
			getAssetsloading: false,
		}
	},
	computed: {
		...mapGetters({
			web3Provider: 'web3Provider',
			ethAddress: 'ethAddress',
			userAssets:'userAssets'
		}),
	},
	methods: {
		...mapActions({
			setNftEggNum:'setNftEggNum',
			setLc:'setLc',
			setLb:'setLb'
		}),
		async getAssets() {
			if (!this.web3Provider) return;
			let web3 = this.web3Provider;
			this.getAssetsloading = true;
			let address = this.ethAddress;
			let lbContract = new web3.eth.Contract(AbiLb, lbAddress);
			let lbBalance = await lbContract.methods.balanceOf(address).call();
			let lcContract = new web3.eth.Contract(AbiLCErc20, lcAddress);
			let lcBalance = await lcContract.methods.balanceOf(address).call();
			// let NftContract = new web3.eth.Contract(Abi721Nft, NftAddress);
			// let NftBalance = await NftContract.methods.balanceOf(address).call();
			let lbValue = web3.utils.fromWei(lbBalance);
			let lcValue = web3.utils.fromWei(lcBalance);
			console.log('-----------------------');
			console.log(lbValue);
			console.log(lcValue);
			this.setLb(lbValue)
			this.setLc(lcValue)
			this.getAssetsloading = false;
		},
	}
}
