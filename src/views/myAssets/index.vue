<template>
	<div class="my-assets-view banner limit-max-width">
		<img class="title-image" src="@/assets/text-shadow/my-assets.png" alt="" />
		<!-- {{userAssets}} -->
		<ul class="dragon-grid-max-col-4">
			<!-- <li
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
			</li> -->
			<li v-loading="loading"
				:element-loading-background="elementLoadingBackground"
				:style="{
					'background-image': `url(${require('@/assets/myAssets/col-1.png')})`
				}">
				<img :src="require('@/assets/myAssets/col-1-icon.png')" alt="" />
				<p>{{ userAssets.Lb }}</p>
				<span>Lb</span>
			</li>
			<li v-loading="loading"
				:element-loading-background="elementLoadingBackground"
				:style="{
					'background-image': `url(${require('@/assets/myAssets/col-2.png')})`
				}">
				<img :src="require('@/assets/myAssets/col-2-icon.png')" alt="" />
				<p>{{ userAssets.Lc }}</p>
				<span>Lc</span>
			</li>
			<li v-loading="loading"
				:element-loading-background="elementLoadingBackground"
				:style="{
					'background-image': `url(${require('@/assets/myAssets/col-3.png')})`
				}">
				<img :src="require('@/assets/myAssets/col-3-icon.png')" alt="" />
				<p>{{ userAssets.NFT }}</p>
				<span>NFT</span>
			</li>
			<li v-loading="loading"
				:element-loading-background="elementLoadingBackground"
				:style="{
					'background-image': `url(${require('@/assets/myAssets/col-4.png')})`
				}">
				<img :src="require('@/assets/myAssets/col-4-icon.png')" alt="" />
				<p>{{ userAssets.EGG }}</p>
				<span>EGG</span>
			</li>
		</ul>
		<ul class="nav">
			<li v-for="item in navList" :key="item.name">
				<button :class="{ 'theme-type': $route.name == item.name }" @click="toPath(item)">{{ item.text }}</button>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script src="./index.js" type="text/javascript" charset="utf-8"></script>
<style lang="scss" scoped="scoped">
.my-assets-view {
	background-image: url('~@/assets/myAssets/bg.png');
	background-size: 100%;
	background-position: top;
	background-color: #181727;
	min-height: 100vh;
	padding-bottom: 100px;
	.nav {
		display: flex;
		width: 100%;
		li:first-child {
			margin-left: auto;
		}
		button {
			width: 160px;
			height: 50px;
			background-color: #363447;
			color: #ffffff;
			border-radius: 8px;
			margin-left: 8px;
		}
	}
	.title-image {
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
