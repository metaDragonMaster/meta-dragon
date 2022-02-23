import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/layout/index.vue"
import store from "@/store/index.js"
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
		redirect: '/myAssets/assetsList',
		children: [
			{
				path: 'assetsList',
				name: 'assetsList',
				meta: {
					title: 'assets-list'
				},
				component: () => isPc ? import('@/views/myAssets/assetsList/assetsList.vue') : import(
					'@/views/myAssets/assetsList/assetsList.ph.vue'),
			},
			{
				path: 'hatchEgg',
				name: 'hatchEgg',
				meta: {
					title: 'hatch-egg'
				},
				component: () => isPc ? import('@/views/myAssets/hatchEgg/hatchEgg.vue') : import(
					'@/views/myAssets/hatchEgg/hatchEgg.ph.vue'),
			},
		]
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
		path: '/nftBox',
		name: 'nftBox',
		meta: {
			title: 'nft-box'
		},
		component: () => isPc ? import('@/views/nftBox/index.vue') : import(
			'@/views/nftBox/index.ph.vue'),
	},
	{
		path: '/whiteBook',
		name: 'whiteBook',
		meta: {
			title: 'nft-market'
		},
		component: () => import('@/views/whiteBook/index.vue'),
	},
	{
		path: '/myAuthorizationCode',
		name: 'myAuthorizationCode',
		meta: {
			title: 'my-authorization-code'
		},
		component: () => isPc ? import('@/views/myAuthorizationCode/index.vue') : import('@/views/myAuthorizationCode/index.ph.vue'),
	},
	{
		path: '/bindFriends',
		name: 'bindFriends',
		meta: {
			title: 'bindFriends'
		},
		component: () => isPc ? import('@/views/bindFriends/index.vue') : import('@/views/bindFriends/index.ph.vue'),
	},
	{
		path: '/nftMarket',
		name: 'nftMarket',
		redirect: '/nftMarket/tradingMarket',
		// component: () => isPc ? import('@/views/nftMarket/index.vue') : import('@/views/nftMarket/index.ph.vue'),
		component: () => import('@/views/nftMarket/index.vue'),
		children: [
			{
				path: '/nftMarket/tradingMarket',
				name: 'nftMarketTradingMarket',
				meta: {
					title: 'trading-market'
				},
				component: () => import('@/views/nftMarket/tradingMarket/index.vue'),
			},
			{
				path: '/nftMarket/auction',
				name: 'nftMarketAuction',
				meta: {
					title: 'trading-market-auction'
				},
				component: () => import('@/views/nftMarket/auction/index.vue'),
			},
			{
				path: '/nftMarket/lease',
				name: 'nftMarketLease',
				meta: {
					title: 'nft-market-lease'
				},
				component: () => import('@/views/nftMarket/lease/index.vue'),
			},
			{
				path: '/nftMarket/pledge',
				name: 'nftMarketPledge',
				meta: {
					title: 'nft-market-pledge'
				},
				component: () => import('@/views/nftMarket/pledge/index.vue'),
			},
		],
	},
	{
		path: '/nftMarket/details',
		name: 'nftMarketDetails',
		meta: {
			title: 'my-assets'
		},
		component: () => isPc ? import('@/views/nftMarket/details.vue') : import(
			'@/views/nftMarket/details.ph.vue'),
	},
	{
		path: '/invitationReward',
		name: 'invitationReward',
		redirect: '/invitationReward/myFrind',
		meta: {
			title: 'invitationReward'
		},
		component: () => import('@/views/invitationReward/index.vue'),
		children: [
			{
				path: "myFrind",
				name: "myFrind",
				meta: {
					title: 'myFrind'
				},
				component: () => import('@/views/invitationReward/myFrind/index.vue'),
			},
			{
				path: "frindReward",
				name: "frindReward",
				meta: {
					title: 'frindReward'
				},
				component: () => import('@/views/invitationReward/frindReward/index.vue'),
			},
			{
				path: "lnvitationReward",
				name: "lnvitationReward",
				meta: {
					title: 'lnvitationReward'
				},
				component: () => import('@/views/invitationReward/lnvitationReward/index.vue'),
			},
			{
				path: "cumulativePeople",
				name: "cumulativePeople",
				meta: {
					title: 'cumulativePeople'
				},
				component: () => import('@/views/invitationReward/cumulativePeople/index.vue'),
			},

		]
	},
	]

}]

const router = new VueRouter({
	routes,
	mode: 'hash',
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0,
			// behavior: 'smooth',
		}
	},
})
router.beforeEach(async (to, from, next) => {
	console.log(store.getters.haveRes)
	console.log("bindFriends", to.path == '/bindFriends' && !store.getters.haveRes);
	if (to.path != '/homepage' && !store.getters.haveAuth) {
		next('/homepage')
	} else if (to.path != '/homepage' && to.path != '/bindFriends' && to.path != '/nftBox' && to.path != '/nftMarket/tradingMarket' && !store.getters.haveRes) {
		next('/bindFriends')
	} else {
		next()
	}
})
// const routerPush = router.prototype.push;
// router.prototype.push = function push(location, onResolve, onReject) {
// 	return routerPush.call(this, location, onResolve, onReject)
// }

export default router
