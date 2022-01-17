<template>
	<div class="nft-market-view banner">
		<img class="title" src="@/assets/text-shadow/go-live.png" alt="" />
		<div class="timer-model"><p class="timer">255:999:999</p></div>
		<div class="egg-frame"><img class="egg" src="@/assets/nft-market/egg.png" alt="" /></div>
		<!-- v-show="loading" -->
		<el-alert class="alert" v-show="currentStatic>=0"  show-icon :closable="false" :title="static.title" :type="static.type" effect="dark" />
		<button class="send-button" @click="ethSend" :disabled="loading">
			<i class="el-icon-loading" v-show="loading"></i>
			100USDT
		</button>
	</div>
</template>
<script src="./index.js" type="text/javascript" charset="utf-8"></script>
<style lang="scss" scoped="scoped">
@import '@/styles/theme';
.nft-market-view {
	display: flex;
	flex-direction: column;
	align-items: center;
	background-image: url('~@/assets/nft-market/bg.png');
	min-height: 100vh;
	.title {
		margin-bottom: 75px;
		margin-top: 8px;
	}
	.timer-model {
		width: 458px;
		height: 72px;
		background-image: url('~@/assets/nft-market/shadow-border.png');
		background-repeat: no-repeat;
		font-size: 40px;
		text-align: center;
		line-height: 72px;
		color: #ffffff;
	}
	.egg-frame {
		height: 390px;
		width: 340px;
		background-image: url('~@/assets/nft-market/egg-frame.png');
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.alert {
		width: 214px;
	}
	.send-button {
		@include GradualBGColor;
		@include GradualBoxShadow;
		height: 65px;
		min-width: 214px;
		margin-top: 20px;
		padding: 0 20px;
		border-radius: 12px;
		color: #ffffff;
		&[disabled] {
			opacity: 0.4;
		}
	}
}
</style>
