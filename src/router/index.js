import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/layout/index.vue"
Vue.use(VueRouter)

function watchPC() {
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // g
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
	return !(isAndroid || isIOS)
}
const isPc = watchPC()
// console.log("router",isPc)
const routes = [{
	path: '/',
	name: 'layout',
	redirect: 'homepage',
	component: layout,
	children: [{
			path: '/homepage',
			name: 'homepage',
			meta: {
				title: 'home-page'
			},
			component: () => isPc ? import('@/views/homepage/index.vue') : import(
				'@/views/homepage/index.ph.vue'),
		},
		{
			path: '/myAssets',
			name: 'myAssets',
			meta: {
				title: 'my-assets'
			},
			component: () => isPc ? import('@/views/myAssets/index.vue') : import(
				'@/views/myAssets/index.ph.vue'),
		},
		{
			path: '/myAssets/details',
			name: 'myAssetsDetails',
			meta: {
				title: 'my-assets'
			},
			component: () => isPc ? import('@/views/myAssets/details.vue') : import(
				'@/views/myAssets/details.ph.vue'),
		},
		{
			path: '/nftMarket',
			name: 'nftMarket',
			meta: {
				title: 'nft-market'
			},
			component: () => isPc ? import('@/views/nftMarket/index.vue') : import('@/views/nftMarket/index.ph.vue'),
		},
	]

}]


const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0,
			// behavior: 'smooth',
		}
	},
})

export default router
