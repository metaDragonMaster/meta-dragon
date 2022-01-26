<template>
	<div class="hatch-egg-view">
		<ul class="dragon-hatch-choice">
			<li class="">
				<dragonCard
					dragonId="123"
					dragonName="dragon name"
					:cardType="1"
					:stars="0"
					:skills="dragonInfo.skills"
					:dragonImage="dragonInfo.image"
					@choice="openChoiceDragon"
				></dragonCard>
				<p class="shadow-text">
					MBC: 0/7
				</p>
			</li>
			<li>
				<dragonCard
					dragonId=""
					dragonName="dragon name"
					:cardType="1"
					:stars="0"
					:skills="dragonInfo.skills"
					:dragonImage="dragonInfo.image"
					@choice="openChoiceDragon"
				></dragonCard>
				<p class="shadow-text">
					MBC: 0/7
				</p>
			</li>
		</ul>
		<div>
			<p class="hatch-match shadow-text">
				<img src='@/assets/myAssets/col-1-icon.png' alt="">
				99999999999999
			</p>
			<button class="theme-type submit-button">Hatch</button>
		</div>
		<choiceDragon :dialogHandleValue.sync="dialogHandleValue"></choiceDragon>
	</div>
</template>
<script src="./index.js" type="text/javascript" charset="utf-8"></script>
<style  lang="scss" scoped="scoped">
.hatch-egg-view {
	background-color: #292945;
	position: relative;
	background-color: #292945;
	// min-height: 100vh;
	margin-top: 45px;
	padding:  42px 8px;
	color: #FFFFFF;
	.dragon-hatch-choice {
		display: flex;
		justify-content: space-between;
		align-items: center;
		// &> li:not(:last-child) {
		// 	margin-right: 250px;
		// }
		li {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			height: 250px;
			width: 50%;
			::v-deep .choice-image {
				margin-top: 25px;
			}
			.shadow-text {
				text-align: center;
			}
			::v-deep .choice-image {
				width: 100px;
				height: 100px;
				margin-top: 50px;
			}
		}
	}
	.hatch-match {
		text-align: center;
		margin-left: -50px;
		margin-top: 50px;
		img {
			max-width: 50px;
		}
	}
	.shadow-text{
		text-shadow: 0 0 10px #2a81ea;
	}
	.submit-button {
		color: #FFFFFF;
		width: 150px;
		height: 38px;
		border-radius: 12px;
		margin: 0 auto;
		display: block;
	}
}
</style>
