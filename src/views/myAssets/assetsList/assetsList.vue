<template>
	<div class="assets-list-module" v-loading="loading" :element-loading-background="elementLoadingBackground">
		<p class="all-assets">All Assets:{{ dragonList.length }}</p>
		<img class="decorate-dragon" src="@/assets/myAssets/dragon-posi-abs.png" alt="" />
		<ul class="dragon-table-data-list">
			<li v-for="item in dragonList" @click="toDetails(item)" :key="item.id">
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
	// min-height: 100vh;
	margin-top: 45px;
	padding: 100px 76px;
	.decorate-dragon {
		position: absolute;
		left: 0;
		top: 0;
		transform: translate(-150px, -100px);
	}
}
.dragon-table-data-list {
	display: grid;
	grid-template-columns: repeat(auto-fill, 150px);
	grid-column-gap: 40px;
	grid-row-gap: 12px;
}
.all-assets {
	color: #ffffff;
	font-size: 24px;
	margin-top: -40px;
	margin-bottom: 40px;
}
</style>
