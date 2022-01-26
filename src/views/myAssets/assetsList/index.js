import skillImageS5001 from '@/assets/skills/s/5001.png';
import skillImageS5002 from '@/assets/skills/s/5002.png';
import skillImageS5003 from '@/assets/skills/s/5003.png';
import skillImageS5004 from '@/assets/skills/s/5004.png';
import skillImageS5005 from '@/assets/skills/s/5005.png';
import skillImageS5006 from '@/assets/skills/s/5006.png';
import skillImageS5007 from '@/assets/skills/s/5007.png';
import skillImageS5008 from '@/assets/skills/s/5008.png';

import Abi721Nft from "@/jsons/abi-721-NFT.js";
import dragonCard from "@/components/dragonCard.vue";
import {
	NftAddress,
} from "@/jsons/contractAddress.js";
import {
	mapGetters
} from "vuex";
import axios from "axios";
import ThemeSelect from "@/components/ThemeSelect.vue";
export default {
	data: () => ({
		batchDialog:false,
		elementLoadingBackground:'rgba(0, 0, 0, 0.8)',
		loading:false,
		typeCheck:false,//是否进行选择
		checkedList:[],//被选择后的龙
		dragonList: [],
		selectTypeValue:"Dragon",
		selectList:[
			{
				value:'Dragon',
				title:'Dragon'
			},
			{
				value:'Egg',
				title:'Egg'
			}
		],
		dragonImages: [{
				id: '10002',
				dragonImage: require('@/assets/dragon/Dragon_ziran_006.png'),
			},
			{
				id: '10003',
				dragonImage: require('@/assets/dragon/Dragon_jinshu_011.png'),
			},
			{
				id: '10004',
				dragonImage: require('@/assets/dragon/Dragon_ziran_005.png'),
			},
			{
				id: '10005',
				dragonImage: require('@/assets/dragon/Dragon_jinshu_014.png'),
			},
			{
				id: '10006',
				dragonImage: require('@/assets/dragon/Dragon_jinshu_006.png'),
			},
			{
				id: '10007',
				dragonImage: require('@/assets/dragon/Dragon_jinshu_007.png'),
			},
			{
				id: '10008',
				dragonImage: require('@/assets/dragon/Dragon_jinshu_008.png'),
			},
			{
				id: '10009',
				dragonImage: require('@/assets/dragon/Dragon_jinshu_002.png'),
			},
			{
				id: '10010',
				dragonImage: require('@/assets/dragon/Dragon_yuansu_002.png'),
			},
			{
				id: '10011',
				dragonImage: require('@/assets/dragon/Dragon_ziran_001.png'),
			},
			{
				id: '10012',
				dragonImage: require('@/assets/dragon/Dragon_yuansu_005.png'),
			},
			{
				id: '10013',
				dragonImage: require('@/assets/dragon/Dragon_ziran_004.png'),
			},
			{
				id: '10014',
				dragonImage: require('@/assets/dragon/Dragon_jinshu_013.png'),
			},
			{
				id: '10015',
				dragonImage: require('@/assets/dragon/Dragon_jinshu_005.png'),
			},
			{
				id: '10016',
				dragonImage: require('@/assets/dragon/Dragon_yuansu_004.png'),
			},
			{
				id: '10017',
				dragonImage: require('@/assets/dragon/Dragon_ziran_002.png'),
			},
			{
				id: '10018',
				dragonImage: require('@/assets/dragon/Dragon_ziran_003.png'),
			},
			{
				id: '10019',
				dragonImage: require('@/assets/dragon/Dragon_yuansu_003.png'),
			},
			{
				id: '10020',
				dragonImage: require('@/assets/dragon/Dragon_yuansu_001.png'),
			},
			{
				id: '10021',
				dragonImage: require('@/assets/dragon/Dragon_yuansu_006.png'),
			},
			{
				id: '11001',
				// dragonImage:require('@/assets/dragon/Dragon_dan_001.png'),
				dragonImage: require('@/assets/dragon/Dragon_yuansu_006.png'),
			},
			{
				id: '11002',
				// dragonImage:require('@/assets/dragon/Dragon_dan_002.png'),
				dragonImage: require('@/assets/dragon/Dragon_yuansu_006.png'),
			},
			{
				id: '11003',
				// dragonImage:require('@/assets/dragon/Dragon_dan_003.png'),
				dragonImage: require('@/assets/dragon/Dragon_yuansu_006.png'),
			},
			{
				id: '11004',
				// dragonImage:require('@/assets/dragon/Dragon_dan_004.png'),
				dragonImage: require('@/assets/dragon/Dragon_yuansu_006.png'),
			},
		],
		skillsList: [{
				id: '5001',
				skillImageS: skillImageS5001,
			},
			{
				id: '5002',
				skillImageS: skillImageS5002,
			},
			{
				id: '5003',
				skillImageS: skillImageS5003,
			},
			{
				id: '5004',
				skillImageS: skillImageS5004,
			},
			{
				id: '5005',
				skillImageS: skillImageS5005,
			},
			{
				id: '5006',
				skillImageS: skillImageS5006,
			},
			{
				id: '5007',
				skillImageS: skillImageS5007,
			},
			{
				id: '5008',
				skillImageS: skillImageS5008,
			},
			{
				id: '5009',
				skillImageS: skillImageS5001,
			},
			{
				id: '5010',
				skillImageS: skillImageS5002,
			},
			{
				id: '5011',
				skillImageS: skillImageS5003,
			},
			{
				id: '5012',
				skillImageS: skillImageS5004,
			},
			{
				id: '5013',
				skillImageS: skillImageS5005,
			},
			{
				id: '5014',
				skillImageS: skillImageS5006,
			},
			{
				id: '5015',
				skillImageS: skillImageS5007,
			},
			{
				id: '5016',
				skillImageS: skillImageS5008,
			},

			{
				id: '5017',
				skillImageS: skillImageS5001,
			},
			{
				id: '5018',
				skillImageS: skillImageS5002,
			},
			{
				id: '5019',
				skillImageS: skillImageS5003,
			},
			{
				id: '5020',
				skillImageS: skillImageS5004,
			},
			{
				id: '5021',
				skillImageS: skillImageS5005,
			},
			{
				id: '5022',
				skillImageS: skillImageS5006,
			},
			{
				id: '5023',
				skillImageS: skillImageS5007,
			},
			{
				id: '5024',
				skillImageS: skillImageS5008,
			},
			{
				id: '5025',
				skillImageS: skillImageS5001,
			},
			{
				id: '5026',
				skillImageS: skillImageS5002,
			},
			{
				id: '5027',
				skillImageS: skillImageS5003,
			},
			{
				id: '5028',
				skillImageS: skillImageS5004,
			},
			{
				id: '5029',
				skillImageS: skillImageS5005,
			},
			{
				id: '5030',
				skillImageS: skillImageS5006,
			},
			{
				id: '5031',
				skillImageS: skillImageS5007,
			},
			{
				id: '5032',
				skillImageS: skillImageS5008,
			},
		],
	}),
	components: {
		dragonCard,
		ThemeSelect,
	},
	computed: {
		...mapGetters({
			web3Provider: 'web3Provider',
			ethAddress: 'ethAddress'
		}),
	},
	mounted() {
		this.$nextTick(()=>{
			this.getDragonList();
		})
	},
	methods: {
		closeBatchDialog() {
			this.sendDefine();
			this.removeChecked();
		},
		sendDefine() {
			this.batchDialog = false;
		},
		defineChecked() {
			this.batchDialog = true;
		},
		changeCardCheck() {
			this.typeCheck = !this.typeCheck;
		},
		cardClick(item) {
			if(this.typeCheck) {
				item.isChecked = !item.isChecked;
			} else {
				this.toDetails(item)
			}
		},
		toDetails(item) {
			// this.$routerUtil.toPath('/myAssets/details', item)
			this.$routerUtil.toName('myAssetsDetails', item);
			console.log('to details')
		},
		removeChecked() {
			this.dragonList.map(item=>item.isChecked = false);
			// this.changeCardCheck()
			this.typeCheck = false;
		},
		async getDragonList() {
			if (!this.web3Provider) return;
			let web3 = this.web3Provider;
			this.loading = true;
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
			// this.createCheckedList(NFTGetTokenIds);
			// console.log(this.dragonList)
			this.loading = false;
		},
	}
}
