<template>
	<div class="white-book-view" :class="[isPc ? 'limit-max-width' : 'narrow']">
		<div class="flex ">
			<el-select v-model="languageComponent" class="fox-right">
				<el-option v-for="item in languages" :key="item.language" :label="item.text" :value="item.language"></el-option>
			</el-select>
		</div>
		<component :is="languageComponent" :tableData="tableData"></component>
	</div>
</template>
<script>
import en from "./en.vue"
import zhCN from "./zh_cn.vue"
import { mapGetters } from 'vuex';
export default {
	data:()=>({
		tableData: [
			{ num: '0', lc: '8000', day: '7' },
			{ num: '1', lc: '8100', day: '7' },
			{ num: '2', lc: '8200', day: '7' },
			{ num: '3', lc: '8300', day: '7' },
			{ num: '4', lc: '8400', day: '7' },
			{ num: '5', lc: '8500', day: '7' },
			{ num: '6', lc: '8600', day: '7' }
		],
		languageComponent: 'zhCN',
		languages:[
			{
				language:'en',
				text:'English'
			},
			{
				language:'zhCN',
				text:'中文'
			}
		]
	}),
	components: {
		en,
		zhCN,
	},
	computed: {
		...mapGetters({
			isPc: 'isPc'
		}),
		// languageComponent() {
		// 	return 
		// }
	}
};
</script>
<style lang="scss" scoped="scoped">
.flex {
	display: flex;
}
.fox-right {
	display: block;
	margin: 10px auto;
}
.white-book-view {
	min-height: 100vh;
	padding-bottom: 100px;
	background-color: #1f1d32;
	color: #ffffff;
	.white-book-title {
		text-align: center;
	}
	& > img {
		width: 100%;
	}
	&.narrow {
		padding: 16px;
		& > * {
			zoom: 0.8;
		}
		table {
			margin: 12px auto;
		}
	}
	h3 {
		margin: 16px 0;
	}
	p {
		margin: 8px 0;
	}
	ul > li {
		list-style: disc;
		list-style-position: inside;
	}
	ol {
		text-indent: 24px;
		> li {
			list-style: square;
			list-style-position: inside;
		}
	}
	
	table {
		background-color: #FFFFFF;
		color: #333333;
		border: 1px solid #333333;
		margin: 24px;
		tr {
			text-align: center;
			& > th {
				background-color: #E7E6E6;
			}
			& > td,
			& > th {
				min-width: 100px;
				max-width: 125px;
			}
			&:not(:last-child) {
				& > td,
				& > th {
					border-bottom: 1px solid #333333;
				}
			}
			& > td,
			& > th {
				&:not(:last-child) {
					border-right: 1px solid #333333;
				}
			}
		}
	}
}
</style>
