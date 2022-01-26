
import Abi721Nft from "@/jsons/abi-721-NFT.js";
import {
	NftAddress,
} from "@/jsons/contractAddress.js";
import {
	mapGetters
} from "vuex";
import axios from "axios";
import skillImages from "@/jsons/skill_Images.js"
import dragonImages from "@/jsons/dragon_Images.js"
export default {
	data: () => ({
		dragonList: [],
		dragonImages: dragonImages,
		skillsList: skillImages,
	}),
	computed: {
		...mapGetters({
			web3Provider: 'web3Provider',
			ethAddress: 'ethAddress'
		}),
	},
	methods: {
		async $M_getDragons() {
			let web3 = this.web3Provider;
			let address = this.ethAddress;
			let NftContract = new web3.eth.Contract(Abi721Nft, NftAddress);
			let NFTGetTokenIds = await NftContract.methods.getTokenIds(address).call();
			// console.log(NFTGetTokenIds);
			NFTGetTokenIds.map(async item => {
				let tokenUrl = await NftContract.methods.tokenURI(item).call();
				let dragonInfo = await axios.get(tokenUrl);
				let dragonImage = this.dragonImages.filter(dragonImageItem => dragonInfo
						.data.properties.id.toString() == dragonImageItem.id)[0]
					.dragonImage;
				// console.log(dragonImage)
				let params = JSON.parse(JSON.stringify(dragonInfo.data));
				let skillIds = params.properties.skill.split(',');
				let skillImages = [];
				skillIds.map(skillId => {
					this.skillsList.map(item => {
						if (item.id == skillId) {
							skillImages.push(item.skillImageS);
						}
					})
				})
				this.dragonList.push({
					id: item,
					dragonImage: dragonImage,
					skillImages: skillImages,
					isChecked:false,
					...dragonInfo.data
				});
			})
		}
	}
}