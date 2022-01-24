<template>
	<div class="assets-list-module" v-loading="loading" :element-loading-background="elementLoadingBackground">
		<p class="all-assets">All Assets:{{ dragonList.length }}</p>
		<img class="decorate-dragon" src="@/assets/myAssets/dragon-posi-abs.png" alt="" />
		<ul class="dragon-table-data-list">
			<li v-for="item in dragonList" @click="toDetails(item)" :key="item.id">
				<!-- <dragonCard :dragonId="item.id" :dragonName="item.properties.name" :cardType="item.properties.quality" :stars="item.stars" :skills="defaultSkills"  :dragonImage="item.dragonImage"></dragonCard> -->
				<dragonCard
					:dragonId="item.id"
					:dragonName="item.properties.name"
					:cardType="item.properties.quality"
					:stars="item.stars"
					:skills="item.skillImages"
					:dragonImage="item.dragonImage"
				></dragonCard>
			</li>
		</ul>
	</div>
</template>
<script src="./index.js" type="text/javascript" charset="utf-8"></script>
<style lang="scss" scoped="scoped">
.assets-list-module {
	position: relative;
	background-color: #292945;
	padding: 50px 8px 0;
	margin: 45px 20px 0;
	.decorate-dragon {
		position: absolute;
		left: 0;
		top: 0;
		zoom: 0.5;
		transform: translate(-150px, -100px);
	}
}
.dragon-table-data-list {
	display: grid;
	grid-template-columns: repeat(2, 150px);
	grid-column-gap: 20px;
	grid-row-gap: 20px;
}
.all-assets {
	color: #ffffff;
	font-size: 16px;
	margin-top: -20px;
	margin-bottom: 20px;
	text-align: right;
}
</style>
