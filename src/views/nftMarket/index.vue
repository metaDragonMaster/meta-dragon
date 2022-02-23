<template>
	<div class="trading-market-view limit-max-width-witch-pc">
		<img class="title-image" src="@/assets/text-shadow/nft-market.png" alt />
		<ul class="tabs-list">
			<li
				v-for="({ title, icon, path, activeIcon }, index) in tabs"
				:key="title"
				:class="{ active: index == activeItem }"
				@click="$routerUtil.toPath(path)"
			>
				<img :src="index == activeItem ? activeIcon : icon" alt />
				<p>{{ title }}</p>
			</li>
		</ul>
		<div class="content-view">
			<router-view></router-view>
		</div>
	</div>
</template>
<script src="./index.js" type="text/javascript" charset="utf-8"></script>
<style lang="scss" scoped>
.trading-market-view {
	background-image: url("~@/assets/myAssets/bg.png");
	background-size: 100%;
	background-position: top;
	background-color: #181727;
	min-height: 100vh;
	padding-bottom: 100px;
	.title-image {
		display: block;
		margin: 8px auto 50px;
		@media screen and (min-width: 751px) {
			width: fit-content;
		}
		@media screen and (max-width: 750px) {
			width: 80%;
		}
	}
	.tabs-list {
		display: grid;
		grid-template-rows: 40px;
		grid-column-gap: 2px;
		@media screen and (min-width: 751px) {
			grid-template-columns: repeat(4, 280px);
		}
		@media screen and (max-width: 750px) {
			grid-template-columns: repeat(4, 1fr);
		}
		li {
			display: grid;
			place-items: center;
			position: relative;
			background-color: #1f1d32;
			border: 1px solid #292945;
			color: #ffffff;
			border-radius: 12px 12px 0 0;
			cursor: pointer;
			&.active {
				background-color: #292945;
				box-shadow: 0 -1px 3px 0 #424b9c;
				img {
					animation: Rotate infinite 0.6s alternate ease-out;
				}
				@keyframes Rotate {
					from {
						bottom: 50%;
					}
					to {
						bottom: calc(50% + 10px);
					}
				}
			}
			img {
				position: absolute;
				bottom: 50%;
				width: 55px;
				height: 60px;
			}
		}
	}
	.content-view {
		@media screen and (max-wdtih: 750px) {
			padding: 0 20px;
		}
	}
}
</style>
