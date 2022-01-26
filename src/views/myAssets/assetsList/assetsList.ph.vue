<template>
	<div class="assets-list-module" v-loading="loading" :element-loading-background="elementLoadingBackground">
		<p class="all-assets">All Assets:{{ AllAssets }}</p>
		<div class="flex">
			<button class="theme-border-button batch-transfer-button" @click="changeCardCheck" >Batch transfer</button>
			<ThemeSelect :value="selectTypeValue" :list="selectList" @emitValue="emitValue"  v-loading="pushEnd"></ThemeSelect>
		</div>
		<div class="fixed-bottom-grid" v-show="typeCheck">
			<div class="batch-buttons">
				<button @click="removeChecked">CANCEL</button>
				<button class="theme-type" @click="defineChecked">DEFINE</button>
			</div>
		</div>
		<ul class="dragon-table-data-list" v-if="dragonList.length > 0 && selectTypeValue == 'Dragon'">
			<li v-for="item in dragonList" :key="item.id" @click="cardClick(item)">
				<dragonCard
					:dragonId="item.id"
					:dragonName="item.properties.name"
					:cardType="item.properties.quality"
					:stars="item.stars"
					:skills="item.skillImages"
					:dragonImage="item.dragonImage"
					:typeCheck="typeCheck"
					:isChecked="item.isChecked"
					:dragonHatch="item.dragonHatch"
				></dragonCard>
			</li>
		</ul>
		<ul class="dragon-table-data-list" v-if="dragonEggList.length > 0 && selectTypeValue == 'Egg'">
			<li v-for="item in dragonEggList" :key="item.id" >
				<eggCard :id="item.id"></eggCard>
			</li>
		</ul>
		<el-dialog :visible.sync="batchDialog" width="90%" :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false">
			<div class="dragon-dialog-body">
				<img class="title-image" src="@/assets/text-shadow/batch-transfer-ph.png" alt="">
				<button class="theme-border-button">Wallet address</button>
				<p>Please enter wallet address</p>
				<div class="batch-buttons">
					<button @click="closeBatchDialog" >CANCEL</button>
					<button class="theme-type" @click="sendDefine">DEFINE</button>
				</div>
			</div>
		</el-dialog>
	</div>
</template>
<script src="./index.js" type="text/javascript" charset="utf-8"></script>
<style lang="scss" scoped="scoped">
.assets-list-module {
	position: relative;
	background-color: #292945;
	padding: 20px 8px 20px;
	margin: 10px 20px 0;
	// .decorate-dragon {
	// 	position: absolute;
	// 	left: 0;
	// 	top: 0;
	// 	zoom: 0.5;
	// 	transform: translate(-150px, -100px);
	// }
}
.dragon-table-data-list {
	display: grid;
	grid-template-columns: repeat(2, 150px);
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	margin-top: 20px;
}
.all-assets {
	color: #ffffff;
	font-size: 16px;
	// margin-top: -20px;
	// margin-bottom: 20px;
	text-align: right;
}
.flex {
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
}
.batch-transfer-button {
	padding: 8px 20px;
	font-size: 12px;
	border-radius: 8px;
	&::after {
		border-radius: 8px;
	}
}
::v-deep .theme-select .select-div{
	width: 105px;
	height: 30px;
}
.fixed-bottom-grid {
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 99;
	width: 100%;
	padding: 12px 20px;
	.batch-buttons {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 10px;
		button {
			width: 100%;
			height: 40px;
			font-size: 16px;
			border-radius: 12px;
			background-color: #3F3F58;
			color: #FFF;
		}
	}
	
	// .handle-buttons {
	// 	margin-left: 575px;
	// 	margin-right: auto;
	// }
	
}
::v-deep .el-dialog {
	background-color: #292945;
	.title-image {
		width: 105px;
	}
	.dragon-dialog-body {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.theme-border-button {
		width: 265px;
		height: 60px;
		font-size: 16px;
		color: #696978;
		margin-top: 50px;
		margin-bottom: 16px;
	}
	p{
		color: #0395F3;
		font-size: 12px;
	}
	.batch-buttons {
		padding-top: 50px;
		button {
			width: 110px;
			height: 42px;
			font-size: 16px;
			border-radius: 12px;
			background-color: #3F3F58;
			color: #FFF;
			&:not(:first-child) {
				margin-left: 12px;
			}
		}
	}
}
</style>
