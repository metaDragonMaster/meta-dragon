<template>
	<div class="my-assets-view">
		<img class="view-title" src="@/assets/text-shadow/my-assets.png" alt="">
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
			<p class="all-assets">
				<span>All Assets：{{dragonList.length}}</span>
			</p>
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
	min-height: 100vh;
	padding-bottom: 100px;
	background-color: #1F1D32;
	.view-title {
		display: block;
		width: fit-content;
		margin: 8px auto;
		width: 144px;
	}
	.dragon-grid-max-col-4 {
		zoom: 0.5;
		// display: flex;
		display: grid;
		grid-template-columns: repeat(2,1fr);
		// justify-content: space-between;
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
		padding: 50px 8px 0;
		margin: 45px 20px 0;
		.decorate-dragon {
			position: absolute;
			left: 0;
			top: 0;
			zoom: 0.5;
			transform: translate(-150px,-100px);
		}
	}
	.dragon-table-data-list {
		display: grid;
		grid-template-columns: repeat(2,150px);
		grid-column-gap: 20px;
		grid-row-gap: 20px;
	}
	.all-assets {
		color: #FFFFFF;
		font-size: 16px;
		display: flex;
		margin-top: -20px;
		margin-bottom: 20px;
		span {
			margin-left: auto;
		}
	}
}
</style>
