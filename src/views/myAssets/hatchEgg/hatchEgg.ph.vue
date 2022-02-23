<template>
	<div class="hatch-egg-view">
		<ul class="dragon-hatch-choice">
			<li>
				<dragonCard
					:dragonId="dragonInfoLeft.id"
					:dragonName="dragonInfoLeft.name"
					:cardType="dragonInfoLeft.properties ? dragonInfoLeft.properties.quality : ''"
					:stars="dragonInfoLeft.stars"
					:skills="dragonInfoLeft.skillImages ? dragonInfoLeft.skillImages : []"
					:dragonImage="dragonInfoLeft.dragonImage"
					:dragonHatch="hatchLeftNum"
					@choice="openChoiceDragon('dragonInfoLeft',dragonInfoLeft.id)"
				></dragonCard>
				<p class="shadow-text">{{$t('myAssets_hatchEgg.mbc')}}: {{hatchLeftNum}}/7</p>
			</li>
			<li>
				<dragonCard
					:dragonId="dragonInfoRight.id"
					:dragonName="dragonInfoRight.name"
					:cardType="dragonInfoRight.properties ? dragonInfoRight.properties.quality : ''"
					:stars="dragonInfoRight.stars"
					:skills="dragonInfoRight.skillImages ? dragonInfoRight.skillImages : []"
					:dragonImage="dragonInfoRight.dragonImage"
					:dragonHatch="hatchRightNum"
					@choice="openChoiceDragon('dragonInfoRight',dragonInfoRight.id)"
				></dragonCard>
				<p class="shadow-text">{{$t('myAssets_hatchEgg.mbc')}}: {{hatchRightNum}}/7</p>
			</li>
		</ul>
		<div>
			<p class="hatch-match shadow-text">
				<img src='@/assets/myAssets/col-2-icon.png' alt="">
				{{hatchPrice}}
			</p>
			<button class="theme-type submit-button" @click="handleHatch"  v-loading="loading" :elementLoadingBackground="elementLoadingBackground">
				{{$t('myAssets_hatchEgg.hatch')}}
			</button>
		</div>
		<choiceDragon :dialogHandleValue.sync="dialogHandleValue" @checked="checkedDragon" ref="choiceDragon"></choiceDragon>
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
