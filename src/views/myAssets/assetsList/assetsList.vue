<template>
	<div class="assets-list-module" v-loading="loading" :element-loading-background="elementLoadingBackground">
		<p class="all-assets">All Assets:{{ dragonList.length }}</p>
		<div class="head-grid">
			<ThemeSelect :value="selectTypeValue" :list="selectList" @emitValue="val=> selectTypeValue = val"></ThemeSelect>
			<button class="theme-border-button batch-transfer-button"
				@click="changeCardCheck"
			>Batch transfer</button>
			<div class="batch-buttons handle-buttons" v-show="typeCheck">
				<button @click="removeChecked" >CANCEL</button>
				<button class="theme-type" @click="defineChecked">DEFINE</button>
			</div>
		</div>
		<img class="decorate-dragon" src="@/assets/myAssets/dragon-posi-abs.png" alt="" />
		<ul class="dragon-table-data-list">
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
				></dragonCard>
			</li>
		</ul>
		<el-dialog :visible.sync="batchDialog" width="700px" :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false">
			<div class="dragon-dialog-body">
				<img src="@/assets/text-shadow/batch-transfer.png" alt="">
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
	// min-height: 100vh;
	margin-top: 20px;
	padding: 40px 76px 100px;
	.decorate-dragon {
		position: absolute;
		left: 0;
		top: 0;
		transform: translate(-150px, -100px);
	}
	.batch-transfer-button {
		padding: 12px 22px;
		margin-right: 20px;
	}
	.head-grid {
		height: 50px;
		// display: grid;
		// grid-template-columns: 2fr 1fr;
		// place-items: center;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
	}
	.handle-buttons {
		margin-left: 575px;
		margin-right: auto;
	}
	.batch-buttons {
		button {
			width: 160px;
			height: 50px;
			font-size: 16px;
			border-radius: 12px;
			left: 24px;
			background-color: #3F3F58;
			color: #FFF;
			&:not(:first-child) {
				margin-left: 32px;
			}
		}
	}
}
.dragon-table-data-list {
	display: grid;
	grid-template-columns: repeat(auto-fill, 150px);
	grid-column-gap: 40px;
	grid-row-gap: 20px;
	margin-top: 20px;
	margin: 20px auto 0;
	padding-left: 15px;
}
.all-assets {
	color: #ffffff;
	font-size: 24px;
	text-align: right;
}
::v-deep .el-dialog {
	background-color: #292945;
	.dragon-dialog-body {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.theme-border-button {
		width: 565px;
		height: 80px;
		font-size: 30px;
		color: #696978;
		margin-top: 100px;
		margin-bottom: 32px;
	}
	p{
		color: #0395F3;
	}
	.batch-buttons {
		padding-top: 100px;
	}
}
</style>
