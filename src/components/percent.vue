<template>
	<div class="percent">
		<p class="percent-value">
			<span>{{currentValue}}</span>
			<!-- <i>|</i> -->
			<!-- <span>{{maxValue}}</span> -->
		</p>
		<div class="percent-speed">
			<div class="speed" :style="{
				width:getPercent(currentValue,maxValue)
			}"></div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	props: {
		currentValue:{
			type:[String,Number],
			default:'0'
		},
		maxValue:{
			type:[String,Number],
			default:'0'
		},
	},
	methods: {
		getPercent(num, total) {
			if(total == '*') return '100%';
			num = parseFloat(num);
			total = parseFloat(total);
			if (isNaN(num) || isNaN(total)) {
				return '-';
			}
			return total <= 0 ? '0%' : Math.round((num / total) * 10000) / 100.0 + '%';
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.percent {
	background-image: url(../assets/myAssets-details/percentage-bg.png);
	width: 148px;
	height: 45px;
	display: flex;
	position: relative;
	z-index: 1;
	.percent-value {
		margin-left: auto;
		position: absolute;
		right: 16px;
		top: 0;
		font-size: 14px;
	}
	.percent-speed {
		// z-index: -1;
		// position: absolute;
		// left: 16px;
		// top: 16px;
		width: 115px;
		height: 12px;
		background-color: #000000;
		border-radius: 0 4px 0 4px;
		margin-top: 16px;
		margin-left: 16px;
		overflow: hidden;
		.speed {
			height: 100%;
			width: 0;
			background: linear-gradient(90deg, #FF934C, #FC686F);
			transition: width 0.5s;
		}
	}
}
</style>
