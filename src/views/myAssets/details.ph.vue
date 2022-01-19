<template>
	<div class="my-assets-details-view relative">
	<!-- 	<div class="come-back">
			<img class="arrow-left" src="@/assets/myAssets-details/come-back-arrow-left.png" alt="">
			<img src="@/assets/text-shadow/back-off.png" alt="">
		</div> -->
		<div class="dragon-info-card">
			<div class="skill-module">
				<p class="dragon-name">Dragon_ziran_01</p>
				<rate :stars="0"></rate>
				<p class="dragon-skill-title">Skill:</p>
				<ul class="dragon-skill-list">
					<li v-for="item in dragonSkills">
						<img class="skill" :src="item.skillImageF" alt="">
						<img class="lv-border" :src='item.skillBorderImage' alt="">
					</li>
				</ul>
			</div>
			<div class="dragon-info">
				<div class="center">
					<div class="lv-border">
						<span>Lv.0</span>
					</div>
					<!-- <img class="dragon-image" src="@/assets/myAssets-details/dragon.png" alt=""> -->
					<img class="dragon-image" :src="dragonInfo.dragonImage" alt="">
					<!-- <button class="arrow-button arrow-left">
						<img src="@/assets/myAssets-details/arrow-left.png" alt="">
					</button>
					<button class="arrow-button arrow-right">
						<img src="@/assets/myAssets-details/arrow-right.png" alt="">
					</button> -->
				</div>
			</div>
		</div>
		<div class="scroll-auto">
			<div class="module">
				<p class="title">Material:</p>
			</div>
			<div class="material ">
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
			<div class="module">
				<p class="title">Attribute:</p>
			</div>
			<div class="attribute module">
				<ul class="attribute-list">
					<li v-for="(item,index) in attributeList">
						<img class="icon" :src="item.image" alt="">
						<p class="name">{{item.name}}</p>
						<percent :currentValue="item.currentValue" :maxValue="item.maxValue"></percent>
					</li>
				</ul>
			</div>
			<div class="module">
				<p class="title">Skill Details:</p>
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
			<!-- <div class="children module">
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
			</div> -->
			<div class="wallet-address module">
				<p class="title">Wallet address:</p>
				<p class="title-sub">Buyers</p>
				<div class="bay-button">
					<span>
						{{ethAddress}}
					</span>
					<img class="image" src="@/assets/myAssets-details/wallet-address-icon.png" alt="">
				</div>
			</div>
		</div>
	</div>
</template>
<script src="./details.js" type="text/javascript" charset="utf-8"></script>
<style  lang="scss" scoped="scoped">
@import "@/styles/theme.scss";
.my-assets-details-view {
	background-image: url("~@/assets/myAssets/bg.png");
	background-color: #181727;
	background-size: 100%;
	// min-height: 200vh;
	padding-bottom: 65px;
	// position: relative;
	// .sticky {
	// 	position: sticky;
	// 	top: 100px;
	// }
	// .come-back {
	// 	width: 165px;
	// 	margin-bottom: 100px;
	// 	.arrow-left {
	// 		margin-right: -10px;
	// 		margin-bottom: -85px;
	// 	}
	// }
	.dragon-info-card {
		zoom: 0.5;
		color: #FFF;
		background-image: url("~@/assets/myAssets-details/dragon-card-bg.png");
		min-height: 560px;
		padding-left: 65px;
		padding-top: 30px;
		// margin-left: -30px;
		position: relative;
		.dragon-name {
			font-size: 24px;
		}
		// .skill-module {
			
		// }
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
					// margin: 14px;
					padding: 16px;
					width: 100%;
					height: 100%;
				}
			}
		}
		.dragon-info {
			background-color: #181727;
			width: 380px;
			height: 380px;
			position: absolute;
			top: 58px;
			right: 30px;
			box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
			.center {
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				padding: 42px 62px;
				// .arrow-button {
				// 	position: absolute;
				// 	bottom: -20px;
				// 	background-color: #292945;
				// 	width: 40px;
				// 	height: 40px;
				// 	box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.36);
				// 	border-radius: 4px;
				// }
				// .arrow-left {
				// 	margin-left: -45px;
				// }
				// .arrow-right {
				// 	margin-right: -45px;
				// }
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
			margin-bottom: 25px;
			.title {
				margin-bottom: 15px;
			}
		}
		.material ,
		.attribute {
			width: 100%;
			height: 150px;
			padding: 25px 20px;
		}
		.material {
			background-image: url("~@/assets/myAssets-details/modelu-card-bg-purple.png");
			background-size: 100% 100%;
			.material-list {
				// display: flex;
				// justify-content: space-between;
				// align-items: center;
				display: grid;
				grid-template-columns: repeat(2,1fr);
				justify-items: center;
				grid-row-gap: 20px;
				margin-top: 30px;
				zoom: 0.5;
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
							color: #FFF;
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
			background-size: 100% 100%;
			margin-bottom: 20px;
			// padding-right: 80px;
			.attribute-list {
				display: grid;
				grid-template-columns: repeat(2,1fr);
				justify-items: center;
				grid-row-gap: 20px;
				margin-top: 30px;
				zoom: 0.5;
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
				font-size: 12px;
				margin-left: 20px;
			}
		}
		.skill-s-list {
			display: grid;
			grid-template-columns: repeat(2,1fr);
			justify-items: center;
			margin-bottom: 40px;
			zoom: 0.75;
			.skill-card {
				width: 214px;
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
			grid-template-columns: repeat(2,1fr);
			justify-items: center;
			// grid-column-gap: 40px;
			grid-row-gap: 12px;
		}
		.wallet-address {
			.title-sub {
				margin-left :18px;
				margin-bottom : 8px;
			}
		}
		.bay-button {
			@include GradualBGColor;
			width: 335px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 6px 12px;
			font-size: 12px;
			border-radius: 4px;
			margin: 0 auto;
			.image {
				width: 28px;
			}
		}
	}
}
</style>
