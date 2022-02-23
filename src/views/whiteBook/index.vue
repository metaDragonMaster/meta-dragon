<template>
	<div class="white-book-view">
		<pdf v-for="item in pageTotalNum" :key="item" :src="pdfSrc" :page="item" />
	</div>
</template>
<script>
import pdf from 'vue-pdf';
import path from 'path'
import { mapGetters } from "vuex"

export default {
	data: () => ({
		pageTotalNum: 1,
		// pdfSrc:null,
	}),
	components: {
		pdf
	},
	computed: {
		...mapGetters({
			'i18nType': 'i18nType'
		}),
		pdfSrc() {
			const pdfSrcs = {
				zh: 'http://metadragon.games/whitebook_zh.pdf',
				en: 'http://metadragon.games/whitebook_en.pdf',
			}
			const url = this.getObjectItemToKey(pdfSrcs, this.i18nType);
			const src = pdf.createLoadingTask(url);
			src.promise.then(res => {
				this.pageTotalNum = res.numPages;
			});
			return src;
		}
		// pdfSrc() {
		// 	return this.getPdf();
		// }
	},
	// mounted(){
	// 	this.getPdf();
	// },
	methods: {
		getObjectItemToKey(object, key) {
			for (let k in object) {
				if (k == key) return object[k];
			}
			return undefined;
		},
		// getPdf() {
		// 	const pdfSrcs = {
		// 		zh:'http://down.metadragon.games/whitebook_zh.pdf',
		// 		en:'http://down.metadragon.games/whitebook_en.pdf',
		// 	}
		// 	const url = this.getObjectItemToKey(pdfSrcs,this.i18nType);
		// 	const src = pdf.createLoadingTask(url);
		// 	src.promise.then(res => {
		// 		this.pageTotalNum = res.numPages;
		// 	});
		// 	return src;
		// },
	}
};
</script>
<style lang="scss" scoped>
.white-book-view {
	padding: 100px;
	background-color: #999d9b;
	@media screen and (max-width: 1344px) {
		padding: 20px;
	}
	@media screen and (max-width: 980px) {
		padding: 0;
	}
}
</style>
