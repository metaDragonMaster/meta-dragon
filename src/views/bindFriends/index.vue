<template>
	<div class="bind-friend-view limit-max-width">
		<div class="view">
			<img class="decorate-dragon" src="@/assets/myAssets/dragon-posi-abs.png" alt="" />
			<img class="title-image" src="@/assets/text-shadow/bind-friend.png" alt="" />
			<div class="ps-text">
				<p>{{$t('bindFriends.p1')}}</p>
				<p>{{$t('bindFriends.p2')}}</p>
			</div>
			<div class="theme-type border-button" v-loading="loading">
				<div class="bind-address" v-if="haveRes">{{refAddress}}</div>
				<input class="input" type="text" v-model.trim="refAddress" v-else />
			</div>
			<button class="theme-type submit-button" @click="addRe" v-loading="loading" v-if="!haveRes">{{$t('bindFriends.determine')}}</button>
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
	.decorate-dragon {
		position: absolute;
		left: 0;
		top: 0;
		transform: translate(-150px, -100px);
	}
	.view {
		margin-top: 56px;
		padding: 80px;
		display: flex;
		flex-direction: column;
		color: #fff;
		align-items: center;
		position: relative;
		background-color: #292945;
		border-radius: 4px;
	}
	.border-button {
		border-radius: 12px;
		width: 670px;
		height: 80px;
		display: grid;
		// grid-template-columns : 1fr 68px;
		place-items: center;
		position: relative;
		z-index: 1;
		padding: 0 26px 0 16px;
		&::after {
			content:'';
			display: block;
			z-index: -1;
			width: calc(100% - 4px);
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
			font-size: 24px;
			text-align: center;
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
		width: 320px;
		height: 64px;
		font-size: 24px;
		border-radius: 12px;
		left: 24px;
		margin-top: 40px;
	}
	.ps-text {
		font-size: 18px;
		text-align: center;
		color: #0396F3;
		margin: 50px 0;
	}
	.time-p {
		margin-top: 130px;
		margin-bottom: 24px;
		font-size: 18px;
		.ps {
			color: #9B9BA4;
			margin-left: 16px;
		}
	}
}
</style>
