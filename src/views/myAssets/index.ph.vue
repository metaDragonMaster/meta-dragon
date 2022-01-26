<template>
	<div class="my-assets-view">
		<img class="title-image" src="@/assets/text-shadow/my-assets.png" alt="" />
		<ul class="dragon-grid-max-col-4">
			<li
				v-for="(item, index) in dragonGridList"
				v-loading="loading"
				:element-loading-background="elementLoadingBackground"
				:key="item.type"
				:style="{
					'background-image': `url(${item.bgImage})`
				}"
			>
				<img :src="item.iconImage" alt="" />
				<p>{{ item.num }}</p>
				<span>{{ item.type }}</span>
			</li>
		</ul>
		<ul class="nav">
			<li v-for="item in navList" :key="item.name">
				<button :class="{ 'theme-type': $route.name == item.name }" @click="toPath(item)">{{ item.text }}</button>
			</li>
		</ul>
		<router-view></router-view>
		<!-- <div class="assets-list-module" 
			v-loading="loading"
			:element-loading-background="elementLoadingBackground">
			<p class="all-assets">All Assets：{{dragonList.length}}</p>
			<img class="decorate-dragon" src="@/assets/myAssets/dragon-posi-abs.png" alt="">
			<ul class="dragon-table-data-list">
				<li v-for="item in dragonList"  @click="toDetails(item)"  :key="item.id">
					<dragonCard :dragonId="item.id" :dragonName="item.properties.name" :cardType="item.properties.quality" :stars="item.stars" :skills="item.skillImages"  :dragonImage="item.dragonImage"></dragonCard>
				</li>
			</ul>
		</div> -->
	</div>
</template>
<script src="./index.js" type="text/javascript" charset="utf-8"></script>
<style lang="scss" scoped="scoped">
.my-assets-view {
	background-image: url('~@/assets/myAssets/bg.png');
	min-height: 100vh;
	padding-bottom: 100px;
	background-color: #1f1d32;
	.title-image {
		display: block;
		width: fit-content;
		margin: 8px auto;
		width: 144px;
	}
	.nav {
		display: flex;
		width: 100%;
		padding: 40px 20px 0;
		li {
			flex: 1;
			&:not(:last-child) {
				margin-right: 10px;
			}
		}
		button {
			width: 100%;
			height: 30px;
			background-color: #363447;
			color: #ffffff;
			border-radius: 8px;
			font-size: 14px;
		}
	}
	.dragon-grid-max-col-4 {
		zoom: 0.5;
		// display: flex;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		// justify-content: space-between;
		li {
			width: 360px;
			height: 180px;
			padding-right: 180px;
			padding-left: 20px;
			display: flex;
			flex-direction: column;
			align-items: center;
			color: #ffffff;
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
}
</style>
