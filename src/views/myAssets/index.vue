<template>
	<div class="my-assets-view banner limit-max-width">
		<img class="view-title" src="@/assets/text-shadow/my-assets.png" alt="">
		<!-- <rate :stars="4"></rate> -->
		<ul class="dragon-grid-max-col-4">
			<li v-for="(item,index) in dragonGridList" :key="item.type"
				:style="{
					'background-image':`url(${item.bgImage})`
				}"
			>
				<img :src="item.iconImage" alt="">
				<p>{{item.num}}</p>
				<span>{{item.type}}</span>
			</li>
		</ul>
		<div class="assets-list-module">
			<p class="all-assets">All Assets：{{dragonList.length}}</p>
			<img class="decorate-dragon" src="@/assets/myAssets/dragon-posi-abs.png" alt="">
			<ul class="dragon-table-data-list">
				<li v-for="item in dragonList"  @click="toDetails">
					<dragonCard :dragonId="item.properties.id" :cardType="item.cardType" :stars="item.stars" :skills="defaultSkills"></dragonCard>
				</li>
			</ul>
		</div>
	</div>
</template>
<script src="./index.js" type="text/javascript" charset="utf-8"></script>
<style  lang="scss" scoped="scoped">
.my-assets-view {
	background-image: url("~@/assets/myAssets/bg.png");
	background-size: 100% 100%;
	min-height: 100vh;
	padding-bottom: 100px;
	.view-title {
		display: block;
		width: fit-content;
		margin: 8px auto;
	}
	.dragon-grid-max-col-4 {
		display: flex;
		// grid-template-columns: repeat(4,1fr);
		justify-content: space-between;
		li {
			width: 360px;
			height: 180px;
			padding-right: 180px;
			padding-left: 20px;
			display: flex;
			flex-direction: column;
			align-items: center;
			color: #FFFFFF;
			img {
				padding-top: 20px;
			}
			p {
				margin-top: -20px;
				margin-bottom: 10px;
				padding-left: 10px;
			}
			span {
				font-size: 12px;
				padding-left: 10px;
			}
		}
	}
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
			transform: translate(-150px,-100px);
		}
	}
	.dragon-table-data-list {
		display: grid;
		grid-template-columns: repeat(auto-fill,150px);
		grid-column-gap: 40px;
		grid-row-gap: 12px;
	}
	.all-assets {
		color: #FFFFFF;
		font-size: 24px;
		margin-top: -40px;
		margin-bottom: 40px;
	}
}
</style>
