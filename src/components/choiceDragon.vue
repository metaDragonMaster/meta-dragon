<template>
	<el-dialog class="dialog-dom" :visible.sync="dialogHandleValue" center width="90%"  :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
		<img class="title-image" src="@/assets/text-shadow/choose-hatch-nft-parents.png" alt="">
		<ul class="dragon-table-data-list" v-loading="loading">
			<li v-for="item in dragonList" :key="item.id" @click="say(item)">
				<dragonCard
					:dragonId="item.id"
					:dragonName="item.properties.name"
					:cardType="item.properties.quality"
					:stars="item.stars"
					:skills="item.skillImages"
					:dragonImage="item.dragonImage"
					:dragonHatch="item.dragonHatch"
				>
					<button class="choice-button" :class="{
						'is-check-bottom-bg':item.isChecked
					}" @click="choiceDragon(item)">
						{{item.isChecked ? 'Selected':'Choice'}}
					</button>
				</dragonCard>
			</li>
		</ul>
	</el-dialog>
</template>
<script>
import dragonCard from './dragonCard.vue';
import getDragonListMixin from '@/jsons/getDragonListMixin.js';
import Abi721Nft from "@/jsons/abi-721-NFT.js";
import {
	NftAddress,
	lcAddress,
} from "@/jsons/contractAddress.js";
export default {
	mixins: [getDragonListMixin],
	data: () => ({
		batchDialog: false,
		loading: false
	}),
	props: {
		dialogHandleValue: {
			type: Boolean
		},
	},
	components: {
		dragonCard
	},
	mounted() {
		this.getDragonList();
	},
	methods: {
		resetDragonChecked() {
			this.dragonList.map(item=>{
				item.isChecked = false;
			})
		},
		async getDragonList() {
			if (!this.web3Provider) return;
			this.loading = true;
			console.log("item,index")
			await this.$M_getDragons();
			for(let i in this.dragonList) {
				let item = this.dragonList[i];
				item.isChecked = false;
				console.log(item)
			}
			this.loading = false;
		},
		choiceDragon(item) {
			if(item.isChecked)  {
				this.close();
				return;
			}
			item.isChecked = true;
			this.$emit('checked',item);
			this.close();
		},
		close() {
			// this.dialogHandleValue = false;
			this.$emit('update:dialogHandleValue', false);
		},
		cancelCheck(id) {
			this.dragonList.map(item=>{
				if(item.id == id) {
					item.isChecked = false;
				}
			})
		},
		async getNFTincubation(id) {
			// if (!this.web3Provider) return;
			// let web3 = this.web3Provider;
			// let contract721 = new web3.eth.Contract(Abi721Nft, NftAddress);
			// let MBC = await contract721.methods.getNFTincubation(id).call();
			// console.log(MBC)
			let MBC = 1;
			return MBC;
		},
		say(item) {
			console.log(item)
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
::v-deep .el-dialog--center {
	background-color: #292945;
	padding-bottom: 20px;
}
.title-image {
	display: block;
	max-width: fit-content;
	margin: 0 auto 40px;
}
.dragon-table-data-list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px,1fr));
	place-items: center;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	margin: 0 auto;
}
.choice-button {
	width: 70px;
	height: 24px;
	background-image: url(~@/assets/dragonCard/button-choice-bg.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-position: center;
	color: #FFF;
	margin-top: 12px;
}
.is-check-bottom-bg {
	background-image: url(~@/assets/dragonCard/button-selected-bg.png);
}
@media screen and (max-width: 750px) {
	.title-image {
		max-width: 90%;
	}
	.dragon-table-data-list {
		display: grid;
		grid-template-columns: repeat(2, minmax(150px,1fr));
		place-items: center;
		grid-column-gap: 0;
		grid-row-gap: 20px;
		margin: 0 auto;
	}
	::v-deep .el-dialog__body {
		padding: 0;
	}
}
</style>
