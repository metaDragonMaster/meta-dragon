<template>
	<div class="homepage-view">
		<h5 class="introduce-title max-w">
			Mate Dragon It is a leisure cultivation game based on blockchain technology, where you can break through customs, challenge the arena and make money with your skills
		</h5>
		<div class="banner player">
			<!-- <p>12,064,711</p> -->
		</div>
		<ul class="download-buttons">
			<li class="button button-download banner">
				<img src="@/assets/homepage/icon-android.png" alt="" />
				<p>ANDROID</p>
			</li>
			<li class="button button-download banner">
				<img src="@/assets/homepage/icon-iphone.png" alt="" />
				<p>IOS</p>
			</li>
		</ul>
		<div class="banner button button-inter">IMMEDIATELY</div>
		<h5 class="introduce-title is-add">$ THG CONTRACT ADDRESS</h5>
		<div class="opacity-p"  v-for="(item,index) in links" @click="mycopy(item.link)">
			<p>
				<span>{{item.contract}}</span>
				<img src="@/assets/homepage/icon-copy.png" />
			</p>
			<p>{{item.link}}</p>
		</div>
	</div>
</template>
<script src="./index.js" type="text/javascript" charset="utf-8"></script>
<style lang="scss" scoped="scoped">
.homepage-view {
	min-height: 100vh;
	background-image: url('~@/assets/homepage/meta-bg.ph.png');
	background-color: #D6F956;
	background-size: 100%;
	padding-bottom: 20px;
	color: #fff;
	.introduce-title {
		&.max-w {
			width: 250px;
			margin: 180px auto 0 auto;
			// word-break:break-all;
			font-size: 0.75em;
			text-align: center;
			font-weight: 500;
		}
	}
	.player {
		background-image: url('~@/assets/homepage/bg-player.png');
		background-size: 100% 100%;
		height: 5rem;
		width: 250px;
		font-size: 2.1875rem;
		line-height: 5rem;
		text-align: center;
		margin: 0 auto 160px;
	}
	.download-buttons {
		margin-bottom: 15px;
		display: flex;
		justify-content: center;
		li {
			background-image: url('~@/assets/homepage/download-bg.png');
			font-size: 12px;
			width: 76px;
			height: 88px;
			text-align: center;
			padding-top: 20px;
			margin: 0 30px;
		}
	}
	.download-buttons ~ .introduce-title {
		padding-top: 15px;
		// width: 400px;
		margin: 0 0 4px 20px;
		// zoom: 0.8;
	}
	.opacity-p {
		background-color: rgba(0, 0, 0, 0.5);
		// font-size: 14px;
		font-size: 0.5em;
		padding: 4px 16px;
		// display: flex;
		// align-items: center;
		// zoom: 0.8;
		// width: 400px;
		margin: 0 20px 4px ;
		& span:first-child {
			padding-right: 16px;
		}
		img {
			// display: block;
			margin-left: auto;
		}
	}
	.button-inter {
		background-image: url('~@/assets/homepage/button-bg.png');
		height: 25px;
		line-height: 25px;
		width: 250px;
		margin: 35px auto 0 ;
		text-align: center;
		border-radius: 6px;
		font-size: 12px;
		box-shadow: 0 0 12px rgba($color: #10b0fc, $alpha: 1);
	}
}
</style>
