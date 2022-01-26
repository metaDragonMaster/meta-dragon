import {
	NftAddress,
	lcAddress,
} from "@/jsons/contractAddress.js";
import {
	mapGetters
} from "vuex";
// import axios from "axios";
import dragonCard from "@/components/dragonCard.vue";
import choiceDragon from "@/components/choiceDragon.vue";
import AbiLC from "@/jsons/abi-LC-ERC20.js";
import Abi721Nft from "@/jsons/abi-721-NFT.js";
import Decimal from "decimal.js";
export default {
	data: () => ({
		elementLoadingBackground: 'rgba(0, 0, 0, 0.8)',
		loading: false,
		dragonInfoLeft: {},
		hatchLeftNum: 0,
		dragonInfoRight: {},
		hatchRightNum: 0,
		dialogHandleValue: false,
		currentCheckObjeckName: "",
	}),
	components: {
		dragonCard,
		choiceDragon,
	},
	computed: {
		...mapGetters({
			web3Provider: 'web3Provider',
			ethAddress: 'ethAddress'
		}),
		hatchPrice() {
			let Anum = parseInt(this.hatchLeftNum);
			let Bnum = parseInt(this.hatchRightNum);
			let ACon = 0;
			let BCon = 0;
			const consumes = [
				{num:0,consume:8000},
				{num:1,consume:8100},
				{num:2,consume:8200},
				{num:3,consume:8300},
				{num:4,consume:8400},
				{num:5,consume:8500},
				{num:6,consume:8600},
			]
			consumes.map(item=>{
				if(Anum == item.num) ACon = item.consume
				if(Bnum == item.num) BCon = item.consume
			})
			return parseInt(ACon + BCon) || 0
		}
	},
	mounted() {
		this.hatchApprove();
	},
	methods: {
		openChoiceDragon(currentCheckObjeckName, dragonId) {
			this.currentCheckObjeckName = currentCheckObjeckName;
			this.dialogHandleValue = true;
			if (dragonId) {
				this.$refs['choiceDragon'].cancelCheck(dragonId)
			}
		},
		async checkedDragon(dragonInfo) {
			if (this.dragonInfoLeft.id && this.dragonInfoRight.id && this.dragonInfoLeft.id == this.dragonInfoRight
				.id) {
				return;
			}
			if (this.currentCheckObjeckName == 'dragonInfoLeft') {
				this.dragonInfoLeft = dragonInfo;
				this.hatchLeftNum = await this.getNFTincubation(dragonInfo.id)
			} else if (this.currentCheckObjeckName == 'dragonInfoRight') {
				this.dragonInfoRight = dragonInfo;
				this.hatchRightNum = await this.getNFTincubation(dragonInfo.id)
			}
		},
		async hatchApprove() {
			if (!this.web3Provider) return;
			this.loading = true;
			let web3 = this.web3Provider;
			let address = this.ethAddress;
			let LcContract = new web3.eth.Contract(AbiLC, lcAddress);
			let contractAddress = NftAddress;
			let rs = await LcContract.methods.allowance(address, contractAddress).call();
			console.log(rs);
			let y = new Decimal(rs)
			let contract721 = new web3.eth.Contract(Abi721Nft, contractAddress);
			if (y.sub(20000) < 0) {
				try {
					let sendStatic = await LcContract.methods
						.approve(
							contractAddress,
							"11579208923731695423570985008687907853269984665640564039457584007913129639936"
						).send({
							from: address
						})
					if (sendStatic.status) {
						console.log('授权成功')
						this.$message.success("approve success")
					} else {
						this.$message.warning("approve grant failed")
					}
					this.loading = false;
				} catch (e) {
					this.$message.warning("approve grant failed")
					this.loading = false;
				}
			} else {
				this.loading = false;
				// console.log('已连接上区块链')
			}
		},
		async handleHatch() {
			// this.getNFTincubation()
			if (!this.web3Provider) return;
			let web3 = this.web3Provider;
			this.loading = true;
			let address = this.ethAddress;
			let lcContract = new web3.eth.Contract(AbiLC, lcAddress);
			let balanceLc = await lcContract.methods.balanceOf(address).call();
			let nftContract = new web3.eth.Contract(Abi721Nft, NftAddress);
			let LcWei = web3.utils.fromWei(balanceLc);
			if (parseInt(LcWei) < parseInt(this.hatchPrice)) {
				this.$message.error('lc balance is not enough');
				this.loading = false;
			} else {
				let idA = this.dragonInfoLeft.id;
				let idB = this.dragonInfoRight.id;
				let lcNum = web3.utils.toWei(this.hatchPrice.toString());
				// let y = new Decimal(lcNum);
				try{
					let sendStatic = await nftContract.methods.incubation(idA,idB,lcNum).send({
						from: address,
					})
				}catch(e){
					//TODO handle the exception
					this.$message.error('hatch failed');
					this.loading = false;
				}
				
				if (sendStatic.status) {
					// that.currentStatic = 1;
					this.$message.success('hatch success');
					this.resetDragonChecked()
				} else {
					// that.currentStatic = 2;
					this.$message.error('hatch failed');
				}
				this.loading = false;
				// console.log(sendStatic);
			}
		},
		resetDragonChecked() {
			this.dragonInfoLeft = {}
			this.dragonInfoRight = {}
			this.$refs['choiceDragon'].resetDragonChecked()
		},
		async getNFTincubation(id) {
			if (!this.web3Provider) return;
			let web3 = this.web3Provider;
			let contract721 = new web3.eth.Contract(Abi721Nft, NftAddress);
			let MBC = await contract721.methods.getNFTincubation(id).call();
			console.log(MBC)
			return MBC;
		}
	}
}
