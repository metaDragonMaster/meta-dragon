<template>
	<div class="egg-card">
		<img class="egg-image" src="@/assets/nft-market/egg.png" alt="" />
		<!-- <p class="time-down">{{id}}</p> -->
		<p class="time-down">#{{eggId}}</p>
		<p class="time-down" v-show="!overdue">{{timeDown}}</p>
		<button class="theme-type send-button" v-if="overdue" v-loading="eggLoading" @click="eggIncubation">hatch</button>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import Abi721Nft from "@/jsons/abi-721-NFT.js";
import {
	NftAddress,
} from "@/jsons/contractAddress.js"
import moment from "moment";
export default {
	data: () => ({
		timer: null,
		eggTimestamp:'',
		timeDown:'',
		eggLoading:false,
		// overdue:false,//是否过期
	}),
	props: {
		id: {
			type: String,
			default: ''
		},
	},
	computed: {
		...mapGetters({
			dateTimestamp: 'dateTimestamp',
			web3Provider: 'web3Provider',
			ethAddress:'ethAddress',
		}),
		overdue() {
			if(!!!this.eggTimestamp) return false;
			let timeNow = moment(new Date()).unix()
			return timeNow > this.eggTimestamp;
		},
		eggId() {
			let id = this.id;
			let aid = id.slice(1,id.length);
			return  Math.floor(aid)
		},
	},
	watch: {
		dateTimestamp(n,o) {
			this.countDown()
		},
	},
	mounted() {
		this.getEggTincubationTime();
	},
	methods: {
		async getEggTincubationTime() {
			if (!this.web3Provider || !this.id) return;
			let web3 = this.web3Provider;
			let nftAddress = NftAddress;
			let contract721 = new web3.eth.Contract(Abi721Nft, nftAddress);
			let eggTime = await contract721.methods.getEggTincubationTime(this.id).call();
			console.log(eggTime)
			this.eggTimestamp = parseInt(eggTime) + 604800;
			this.countDown()
		},
		countDown() {
			let timeNow = moment(new Date()).unix()
			let timeDown = this.eggTimestamp - timeNow;
			this.timeDown = this.formatTimeDown(timeDown);
			// console.log(this.timeDown)
		},
		formatTimeDown(time) {
			let lefttime = time;
			let leftd = Math.floor(lefttime / (60 * 60 * 24)); //计算天数
			let lefth = Math.floor((lefttime / (60 * 60)) % 24); //计算小时数
			let leftm = Math.floor((lefttime / 60) % 60); //计算分钟数
			let lefts = Math.floor(lefttime % 60); //计算秒数
			return `${leftd}day-${lefth}h-${leftm}m-${lefts}s `;
		},
		async eggIncubation() {
			if (!this.web3Provider || !this.id) return;
			this.eggLoading = true
			try{
				let web3 = this.web3Provider;
				let nftAddress = NftAddress;
				let contract721 = new web3.eth.Contract(Abi721Nft, nftAddress);
				console.log(this.id)
				let res = await contract721.methods.eggIncubation(this.id).send({
					from: this.ethAddress
				});
				console.log(res)
				this.$emit("eggIncubationSuccess",res)
				this.eggLoading = false;
			}catch(e){
				//TODO handle the exception
				console.error(e)
				this.eggLoading = false;
			}
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.egg-card {
	background-image: url('~@/assets/myAssets/cli-1.png');
	background-size: 100% 100%;
	width: 150px;
	min-height: 230px;
	padding: 20px;
	color: #ffffff;
	.egg-image {
		width: 100%;
	}
	.time-down {
		font-size: 12px;
		margin-top: 12px;
		text-align: center;
	}
	.send-button {
		width: 100%;
		margin-top: 20px;
		padding: 10px;
		border-radius: 8px;
	}
}
</style>
