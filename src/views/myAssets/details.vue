<template>
	<el-row class="my-assets-details-view limit-max-width relative">
		<el-col :span="11" class="sticky">
			<div class="come-back">
				<img class="arrow-left" src="@/assets/myAssets-details/come-back-arrow-left.png" alt="">
				<img src="@/assets/text-shadow/back-off.png" alt="">
			</div>
			<div class="dragon-info-card">
				<div class="skill-module">
					<p class="dragon-name">Dragon_ziran_01</p>
					<rate :stars="3"></rate>
					<p class="dragon-skill-title">Skill:</p>
					<ul class="dragon-skill-list">
						<li v-for="item in dragonSkills">
							<img class="skill" :src="item.skillImage" alt="">
							<img class="lv-border" :src='item.skillBorderImage' alt="">
						</li>
					</ul>
				</div>
				<div class="dragon-info">
					<div class="center">
						<div class="lv-border">
							<span>Lv.56</span>
						</div>
						<img class="dragon-image" src="@/assets/myAssets-details/dragon.png" alt="">
						<button class="arrow-button arrow-left">
							<img src="@/assets/myAssets-details/arrow-left.png" alt="">
						</button>
						<button class="arrow-button arrow-right">
							<img src="@/assets/myAssets-details/arrow-right.png" alt="">
						</button>
					</div>
				</div>
			</div>
		</el-col>
		<el-col :span="13" class="scroll-auto">
			<div class="material module">
				<p class="title">Material:</p>
				<ul class="material-list">
					<li v-for="(item,index) in materialList">
						<div class="material-icon-bg">
							<img :src="item.image" alt="">
						</div>
						<div class="material-text">
							<p class="type">{{item.type}}</p>
							<p class="value">{{item.value}}</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="attribute module">
				<p class="title">Attribute:</p>
				<ul class="attribute-list">
					<li v-for="(item,index) in attributeList">
						<img class="icon" :src="item.image" alt="">
						<p class="name">{{item.name}}</p>
						<percent :currentValue="item.currentValue" :maxValue="item.maxValue"></percent>
					</li>
				</ul>
			</div>
			<ul class="skill-s-list">
				<li v-for="(item,index) in skillSList" :key="item.id" class="skill-card" :class="[
					`skill-card-lv-${item.lv}`
				]">
					<div class="lv">
						{{item.lv}}
					</div>
					<img class="skill-image" :src="item.skillImage" alt="">
					<p class="skill-name">{{item.skillName}}</p>
					<p class="skill-intro">{{item.skillIntro}}</p>
				</li>
			</ul>
			<div class="children module">
				<p class="title">Children:</p>
				<ul class="dragon-table-data-list">
					<li v-for="item in dragonList" >
						<dragonCard :cardType="item.cardType" :stars="item.stars" :skills="defaultSkills"></dragonCard>
					</li>
				</ul>
			</div>
			<div class="parent module">
				<p class="title">Parent:</p>
				<ul class="dragon-table-data-list">
					<li v-for="item in dragonList" >
						<dragonCard :cardType="item.cardType" :stars="item.stars" :skills="defaultSkills"></dragonCard>
					</li>
				</ul>
			</div>
			<div class="wallet-address module">
				<p class="title">Wallet address:</p>
				<div class="bay-button">
					<span>Buyers</span>
					<span>0x9542176cb2e503a1...ea726f15</span>
					<img src="@/assets/myAssets-details/wallet-address-icon.png" alt="">
				</div>
			</div>
		</el-col>
	</el-row>
