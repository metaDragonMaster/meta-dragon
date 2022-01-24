<template>
	<div class="nft-market-view ">
		<img class="title" src="@/assets/text-shadow/go-live.png" alt="">
	<!-- 	<div class="timer-model">
			<p class="timer">{{timeDown}}</p>
		</div> -->
		<div class="egg-frame">
			<img class="egg" src="@/assets/nft-market/egg.png" alt="">
		</div>
		<el-alert class="alert" v-show="currentStatic>=0"  show-icon :closable="false" :title="static.title" :type="static.type" effect="dark" />
		<button v-if="haveAuth == false" class="send-button" @click="getAuth"  :disabled="loading">
			<i class="el-icon-loading" v-show="loading"></i>
			获取授权
		</button>
		<div v-else >
			<button  class="send-button" @click="ethLbSend(1)" :disabled="loading">
				<i class="el-icon-loading" v-show="loading"></i>
				1 sommon {{usdtValue}}LB
			</button>
			<button  class="send-button" @click="ethLbSend(10)" :disabled="loading">
				<i class="el-icon-loading" v-show="loading"></i>
				10 sommon   {{usdtValue*10}}LB
			</button>
			<!-- <button  class="send-button" @click="ethLbSend(50)" :disabled="loading">
				<i class="el-icon-loading" v-show="loading"></i>
				50 sommon {{usdtValue*50}}LB
			</button> -->
		</div>
	</div>
</template>
<script src="./index.js" type="text/javascript" charset="utf-8"></script>
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
	.alert {
		width: 233px;
		margin-top: 20px;
	}
	.send-button {
		@include GradualBGColor;
		@include GradualBoxShadow;
		height: 32px;
		min-width: 233px;
		margin-top: 20px;
		border-radius: 12px;
		font-size: 0.625rem;
		padding: 0 20px ;
		color: #FFFFFF;
		display: block;
		&[disabled] {
			opacity: 0.4;
		}
	}
}
</style>
