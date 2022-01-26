<template>
	<el-dialog class="dialog-dom" :visible.sync="dialogHandleValue" center width="90%"  :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
		<img class="title-image" src="@/assets/text-shadow/choose-hatch-nft-parents.png" alt="">
		<ul class="dragon-table-data-list" v-loading="loading">
			<li v-for="item in dragonList" :key="item.id">
				<dragonCard
					:dragonId="item.id"
					:dragonName="item.properties.name"
					:cardType="item.properties.quality"
					:stars="item.stars"
					:skills="item.skillImages"
					:dragonImage="item.dragonImage"
				>
					<button class="choice-button" :class="{
						'is-check-bottom-bg':item.isChecked
					}" @click="choiceDragon(item)">
						{{item.isChecked ? 'Choice' : 'Selected'}}
					</button>
				</dragonCard>
			</li>
		</ul>
	</el-dialog>
</template>
<script>
import dragonCard from './dragonCard.vue';
import getDragonListMixin from '@/jsons/getDragonListMixin.js';
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
		async getDragonList() {
			if (!this.web3Provider) return;
			this.loading = true;
			console.log("item,index")
			await this.$M_getDragons();
			let _index = 0;
			await this.dragonList.map((item,index)=>{
				if(index == 0) {
					item.isChecked = true
				} else {
					item.isChecked = false;
				}
			})
			this.loading = false;
		},
		choiceDragon(item) {
			item.isChecked = true;
			this.$emit('choiceDragon',item);
			this.close();
		},
		close() {
			// this.dialogHandleValue = false;
			this.$emit('update:dialogHandleValue', false);
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
	background-image: url(~@/assets/dragonCard/button-selected-bg.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	background-position: center;
	color: #FFF;
	margin-top: 12px;
}
.is-check-bottom-bg {
	background-image: url(~@/assets/dragonCard/button-choice-bg.png);
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
