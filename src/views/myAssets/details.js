
import rate from "@/components/rate.vue";
import dragonCard from "@/components/dragonCard.vue";
import percent from '@/components/percent.vue';
export default {
	data(){return{
		dragonSkills:[
			{
				lv:1,
				skillImage:require("@/assets/myAssets-details/skill-1.png"),
				skillBorderImage:require("@/assets/myAssets-details/lv-border-1.png"),
			},
			{
				lv:2,
				skillImage:require("@/assets/myAssets-details/skill-2.png"),
				skillBorderImage:require("@/assets/myAssets-details/lv-border-2.png"),
			},
			{
				lv:3,
				skillImage:require("@/assets/myAssets-details/skill-3.png"),
				skillBorderImage:require("@/assets/myAssets-details/lv-border-3.png"),
			},
			{
				lv:4,
				skillImage:require("@/assets/myAssets-details/skill-4.png"),
				skillBorderImage:require("@/assets/myAssets-details/lv-border-4.png"),
			},
		],
		skillLvBorderImages:{
			1:require("@/assets/myAssets-details/lv-border-1.png"),
			2:require("@/assets/myAssets-details/lv-border-2.png"),
			3:require("@/assets/myAssets-details/lv-border-3.png"),
			4:require("@/assets/myAssets-details/lv-border-4.png"),
		},
		skillSList: [
			{
				id:'1',
				lv:1,
				skillImage:require("@/assets/myAssets-details/skill-s-1.png"),
				skillName:'Calossus Slash',
				skillIntro:'Attack individual targets. After hitting the target, you can increase 2 laws, and have a 15% probability '
			},
			{
				id:'2',
				lv:2,
				skillImage:require("@/assets/myAssets-details/skill-s-2.png"),
				skillName:'Sand Attack',
				skillIntro:'Attack individual targets. After hitting the target, you can increase 2 laws, and have a 15% probability '
			},
			{
				id:'3',
				lv:3,
				skillImage:require("@/assets/myAssets-details/skill-s-3.png"),
				skillName:'Sbadow Stop',
				skillIntro:'Attack individual targets. After hitting the target, you can increase 2 laws, and have a 15% probability '
			},
			{
				id:'4',
				lv:4,
				skillImage:require("@/assets/myAssets-details/skill-s-4.png"),
				skillName:'Hacking',
				skillIntro:'Attack individual targets. After hitting the target, you can increase 2 laws, and have a 15% probability '
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
		],
		materialList: [
			{
				type:'MBC',
				value:'2/7',
				image:require("@/assets/myAssets-details/material-1.png"),
			},
			{
				type:'OS',
				value:'8/42',
				image:require("@/assets/myAssets-details/material-2.png"),
			},
			{
				type:'CAMP',
				value:'528',
				image:require("@/assets/myAssets-details/material-3.png"),
			},
		],
		attributeList:[
			{
				image:require("@/assets/myAssets-details/attr-health.png"),
				name:'Healt',
				currentValue:'79',
				maxValue:'201'
			},
			{
				image:require("@/assets/myAssets-details/attr-speed.png"),
				name:'Speed',
				currentValue:'48',
				maxValue:'187'
			},
			{
				image:require("@/assets/myAssets-details/attr-ccating.png"),
				name:'Ccating',
				currentValue:'38',
				maxValue:'146'
			},
			{
				image:require("@/assets/myAssets-details/attr-attack.png"),
				name:'Attack',
				currentValue:'53',
				maxValue:'207'
			},
			{
				image:require("@/assets/myAssets-details/attr-defenc.png"),
				name:'Defenc',
				currentValue:'46',
				maxValue:'176'
			},
			{
				image:require("@/assets/myAssets-details/attr-gunfire.png"),
				name:'Gunfire',
				currentValue:'57',
				maxValue:'222'
			},
		],
		
	}},
	components: {
		rate,
		dragonCard,
		percent,
	},
}