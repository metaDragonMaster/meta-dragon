<template>
	<div class="hatch-egg-view">
		<img class="decorate-dragon" src="@/assets/myAssets/dragon-posi-abs.png" alt="" />
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
<style lang="scss" scoped="scoped">
.hatch-egg-view {
	background-color: #292945;
	position: relative;
	background-color: #292945;
	// min-height: 100vh;
	margin-top: 45px;
	padding: 100px 76px;
	color: #FFFFFF;
	.decorate-dragon {
		position: absolute;
		left: 0;
		top: 0;
		transform: translate(-150px, -100px);
	}
	.dragon-hatch-choice {
		display: flex;
		justify-content: center;
		align-items: center;
		&> li:not(:last-child) {
			margin-right: 250px;
		}
		li {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 250px;
			::v-deep .choice-image {
				margin-top: 25px;
			}
			.shadow-text {
				text-align: center;
			}
		}
	}
	.hatch-match {
		text-align: center;
		margin-left: -100px;
		img {
			max-width: 100px;
		}
	}
	.shadow-text{
		text-shadow: 0 0 10px #2a81ea;
	}
	.submit-button {
		color: #FFFFFF;
		width: 300px;
		height: 64px;
		border-radius: 12px;
		font-size: 24px;
		margin: 0 auto;
		display: block;
	}
}
</style>
