// import skillImageS5001 from '@/assets/skills/s/5001.png';
// import skillImageS5002 from '@/assets/skills/s/5002.png';
// import skillImageS5003 from '@/assets/skills/s/5003.png';
// import skillImageS5004 from '@/assets/skills/s/5004.png';
// import skillImageS5005 from '@/assets/skills/s/5005.png';
// import skillImageS5006 from '@/assets/skills/s/5006.png';
// import skillImageS5007 from '@/assets/skills/s/5007.png';
// import skillImageS5008 from '@/assets/skills/s/5008.png';

import AbiNft from "@/jsons/abi-721-NFT.js";
import AbiBatchTransfer from "@/jsons/abiBatchTransfer"
import {
	NftAddress,
	batchTransferAddress
} from "@/jsons/contractAddress.js";
import {
	mapActions,
	mapGetters
} from "vuex";
// import axios from "axios";

import ThemeSelect from "@/components/ThemeSelect.vue";
import dragonCard from "@/components/dragonCard.vue";
import eggCard from "@/components/eggCard.vue"

import skillImages from "@/jsons/skill_Images.js";
import dragonImages from "@/jsons/dragon_Images.js";
import getDragonListMixin from "@/jsons/getDragonListMixin.js";
import getAssetsMixin from "@/jsons/getAssetsMixin.js"
import moment from 'moment';

export default {
	mixins:[getDragonListMixin,getAssetsMixin],
	data: () => ({
		batchDialog:false,
		elementLoadingBackground:'rgba(0, 0, 0, 0.8)',
		loading:false,
		batchLoading:false,
		batchDialogLoading:false,
		typeCheck:false,//是否进行选择
		selectTypeValue:"Dragon",
		// selectTypeValue:"Egg",
		timer:null,
		// sendAddress: '',
		// dragonImages: dragonImages,
		// skillsList: skillImages,
	}),
	components: {
		dragonCard,
		ThemeSelect,
		eggCard
	},
	computed: {
		...mapGetters({
			web3Provider: 'web3Provider',
			ethAddress: 'ethAddress'
		}),
		AllAssets() {
			let assetsNum = '';
			if(this.selectTypeValue == "Egg") assetsNum = this.dragonEggList.length;
			if(this.selectTypeValue == "Dragon") assetsNum = this.dragonList.length;
			// console.log(assetsNum);
			return assetsNum;
		},
		selectTypeTitle() {
			return this.selectList.filter(item=>this.selectTypeValue == item.value)[0].title;
		},
		showBatchTransfer() {
			return this.selectTypeValue == 'Dragon'
		},
		getCheckDragonList() {
			return this.dragonList.filter(item=>item.isChecked == true).map(item=> item = item.id);
		},
		checkDragonLength() {
			return this.getCheckDragonList.length
		},
		selectList() {
			return [
				{
					value:'Dragon',
					title: this.$t('myAssets_assetsList.dragon')
				},
				{
					value:'Egg',
					title: this.$t('myAssets_assetsList.egg')
				}
			]
		}
	},
	beforeDestroy() {
		clearInterval(this.timer)
	},
	mounted() {
		this.$nextTick(()=>{
			this.getDragonList();
			this.setTimer();
		})
	},
	methods: {
		// 
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
		closeBatchDialog() {
			this.batchDialog = false;
			this.$refs['sendAddress'].value = '';
			this.removeChecked();
		},
		eggIncubationSuccess() {
			this.getAssets();
			this.getDragonList();
		},
		async sendDefine(addressValue) {
			if (!this.web3Provider) return;
			this.batchDialogLoading = true;
			let web3 = this.web3Provider;
			let address = this.ethAddress;
			let BatchContract = new web3.eth.Contract(AbiBatchTransfer, batchTransferAddress);
			console.log(BatchContract)
			let checkedDragonIdList = this.getCheckDragonList;
			console.log(checkedDragonIdList)
			try {
				// 0xb75d7BCE4cE82fcaB65318A71a34C7AE709D9ef7
				let sendStatic = await BatchContract.methods
					.batchTransfer(
						NftAddress,
						addressValue,
						checkedDragonIdList
					).send({
						from: address
					})
					console.log(sendStatic)
				if (sendStatic.status) {
					console.log('转账成功')
					this.batchDialogLoading = false;
					this.$message.success("batchTransfer success")
					this.closeBatchDialog();
					this.getAssets();
					this.getDragonList();
					// this.$routerUtil.toName('redirect',{path:'/myAssets'})
					return true;
				} else {
					this.batchDialogLoading = false;
					console.log('转账失败')
					this.$message.warning("batchTransfer grant failed")
				}
			} catch (e) {
				console.log('转账失败 catch')
				this.$message.warning("batchTransfer grant failed")
				this.batchDialogLoading = false;
			}
		},
		// closeBatchDialog() {
		// 	this.batchDialog = false;
		// },
		openBatchDialog() {
			this.batchDialog = true;
		},
		defineChecked() {
			let checkedDragonIdList = this.getCheckDragonList;
			if(checkedDragonIdList.length<=0) return;
			this.openBatchDialog();
		},
		// getCheckDragonList() {
		// 	return this.dragonList.filter(item=>item.isChecked == true).map(item=> item = item.id);
		// },
		async changeCardCheck() {
			if(this.typeCheck == true) return this.typeCheck = false;
			let haveApprove = await this.batchTransferApprove();
			console.log()
			if(haveApprove) {
				this.typeCheck = true;
			}
		},
		async batchTransferApprove() {
			if (!this.web3Provider) return;
			this.batchLoading = true;
			let web3 = this.web3Provider;
			let address = this.ethAddress;
			let NftContract = new web3.eth.Contract(AbiNft, NftAddress);
			let contractAddress = batchTransferAddress;
			let rs = await NftContract.methods.isApprovedForAll(address, contractAddress).call();
			console.log(rs);
			// let y = new Decimal(rs)
			// let contract721 = new web3.eth.Contract(AbiNft, contractAddress);
			if (!rs) {
				try {
					let sendStatic = await NftContract.methods
						.setApprovalForAll(
							contractAddress,
							true
						).send({
							from: address
						})
					if (sendStatic.status) {
						console.log('授权成功')
						this.$message.success("approve success")
						return true;
					} else {
						this.$message.warning("approve grant failed")
					}
					this.batchLoading = false;
				} catch (e) {
					this.$message.warning("approve grant failed")
					this.batchLoading = false;
				}
			} else {
				this.batchLoading = false;
				return true;
				// console.log('已连接上区块链')
			}
			return false;
		},
		
		async getDragonList() {
			if (!this.web3Provider) return;
			this.loading = true;
			let isEgg = this.selectTypeValue == 'Egg'
			await this.$M_getDragons(isEgg);
			this.loading = false;
		},
	}
}
