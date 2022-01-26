// import skillImageS5001 from '@/assets/skills/s/5001.png';
// import skillImageS5002 from '@/assets/skills/s/5002.png';
// import skillImageS5003 from '@/assets/skills/s/5003.png';
// import skillImageS5004 from '@/assets/skills/s/5004.png';
// import skillImageS5005 from '@/assets/skills/s/5005.png';
// import skillImageS5006 from '@/assets/skills/s/5006.png';
// import skillImageS5007 from '@/assets/skills/s/5007.png';
// import skillImageS5008 from '@/assets/skills/s/5008.png';

// import Abi721Nft from "@/jsons/abi-721-NFT.js";
// import {
// 	NftAddress,
// } from "@/jsons/contractAddress.js";
import {
	mapActions
} from "vuex";
// import axios from "axios";

import ThemeSelect from "@/components/ThemeSelect.vue";
import dragonCard from "@/components/dragonCard.vue";
import eggCard from "@/components/eggCard.vue"

import skillImages from "@/jsons/skill_Images.js";
import dragonImages from "@/jsons/dragon_Images.js";
import getDragonListMixin from "@/jsons/getDragonListMixin.js";
import moment from 'moment';

export default {
	mixins:[getDragonListMixin],
	data: () => ({
		batchDialog:false,
		elementLoadingBackground:'rgba(0, 0, 0, 0.8)',
		loading:false,
		typeCheck:false,//是否进行选择
		selectTypeValue:"Dragon",
		// selectTypeValue:"Egg",
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
		timer:null,
		
		// dragonImages: dragonImages,
		// skillsList: skillImages,
	}),
	components: {
		dragonCard,
		ThemeSelect,
		eggCard
	},
	computed: {
		// ...mapGetters({
		// 	web3Provider: 'web3Provider',
		// 	ethAddress: 'ethAddress'
		// }),
		AllAssets() {
			let assetsNum = '';
			if(this.selectTypeValue == "Egg") assetsNum = this.dragonEggList.length;
			if(this.selectTypeValue == "Dragon") assetsNum = this.dragonList.length;
			// console.log(assetsNum);
			return assetsNum;
		}
	},
	beforeDestroy() {
		clearInterval(this.timer)
	},
	mounted() {
		this.$nextTick(()=>{
			this.getDragonList();
			this.setTimer()
		})
	},
	methods: {
		...mapActions({
			setTimestamp:'setTimestamp'
		}),
		setTimer() {
			this.timer = setInterval(() => {
				let timeNow = moment(new Date()).unix();
				this.setTimestamp(timeNow);
			}, 1000)
		},
		
		emitValue(val) {
			this.selectTypeValue = val;
			// this.dragonList = []
			// this.getDragonList()
		},
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
			this.loading = true;
			let isEgg = this.selectTypeValue == 'Egg'
			await this.$M_getDragons(isEgg);
			this.loading = false;
			
			
			// let web3 = this.web3Provider;
			// let address = this.ethAddress;
			// let NftContract = new web3.eth.Contract(Abi721Nft, NftAddress);
			// let NFTGetTokenIds = await NftContract.methods.getTokenIds(address).call();
			// // console.log(NFTGetTokenIds);
			// NFTGetTokenIds.map(async item => {
			// 	let tokenUrl = await NftContract.methods.tokenURI(item).call();
			// 	let dragonInfo = await axios.get(tokenUrl);
			// 	let dragonImage = this.dragonImages.filter(dragonImageItem => dragonInfo
			// 			.data.properties.id.toString() == dragonImageItem.id)[0]
			// 		.dragonImage;
			// 	// console.log(dragonImage)
			// 	let params = JSON.parse(JSON.stringify(dragonInfo.data));
			// 	let skillIds = params.properties.skill.split(',');
			// 	let skillImages = [];
			// 	skillIds.map(skillId => {
			// 		this.skillsList.map(item => {
			// 			if (item.id == skillId) {
			// 				skillImages.push(item.skillImageS);
			// 			}
			// 		})
			// 	})
			// 	this.dragonList.push({
			// 		id: item,
			// 		dragonImage: dragonImage,
			// 		skillImages: skillImages,
			// 		isChecked:false,
			// 		...dragonInfo.data
			// 	});
			// })
			// this.createCheckedList(NFTGetTokenIds);
			// console.log(this.dragonList)
		},
	}
}
