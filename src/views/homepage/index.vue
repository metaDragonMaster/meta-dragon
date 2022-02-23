<template>
	<div class="homepage-view banner">
		<img class="title-bg" src="@/assets/homepage/title-bg.png" alt="" />
		<h5 class="introduce-title max-w">
			<!-- Mate Dragon It is a leisure cultivation game based on blockchain technology, where you can break through customs, challenge the arena and make money with your skills -->
			{{$t('homepage.title')}}
		</h5>
		<div class="meta-card">
			<div class="banner player"><!-- <p>12,064,711</p> --></div>
			<ul class="download-buttons">
				<li class="button button-download banner">
					<a :href="downloadLink.android" download>
						<img src="@/assets/homepage/icon-android.png" alt="" />
						<p>ANDROID</p>
					</a>
				</li>
				<!-- <li class="button button-download banner">
					<img src="@/assets/homepage/icon-iphone.png" alt="" />
					<p>IOS</p>
				</li> -->
				<li class="button button-download banner">
					<a :href="downloadLink.exe" download>
						<img src="@/assets/homepage/icon-windows.png" alt="" />
						<p>PC</p>
					</a>
				</li>
				<!-- <li class="button button-download banner">
					<img src="@/assets/homepage/icon-android.png" alt="" />
					<p>.APK</p>
				</li> -->
			</ul>
			<h5 class="introduce-title is-add">$ {{$t('homepage.listTitle')}}</h5>
			<p class="opacity-p" v-for="(item, index) in links" :key="index" @click="mycopy(item.link)">
				<span>{{ item.contract }}</span>
				<span>{{ item.link }}</span>
				<img src="@/assets/homepage/icon-copy.png" />
			</p>
			<div class="banner button button-inter">{{$t('homepage.buttonText')}}</div>
		</div>
		<el-dialog class="dialog-dom" title="Get Approve" :visible.sync="dialogHandleValue" center width="90%" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
			<div v-show="haveAuth != true && getAuthErr != true">
				<i class="el-icon-loading"></i>
				<p>get approve</p>
				<p>正在获取授权</p>
			</div>
			<div  v-show="haveAuth != true && getAuthErr == true">
				<p>授权失败，请重试</p>
				<p>failed,please try again</p>
				<!-- <el-button @click="getAuth"> -->
				<el-button @click="getLbAuth">
					try again
				</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script src="./index.js" type="text/javascript" charset="utf-8"></script>
<style lang="scss" scoped="scoped">
@import '@/styles/class.scss';
.homepage-view {
	min-height: 100vh;
	padding: 60px calc((100% - 1660px) / 2);
	color: #ffffff;
	background-image: url('~@/assets/homepage/meta-bg.png');
	background-position: top center;
	// background-size: 100% 100%;
	.title-bg {
		padding-top: 56px;
	}
	.introduce-title {
		color: #ffffff;
		&.max-w {
			max-width: 560px;
		}
	}
	.meta-card {
		width: 420px;
	}
	.title-bg,
	.introduce-title.max-w,
	.meta-card {
		margin-left: 16px;
	}
	#meta-dragon > img {
		display: block;
	}
	.button {
		cursor: pointer;
	}
	.player {
		background-image: url('~@/assets/homepage/bg-player.png');
		height: 140px;
		line-height: 140px;
		text-align: center;
		font-size: 44px;
	}
	.download-buttons {
		// justify-content: space-between;
		margin-bottom: 15px;
		display: flex;
		li {
			background-image: url('~@/assets/homepage/download-bg.png');
			font-size: 12px;
			width: 76px;
			height: 88px;
			text-align: center;
			padding-top: 20px;
			margin-right: 50px;
		}
	}
	.download-buttons ~ .introduce-title {
		padding-top: 15px;
	}
	.opacity-p {
		background-color: rgba(0, 0, 0, 0.5);
		// font-size: 14px;
		font-size: 0.5em;
		margin-bottom: 2px;
		padding: 4px 16px;
		display: flex;
		align-items: center;
		cursor: pointer;
		& span:first-child {
			padding-right: 16px;
		}
		img {
			display: block;
			margin-left: auto;
		}
	}
	.introduce-title {
		font-size: 18px;
	}
	.introduce-title.max-w {
		max-width: 590px;
		margin-bottom: 15px;
	}
	.button-inter {
		background-image: url('~@/assets/homepage/button-bg.png');
		height: 50px;
		line-height: 50px;
		text-align: center;
		border-radius: 6px;
		font-size: 24px;
		margin-top: 35px;
		box-shadow: 0 0 12px rgba($color: #10b0fc, $alpha: 1);
	}
	::v-deep .dialog-dom {
		.el-dialog__body > div {
			display:flex;
			flex-direction: column;
			align-items: center;
		}
	}
}
</style>
