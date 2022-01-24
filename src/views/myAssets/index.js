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
} from "@/jsons/contractAddress.js";

import skillImageS5001 from '@/assets/skills/s/5001.png';
import skillImageS5002 from '@/assets/skills/s/5002.png';
import skillImageS5003 from '@/assets/skills/s/5003.png';
import skillImageS5004 from '@/assets/skills/s/5004.png';
import skillImageS5005 from '@/assets/skills/s/5005.png';
import skillImageS5006 from '@/assets/skills/s/5006.png';
import skillImageS5007 from '@/assets/skills/s/5007.png';
import skillImageS5008 from '@/assets/skills/s/5008.png';

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
			defaultSkills: [
				{
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
			],
			dragonImages:[
				{
					id:'10002',
					dragonImage:require('@/assets/dragon/Dragon_ziran_006.png'),
				},
				{
					id:'10003',
					dragonImage:require('@/assets/dragon/Dragon_jinshu_011.png'),
				},
				{
					id:'10004',
					dragonImage:require('@/assets/dragon/Dragon_ziran_005.png'),
				},
				{
					id:'10005',
					dragonImage:require('@/assets/dragon/Dragon_jinshu_014.png'),
				},
				{
					id:'10006',
					dragonImage:require('@/assets/dragon/Dragon_jinshu_006.png'),
				},
				{
					id:'10007',
					dragonImage:require('@/assets/dragon/Dragon_jinshu_007.png'),
				},
				{
					id:'10008',
					dragonImage:require('@/assets/dragon/Dragon_jinshu_008.png'),
				},
				{
					id:'10009',
					dragonImage:require('@/assets/dragon/Dragon_jinshu_002.png'),
				},
				{
					id:'10010',
					dragonImage:require('@/assets/dragon/Dragon_yuansu_002.png'),
				},
				{
					id:'10011',
					dragonImage:require('@/assets/dragon/Dragon_ziran_001.png'),
				},
				{
					id:'10012',
					dragonImage:require('@/assets/dragon/Dragon_yuansu_005.png'),
				},
				{
					id:'10013',
					dragonImage:require('@/assets/dragon/Dragon_ziran_004.png'),
				},
				{
					id:'10014',
					dragonImage:require('@/assets/dragon/Dragon_jinshu_013.png'),
				},
				{
					id:'10015',
					dragonImage:require('@/assets/dragon/Dragon_jinshu_005.png'),
				},
				{
					id:'10016',
					dragonImage:require('@/assets/dragon/Dragon_yuansu_004.png'),
				},
				{
					id:'10017',
					dragonImage:require('@/assets/dragon/Dragon_ziran_002.png'),
				},
				{
					id:'10018',
					dragonImage:require('@/assets/dragon/Dragon_ziran_003.png'),
				},
				{
					id:'10019',
					dragonImage:require('@/assets/dragon/Dragon_yuansu_003.png'),
				},
				{
					id:'10020',
					dragonImage:require('@/assets/dragon/Dragon_yuansu_001.png'),
				},
				{
					id:'10021',
					dragonImage:require('@/assets/dragon/Dragon_yuansu_006.png'),
				},
				{
					id:'11001',
					// dragonImage:require('@/assets/dragon/Dragon_dan_001.png'),
					dragonImage:require('@/assets/dragon/Dragon_yuansu_006.png'),
				},
				{
					id:'11002',
					// dragonImage:require('@/assets/dragon/Dragon_dan_002.png'),
					dragonImage:require('@/assets/dragon/Dragon_yuansu_006.png'),
				},
				{
					id:'11003',
					// dragonImage:require('@/assets/dragon/Dragon_dan_003.png'),
					dragonImage:require('@/assets/dragon/Dragon_yuansu_006.png'),
				},
				{
					id:'11004',
					// dragonImage:require('@/assets/dragon/Dragon_dan_004.png'),
					dragonImage:require('@/assets/dragon/Dragon_yuansu_006.png'),
				},
			],
			skillsList:[
				{
					id:'5001',
					skillImageS:skillImageS5001,
				},
				{
					id:'5002',
					skillImageS:skillImageS5002,
				},
				{
					id:'5003',
					skillImageS:skillImageS5003,
				},
				{
					id:'5004',
					skillImageS:skillImageS5004,
				},
				{
					id:'5005',
					skillImageS:skillImageS5005,
				},
				{
					id:'5006',
					skillImageS:skillImageS5006,
				},
				{
					id:'5007',
					skillImageS:skillImageS5007,
				},
				{
					id:'5008',
					skillImageS:skillImageS5008,
				},
				{
					id:'5009',
					skillImageS:skillImageS5001,
				},
				{
					id:'5010',
					skillImageS:skillImageS5002,
				},
				{
					id:'5011',
					skillImageS:skillImageS5003,
				},
				{
					id:'5012',
					skillImageS:skillImageS5004,
				},
				{
					id:'5013',
					skillImageS:skillImageS5005,
				},
				{
					id:'5014',
					skillImageS:skillImageS5006,
				},
				{
					id:'5015',
					skillImageS:skillImageS5007,
				},
				{
					id:'5016',
					skillImageS:skillImageS5008,
				},
				
				{
					id:'5017',
					skillImageS:skillImageS5001,
				},
				{
					id:'5018',
					skillImageS:skillImageS5002,
				},
				{
					id:'5019',
					skillImageS:skillImageS5003,
				},
				{
					id:'5020',
					skillImageS:skillImageS5004,
				},
				{
					id:'5021',
					skillImageS:skillImageS5005,
				},
				{
					id:'5022',
					skillImageS:skillImageS5006,
				},
				{
					id:'5023',
					skillImageS:skillImageS5007,
				},
				{
					id:'5024',
					skillImageS:skillImageS5008,
				},
				{
					id:'5025',
					skillImageS:skillImageS5001,
				},
				{
					id:'5026',
					skillImageS:skillImageS5002,
				},
				{
					id:'5027',
					skillImageS:skillImageS5003,
				},
				{
					id:'5028',
					skillImageS:skillImageS5004,
				},
				{
					id:'5029',
					skillImageS:skillImageS5005,
				},
				{
					id:'5030',
					skillImageS:skillImageS5006,
				},
				{
					id:'5031',
					skillImageS:skillImageS5007,
				},
				{
					id:'5032',
					skillImageS:skillImageS5008,
				},
			],
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
			// console.log(this.skillsList)
		})
	},
	methods: {
		toDetails(item) {
			// this.$routerUtil.toPath('/myAssets/details')
			this.$routerUtil.toName('myAssetsDetails',item);
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
					// console.log(item,tokenUrl);
					let dragonInfo = await axios.get(tokenUrl);
					// console.log(dragonInfo.data);
					let dragonImage = this.dragonImages.filter(dragonImageItem=>dragonInfo.data.properties.id.toString() == dragonImageItem.id)[0].dragonImage;
					console.log(dragonImage)
					let params = JSON.parse(JSON.stringify(dragonInfo.data));
					let skillIds = params.properties.skill.split(',');
					let skillImages = [];
					skillIds.map(skillId=>{
						this.skillsList.map(item=>{
							if(item.id == skillId) {
								skillImages.push(item.skillImageS)
							}
						})
					})
					// console.log(params)
					this.dragonList.push({
						id: item,
						dragonImage:dragonImage,
						skillImages:skillImages,
						...dragonInfo.data
					});
				})
				console.log(this.dragonList)
				this.loading = false;
			}).catch(e=> this.loading = false);
		},
	}
}