</template>
<script src="./details.js" type="text/javascript" charset="utf-8"></script>
<style  lang="scss" scoped="scoped">
@import "@/styles/theme.scss";
.my-assets-details-view {
	background-image: url("~@/assets/myAssets/bg.png");
	background-color: #181727;
	background-size: 100%;
	min-height: 200vh;
	padding-bottom: 65px;
	
	.relative {
		position: relative;
	}
	.sticky {
		position: sticky;
		top: 100px;
	}
	.come-back {
		width: 165px;
		margin-bottom: 100px;
		.arrow-left {
			margin-right: -10px;
			margin-bottom: -85px;
		}
	}
	.dragon-info-card {
		color: #FFF;
		background-image: url("~@/assets/myAssets-details/dragon-card-bg.png");
		min-height: 560px;
		padding-left: 65px;
		padding-top: 30px;
		margin-left: -30px;
		position: relative;
		.dragon-name {
			font-size: 24px;
		}
		.skill-module {
			
		}
		.dragon-skill-title {
			margin-top: 30px;
		}
		.dragon-skill-list {
			display: grid;
			grid-template-columns: 135px 135px;
			grid-row-gap: 30px;
			margin-left: -10px;
			li {
				position: relative;
				width: 135px;
				height: 135px;
				.lv-border {
					position: absolute;
					left: 0;
					top: 0;
				}
				.skill {
					margin: 14px;
				}
			}
		}
		.dragon-info {
			background-color: #181727;
			width: 380px;
			height: 380px;
			position: absolute;
			top: 58px;
			right: 70px;
			box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
			.center {
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				padding: 42px 62px;
				.arrow-button {
					position: absolute;
					bottom: -20px;
					background-color: #292945;
					width: 40px;
					height: 40px;
					box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.36);
					border-radius: 4px;
				}
				.arrow-left {
					margin-left: -45px;
				}
				.arrow-right {
					margin-right: -45px;
				}
				.lv-border {
					position: absolute;
					left: 27px;
					top: 27px;
					background-image: url("~@/assets/myAssets-details/lv-border.png");
					width: 86px;
					height: 92px;
					line-height: 92px;
					text-align: center;
				}
				.dragon-image {
					width: 100%;
				}
			}
		}
	}
	.scroll-auto {
		.children.module,
		.parent.module,
		.wallet-address.module{
			margin-bottom: 56px;
			.title {
				margin-bottom: 28px;
			}
		}
		.material ,
		.attribute {
			min-width: 866px;
			min-height: 306px;
			padding: 55px 46px;
		}
		.material {
			background-image: url("~@/assets/myAssets-details/modelu-card-bg-purple.png");
			.material-list {
				// display: flex;
				// justify-content: space-between;
				// align-items: center;
				display: grid;
				grid-template-columns: repeat(3,1fr);
				margin-top: 60px;
				li {
					background-image: 
						url("~@/assets/myAssets-details/material-icon-bg.png"),
						url("~@/assets/myAssets-details/material-number-bg.png"),
					;
					background-size: 85px 75px,135px 40px;
					background-position: 0 0,72px 17px;
					background-repeat: no-repeat;
					height: 75px;
					display: flex;
					.material-icon-bg {
						height: 75px;
						width: 85px;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.material-text {
						.type {
							color: #82F5F9;
							line-height: 16px;
						}
						.value {
							width: 135px;
							height: 40px;
							line-height: 40px;
							margin-left: -15px;
							text-align: center;
							font-size: 14px;
						}
					}
				}
			}
		}
		.attribute {
			background-image: url("~@/assets/myAssets-details/modelu-card-bg-red.png");
			padding-right: 80px;
			.attribute-list {
				display: grid;
				grid-template-columns: repeat(3,1fr);
				grid-row-gap: 25px;
				margin-top: 35px;
				li {
					display: flex;
					align-items: center;
					.percent {
						margin-left: auto;
						margin-right: 16px;
					}
				}
			}
		}
		.module {
			color: #FFFFFF;
			.title {
				font-size: 24px;
			}
		}
		.skill-s-list {
			display: grid;
			grid-template-columns: repeat(4,214px);
			margin-bottom: 40px;
			.skill-card {
				height: 360px;
				background-repeat: no-repeat;
				position: relative;
				color: #FFFFFF;
				&.skill-card-lv-1 {
					background-image: url("~@/assets/myAssets-details/skill-s-border-bg-lv-1.png");
				}
				&.skill-card-lv-2 {
					background-image: url("~@/assets/myAssets-details/skill-s-border-bg-lv-2.png");
				}
				&.skill-card-lv-3 {
					background-image: url("~@/assets/myAssets-details/skill-s-border-bg-lv-3.png");
				}
				&.skill-card-lv-4 {
					background-image: url("~@/assets/myAssets-details/skill-s-border-bg-lv-4.png");
				}
				.lv {
					position: absolute;
					top: 0;
					right: 0;
					width: 39px;
					height: 43px;
					background-image: url("~@/assets/myAssets-details/lv-bg.png");
					text-align: center;
					line-height: 43px;
					font-weight: 600;
					font-size: 22px;
				}
				.skill-image {
					margin: 60px 72px 35px 72px;
					height: 83px;
					width: 73px;
					display: block;
				}
				.skill-name{
					text-align: center;
					font-size: 12px;
				}
				.skill-intro{
					font-size: 0.75em;
					width: 115px;
					margin: 30px auto 0 auto;
					word-break:break-all;
				}
			}
		}
		.dragon-table-data-list {
			display: grid;
			grid-template-columns: repeat(auto-fill,150px);
			grid-column-gap: 40px;
			grid-row-gap: 12px;
		}
		.bay-button {
			@include GradualBGColor;
			width: 800px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 16px 0 26px;
			font-size: 18px;
			border-radius: 4px;
		}
	}
}
</style>
