<template>
	<div class="bind-friend-view">
		<div class="view">
			<img class="title-image" src="@/assets/text-shadow/bind-friend.png" alt="" />
			<div class="ps-text">
				<p>{{$t('bindFriends.p1')}}</p>
				<p>{{$t('bindFriends.p2')}}</p>
			</div>
			<div class="theme-type border-button" v-loading="loading">
				<div class="bind-address" v-if="haveRes">{{refAddress}}</div>
				<input class="input" type="text" v-model.trim="refAddress" v-else />
			</div>
			<button class="theme-type submit-button" @click="addRe"  v-loading="loading" v-if="!haveRes">{{$t('bindFriends.determine')}}</button>
		</div>
	</div>
</template>
<script src="./index.js" type="text/javascript" charset="utf-8"></script>
<style lang="scss" scoped="scoped">
.bind-friend-view {
	background-image: url('~@/assets/myAssets/bg.png');
	background-size: 100%;
	background-position: top;
	background-color: #181727;
	min-height: 100vh;
	padding-bottom: 100px;
	.view {
		margin: 56px 16px 16px 16px;
		padding: 40px 12px;
		display: flex;
		flex-direction: column;
		color: #fff;
		align-items: center;
		background-color: #292945;
		border-radius: 4px;
	}
	.title-image {
		width: 80%;
	}
	.border-button {
		border-radius: 12px;
		width: 100%;
		height: 80px;
		display: grid;
		// grid-template-columns : 1fr 68px;
		place-items: center;
		position: relative;
		z-index: 1;
		padding: 0 26px 0 16px;
		zoom: 0.6;
		font-size: 18px;
		&::after {
			content:'';
			display: block;
			z-index: -1;
			width: calc(100% - 8px);
			height: calc(100% - 4px);
			background-color: #292945;
			position: absolute;
			border-radius: 12px;
			background-repeat: no-repeat;
			background-position: 96% center;
			background-size: 64px 64px;
		}
		.input {
			width: 100%;
			height: 100%;
			font-size: 18px;
			background-color: transparent;
			border: 0;
			color: #FFF;
		}
		.bind-address {
			width: 100%;
			height: 100%;
			font-size: 18px;
			color: #FFF;
			line-height: 80px;
			text-align: center;
		}
	}
	.submit-button {
		width: 350px;
		height: 64px;
		font-size: 24px;
		border-radius: 12px; 
		left: 24px;
		margin-top: 40px;
		zoom: 0.5;
	}
	.ps-text {
		font-size: 18px;
		text-align: center;
		color: #0396F3;
		margin: 50px 0;
		zoom: 0.5;
	}
	.time-p {
		margin-top: 36px;
		margin-bottom: 24px;
		font-size: 12px;
		.ps {
			color: #9B9BA4;
			margin-left: 8px;
		}
	}
}
</style>
