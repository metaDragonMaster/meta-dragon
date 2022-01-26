import Abi721Nft from "@/jsons/abi-721-NFT.js";
import {
	NftAddress,
} from "@/jsons/contractAddress.js";
import {
	mapGetters,
	mapActions
} from "vuex";
import axios from "axios";
import skillImages from "@/jsons/skill_Images.js"
import dragonImages from "@/jsons/dragon_Images.js"
import Decimal from "decimal.js";

export default {
	data: () => ({
		dragonList: [], //龙列表
		dragonEggList:[], //蛋列表
		dragonImages: dragonImages,
		skillsList: skillImages,
	}),
	computed: {
		...mapGetters({
			web3Provider: 'web3Provider',
			ethAddress: 'ethAddress',
			userAssets: 'userAssets'
		}),
		pushEnd() {
			return !(this.dragonList.length == this.userAssets.NFT&& this.dragonEggList.length == this.userAssets.EGG)
		},
	},
	methods: {
		...mapActions({
			setNftEggNum:'setNftEggNum',
		}),
		async $M_getDragons() {
			let web3 = this.web3Provider;
			let address = this.ethAddress;
			let NftContract = new web3.eth.Contract(Abi721Nft, NftAddress);
			let NFTGetTokenIds = await NftContract.methods.getTokenIds(address).call();
			console.log(NFTGetTokenIds);
			this.setNftEggNum(NFTGetTokenIds);
			let isPushEgg = false;
			let dragons = [];
			let eggs = [];
			await NFTGetTokenIds.map(async item => {
				let bigNum = '2000000000000000000000000'.length;
				let numId = item.length;
				isPushEgg = numId < bigNum;
				if (isPushEgg) {
					let tokenUrl = await NftContract.methods.tokenURI(item).call();
					// console.log("$M_getDragons",item)
					let hatchMBC = await NftContract.methods.getNFTincubation(item).call();
				 // console.log("$M_getDragons",hatchMBC)
					let dragonInfo = await axios.get(tokenUrl);
					let dragonImage = this.dragonImages.filter(dragonImageItem => dragonInfo
							.data.properties.id.toString() == dragonImageItem.id)[0]
						.dragonImage;
					let params = JSON.parse(JSON.stringify(dragonInfo.data));
					let skillIds = params.properties.skill.split(',');
					let skillImages = [];
					skillIds.map(skillId => {
						this.skillsList.map(skillItem => {
							if (skillItem.id == skillId) {
								skillImages.push(skillItem.skillImageS);
							}
						})
					})
					dragons.push({
						id: item,
						dragonImage: dragonImage,
						skillImages: skillImages,
						isChecked: false,
						dragonHatch:hatchMBC,
						...dragonInfo.data
					});
					// console.log(this.dragonList.length)
				} else {
					eggs.push({
						id: item,
					});
				}
			})
			this.dragonList = dragons;
			this.dragonEggList = eggs;
		},
	}
}
