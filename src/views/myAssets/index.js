
import rate from "@/components/rate.vue";
import dragonCard from "@/components/dragonCard.vue"
export default {
	data(){return{
		dragonGridList:[
			{
				bgImage:require('@/assets/myAssets/col-1.png'),
				iconImage:require('@/assets/myAssets/col-1-icon.png'),
				num:'0',
				type:'NFC',
			},
			{
				bgImage:require('@/assets/myAssets/col-2.png'),
				iconImage:require('@/assets/myAssets/col-2-icon.png'),
				num:'0.00',
				type:'LC',
			},
			{
				bgImage:require('@/assets/myAssets/col-3.png'),
				iconImage:require('@/assets/myAssets/col-3-icon.png'),
				num:'0',
				type:'Dragon',
			},
			{
				bgImage:require('@/assets/myAssets/col-4.png'),
				iconImage:require('@/assets/myAssets/col-4-icon.png'),
				num:'0',
				type:'Egg',
			},
			
		],
		dragonList:[
			{
				cardType:"blue",
				skills:[],
				stars: 4,
				dragonImage: '@/assets/myAssets/dragon.png'
			},
			{
				cardType:"purple",
				skills:[],
				stars: 5,
				dragonImage: '@/assets/myAssets/dragon.png'
			},
			{
				cardType:"yellow",
				skills:[],
				stars: 5,
				dragonImage: '@/assets/myAssets/dragon.png'
			},
			{
				cardType:"red",
				skills:[],
				stars: 5,
				dragonImage: '@/assets/myAssets/dragon.png'
			},
			{
				cardType:"blue",
				skills:[],
				stars: 5,
				dragonImage: '@/assets/myAssets/dragon.png'
			},
			{
				cardType:"purple",
				skills:[],
				stars: 5,
				dragonImage: '@/assets/myAssets/dragon.png'
			},
			{
				cardType:"yellow",
				skills:[],
				stars: 5,
				dragonImage: '@/assets/myAssets/dragon.png'
			},
			{
				cardType:"red",
				skills:[],
				stars: 5,
				dragonImage: '@/assets/myAssets/dragon.png'
			},
			{
				cardType:"blue",
				skills:[],
				stars: 5,
				dragonImage: '@/assets/myAssets/dragon.png'
			},
			{
				cardType:"purple",
				skills:[],
				stars: 5,
				dragonImage: '@/assets/myAssets/dragon.png'
			},
			{
				cardType:"yellow",
				skills:[],
				stars: 5,
				dragonImage: '@/assets/myAssets/dragon.png'
			},
			{
				cardType:"red",
				skills:[],
				stars: 5,
				dragonImage: '@/assets/myAssets/dragon.png'
			},
			{
				cardType:"blue",
				skills:[],
				stars: 5,
				dragonImage: '@/assets/myAssets/dragon.png'
			},
			{
				cardType:"purple",
				skills:[],
				stars: 5,
				dragonImage: '@/assets/myAssets/dragon.png'
			},
			{
				cardType:"yellow",
				skills:[],
				stars: 5,
				dragonImage: '@/assets/myAssets/dragon.png'
			},
			{
				cardType:"red",
				skills:[],
				stars: 5,
				dragonImage: '@/assets/myAssets/dragon.png'
			},
		],
		defaultSkills:[
			{
				image:require("@/assets/myAssets/skill-1.png")
			},
			{
				image:require("@/assets/myAssets/skill-1.png")
			},
			{
				image:require("@/assets/myAssets/skill-1.png")
			},
			{
				image:require("@/assets/myAssets/skill-1.png")
			},
		]
	}},
	components: {
		rate,
		dragonCard,
	},
	mounted() {
		
	},
	methods:{
		toDetails() {
			this.$routerUtil.toPath('/myAssets/details')
			console.log('to details')
		}
	}
}
