<template>
	<div class="dragon-card" :class="[
		types[cardType],cardType
	]"
		
	>
		<p class="RGB-text left">#{{dragonId}}</p>
		<p class="left">{{dragonName}}</p>
		<img class="dragon-image" src="@/assets/myAssets/dragon.png" alt="" />
		<Rate :stars="stars"></Rate>
		<ul class="skill-list">
			<li v-for="item in skills"><img :src="item.image" alt="image error" /></li>
		</ul>
	</div>
</template>
<script>
import rate from './rate.vue';
export default {
	data() {
		return {
			types: {
				1: 'cli-1',
				2: 'cli-2',
				3: 'cli-3',
				4: 'cli-4'
			}
		};
	},
	components: {
		"Rate":rate
	},
	props: {
		// dragonImage: {
		// 	default: 
		// },
		dragonId:{
			type:[String,Number],
			default:''
		},
		dragonName:{
			type:String,
			default:''
		},
		cardType: {
			type: [Number,String],
			// default: 1,
			// validator(cardTypeValue) {
			// 	// const types = {
			// 	// 	blue: 'cli-1',
			// 	// 	purple: 'cli-2',
			// 	// 	yellow: 'cli-3',
			// 	// 	red: 'cli-4'
			// 	// };
			// 	const types = {
			// 		1: 'cli-1',
			// 		2: 'cli-2',
			// 		3: 'cli-3',
			// 		4: 'cli-4'
			// 	};
			// 	let keys = Object.keys(types);
			// 	return keys.includes(cardTypeValue);
			// }
		},
		skills: {
			type: Array,
			default: () => [],
			validator(skills) {
				let lengthNum = skills.length;
				return lengthNum === 4;
			}
		},
		stars: {
			type: Number,
			default: 0
		}
	},
	// mounted() {
	// 	console.log(this.cardType)
	// },
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
.dragon-card {
	background-repeat: no-repeat;
	background-position: top left;
	background-size: 100% 100%;
	width: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px 6px;
	.left {
		margin-right: auto;
		font-size: 12px;
		margin-left: 8px;
		color: #FFFFFF;
	}
	img {
		width: 75px;
		height: 80px;
	}
	&.cli-1 {
		background-image: url('~@/assets/myAssets/cli-1.png');
		.RGB-text {
			color: #e7f5ff;
		}
	}
	&.cli-2 {
		background-image: url('~@/assets/myAssets/cli-2.png');
		.RGB-text {
			color: #d9a2ff;
		}
	}
	&.cli-3 {
		background-image: url('~@/assets/myAssets/cli-3.png');
		.RGB-text {
			color: #ffe87b;
		}
	}
	&.cli-4 {
		background-image: url('~@/assets/myAssets/cli-4.png');
		.RGB-text {
			color: #ff7878;
		}
	}
	.skill-list {
		display: flex;
		justify-content: space-between;
		width: 100%;
		li {
			background-image: url("~@/assets/myAssets/skill-bg.png");
			background-size: 100%;
			padding: 4px;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
