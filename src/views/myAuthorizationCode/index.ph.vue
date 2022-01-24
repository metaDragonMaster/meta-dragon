<template>
	<div class="my-authorization-code-view">
		<div class="view">
			<img class="title-image" src="@/assets/myAuthorizationCode/title.png" alt="" />
			<div class="ps-text">
				<p>Explain:You can directly use the authorization code to log in to the game.</p>
				<p>Theauthorization code is not the</p>
				<p>private key. The authorization code is used permanently</p>
			</div>
			<div class="theme-type border-button" @click="mycopy(uuid)">
				<span>{{uuid}}</span>
				<!-- <img src="@/assets/myAssets-details/wallet-address-icon.png" alt="" /> -->
			</div>
			<!-- <p class="time-p">
				<span>24:00:00</span>
				<span class="ps">After Regenerate</span>
			</p> -->
			<button class="theme-type submit-button" @click="sign">Generate</button>
		</div>
	</div>
</template>
<script src="./index.js" type="text/javascript" charset="utf-8"></script>
<style lang="scss" scoped="scoped">
@import '@/styles/theme.scss';
.my-authorization-code-view {
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
	.theme-type {
		@include GradualBGColor;
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
			background-image: url('~@/assets/myAssets-details/wallet-address-icon.png');
			background-repeat: no-repeat;
			background-position: 96% center;
			background-size: 64px 64px;
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
