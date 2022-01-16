<template>
	<div class="nft-market-view ">
		<img class="title" src="@/assets/text-shadow/go-live.png" alt="">
		<div class="timer-model">
			<p class="timer">255:999:999</p>
		</div>
		<div class="egg-frame">
			<img class="egg" src="@/assets/nft-market/egg.png" alt="">
		</div>
		<button class="send-button">
			100USDT
		</button>
	</div>
</template>
<script>
export default {
	data(){return{
		
	}},
	components: {
		
	},
	mounted() {
		
	},
	methods:{
		
	}
}
</script>
<style  lang="scss" scoped="scoped">
@import "@/styles/theme";
.nft-market-view {
	display: flex;
	flex-direction: column;
	align-items: center;
	background-image: url("~@/assets/nft-market/bg.png");
	min-height: 100vh;
	padding-bottom: 120px;
	.title {
		margin-bottom: 75px;
		margin-top: 8px;
		width: 124px ;
	}
	.timer-model {
		width: 262px;
		height: 40px;
		background-image: url('~@/assets/nft-market/shadow-border.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		font-size: 20px;
		text-align: center;
		line-height: 40px;
		color: #FFFFFF;
		margin-bottom: 50px;
	}
	.egg-frame{
		height: 200px;
		width: 170px;
		background-image: url('~@/assets/nft-market/egg-frame.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
		align-items: center;
		.egg {
			width: 95px;
		}
	}
	.send-button {
		@include GradualBGColor;
		@include GradualBoxShadow;
		height: 32px;
		width: 233px;
		margin-top: 70px;
		border-radius: 12px;
		font-size: 0.625rem;
		color: #FFFFFF;
	}
}
</style>
