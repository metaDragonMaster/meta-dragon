<template>
	<div class="theme-select" @blur="handleBlur">
		<div class="select-div theme-border-button" @click.stop="selectClick">
			<span class="select-text">{{ value }}</span>
		</div>
		<ul class="select-option theme-border-select" v-show="selectshow">
			<li class v-for="(ct, index) in listdata" :key="index" @click="selectName(ct.value)">
				<span>{{ ct.title || ct.value }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default: () => []
		},
		value: ''
	},
	data() {
		return {
			selectshow: false
		};
	},
	computed: {
		listdata() {
			return this.list;
		}
	},
	mounted() {
		document.addEventListener('click', this.clickOther, true);
	},
	beforeDestroy() {
		this.removeListener();
	},
	methods: {
		removeListener() {
			document.removeEventListener('click', this.clickOther, true);
		},
		clickOther(e) {
			if (this.selectshow) {
				let path = e.path;
				let pathClassNameList = path
					.map(item => item.className)
					.filter(item => !!item);
				let className = this.$el.className;
				if (!pathClassNameList.includes(className)) {
					this.handleBlur();
				}
			}
		},
		handleBlur() {
			// console.log('handleBlur');
			this.selectshow = false;
		},
		selectClick() {
			this.selectshow = !this.selectshow;
		},
		selectName(value) {
			this.$emit('emitValue', value);
			this.selectshow = false;
		}
	}
};
</script>

<style scoped lang="scss">
@import "@/styles/theme";
.theme-select {
	position: relative;
	color: #fff;
}
.select-div {
	place-items: center;
	width: 130px;
	height: 42px;
	cursor: pointer;
	position: relative;
	z-index: 2;
	&::before {
		content: "";
		display: block;
		background: url(~@/assets/select/select-arrow.png) no-repeat;
		background-size: contain;
		width: 10px;
		height: 12px;
		z-index: 1;
		position: absolute;
		right: 12px;
	}
	.select-text {
		font-size: 12px;
	}
}

.select-option {
	width: 100%;
	// height: 80px;
	// background: rgba(138, 138, 138, 1);
	// border-radius: 0px 0px 4px 4px;
	z-index: 1;
	position: absolute;
	padding-top: 10px;
	margin-top: -10px;
	li {
		width: 100%;
		padding: 8px 12px;
		font-size: 12px;
		cursor: pointer;
		&:hover {
			color: rgba(46, 151, 249, 1);
		}
	}
}
</style>
