
import rate from "@/components/rate.vue";
import dragonCard from "@/components/dragonCard.vue";
import percent from '@/components/percent.vue';
import { mapGetters } from "vuex";

import skillImageF5001 from '@/assets/skills/f/5001.png';
import skillImageS5001 from '@/assets/skills/s/5001.png';
import skillImageF5002 from '@/assets/skills/f/5002.png';
import skillImageS5002 from '@/assets/skills/s/5002.png';
import skillImageF5003 from '@/assets/skills/f/5003.png';
import skillImageS5003 from '@/assets/skills/s/5003.png';
import skillImageF5004 from '@/assets/skills/f/5004.png';
import skillImageS5004 from '@/assets/skills/s/5004.png';
import skillImageF5005 from '@/assets/skills/f/5005.png';
import skillImageS5005 from '@/assets/skills/s/5005.png';
import skillImageF5006 from '@/assets/skills/f/5006.png';
import skillImageS5006 from '@/assets/skills/s/5006.png';
import skillImageF5007 from '@/assets/skills/f/5007.png';
import skillImageS5007 from '@/assets/skills/s/5007.png';
import skillImageF5008 from '@/assets/skills/f/5008.png';
import skillImageS5008 from '@/assets/skills/s/5008.png';

export default {
	data(){return{
		dragonInfo:{},
		skillLvList:[
			{
				quality:1,
				skillBorderImage:require("@/assets/myAssets-details/lv-border-1.png"),
			},
			{
				quality:2,
				skillBorderImage:require("@/assets/myAssets-details/lv-border-2.png"),
			},
			{
				quality:3,
				skillBorderImage:require("@/assets/myAssets-details/lv-border-3.png"),
			},
			{
				quality:4,
				skillBorderImage:require("@/assets/myAssets-details/lv-border-4.png"),
			},
		],
		skillsList:[
			{
				id:'5001',
				name: 'Claws',
				quality: 1,
				des:'Use claws to deal 120% attack damage to the enemy',
				skillImageF:skillImageF5001,
				skillImageS:skillImageS5001,
			},
			{
				id:'5002',
				name: 'Bite',
				quality: 1,
				des:'Deal 110% attack damage to the enemy, and continue to lose blood for 2 rounds',
				skillImageF:skillImageF5002,
				skillImageS:skillImageS5002,
			},
			{
				id:'5003',
				name: 'Strong',
				quality: 1,
				des:'Increases defense of all teammates by 10%',
				skillImageF:skillImageF5003,
				skillImageS:skillImageS5003,
			},
			{
				id:'5004',
				name: 'Horn',
				quality: 1,
				des:'Increases the attack power of all teammates by 10%',
				skillImageF:skillImageF5004,
				skillImageS:skillImageS5004,
			},
			{
				id:'5005',
				name: 'Roar',
				quality: 1,
				des:'Inflicts attack damage equal to 90% of ATK to all enemies',
				skillImageF:skillImageF5005,
				skillImageS:skillImageS5005,
			},
			{
				id:'5006',
				name: 'Slam',
				quality: 1,
				des:'Launch a slam, dealing 80% attack damage to a single enemy and stunned for 1 round',
				skillImageF:skillImageF5006,
				skillImageS:skillImageS5006,
			},
			{
				id:'5007',
				name: 'Rest',
				quality: 1,
				des:'Restores 150 HP to self',
				skillImageF:skillImageF5007,
				skillImageS:skillImageS5007,
			},
			{
				id:'5008',
				name: 'Treat',
				quality: 1,
				des:'Restore 100 life points to all allies',
				skillImageF:skillImageF5008,
				skillImageS:skillImageS5008,
			},
			{
				id:'5009',
				name: 'Claws',
				quality: 2,
				des:'Use claws to deal 140% attack damage to the enemy',
				skillImageF:skillImageF5001,
				skillImageS:skillImageS5001,
			},
			{
				id:'5010',
				name: 'Bite',
				quality: 2,
				des:'Use sharp claws to deal 120% attack damage to the enemy, and continue to lose blood for 2 rounds',
				skillImageF:skillImageF5002,
				skillImageS:skillImageS5002,
			},
			{
				id:'5011',
				name: 'Strong',
				quality: 2,
				des:'Increases defense of all teammates by 15%',
				skillImageF:skillImageF5003,
				skillImageS:skillImageS5003,
			},
			{
				id:'5012',
				name: 'Horn',
				quality: 2,
				des:'Increases the attack power of all teammates by 15%',
				skillImageF:skillImageF5004,
				skillImageS:skillImageS5004,
			},
			{
				id:'5013',
				name: 'Roar',
				quality: 2,
				des:'Deals 90% attack damage to all enemies',
				skillImageF:skillImageF5005,
				skillImageS:skillImageS5005,
			},
			{
				id:'5014',
				name: 'Slam',
				quality: 2,
				des:'Launch a slam, dealing 90% attack damage to a single enemy and stunned for 1 round',
				skillImageF:skillImageF5006,
				skillImageS:skillImageS5006,
			},
			{
				id:'5015',
				name: 'Rest',
				quality: 2,
				des:'Restores 400 HP to self',
				skillImageF:skillImageF5007,
				skillImageS:skillImageS5007,
			},
			{
				id:'5016',
				name: 'Treat',
				quality: 2,
				des:'Restore 200 life points to all allies',
				skillImageF:skillImageF5008,
				skillImageS:skillImageS5008,
			},
			
			{
				id:'5017',
				name: 'Claws',
				quality: 3,
				des:'Use claws to deal 160% attack damage to the enemy',
				skillImageF:skillImageF5001,
				skillImageS:skillImageS5001,
			},
			{
				id:'5018',
				name: 'Bite',
				quality: 3,
				des:'Deal 120% attack damage to the enemy, and continue to lose blood for 2 rounds',
				skillImageF:skillImageF5002,
				skillImageS:skillImageS5002,
			},
			{
				id:'5019',
				name: 'Strong',
				quality: 3,
				des:'Increases defense of all teammates by 20%',
				skillImageF:skillImageF5003,
				skillImageS:skillImageS5003,
			},
			{
				id:'5020',
				name: 'Horn',
				quality: 3,
				des:'Increases the attack power of all teammates by 20%',
				skillImageF:skillImageF5004,
				skillImageS:skillImageS5004,
			},
			{
				id:'5021',
				name: 'Roar',
				quality: 3,
				des:'Inflicts attack damage equal to 100% of ATK to all enemies',
				skillImageF:skillImageF5005,
				skillImageS:skillImageS5005,
			},
			{
				id:'5022',
				name: 'Slam',
				quality: 3,
				des:'Launch a slam, dealing 100% attack damage to a single enemy and stunned for 1 round',
				skillImageF:skillImageF5006,
				skillImageS:skillImageS5006,
			},
			{
				id:'5023',
				name: 'Rest',
				quality: 3,
				des:'Restores HP by 60% of own attack power',
				skillImageF:skillImageF5007,
				skillImageS:skillImageS5007,
			},
			{
				id:'5024',
				name: 'Treat',
				quality: 3,
				des:'Restores HP to all allies by 40% of their attack power',
				skillImageF:skillImageF5008,
				skillImageS:skillImageS5008,
			},
			{
				id:'5025',
				name: 'Claws',
				quality: 4,
				des:'Use claws to deal 180% attack damage to the enemy',
				skillImageF:skillImageF5001,
				skillImageS:skillImageS5001,
			},
			{
				id:'5026',
				name: 'Bite',
				quality: 4,
				des:'Deal 130% attack damage to the enemy, and continue to lose blood for 2 rounds',
				skillImageF:skillImageF5002,
				skillImageS:skillImageS5002,
			},
			{
				id:'5027',
				name: 'Strong',
				quality: 4,
				des:'Increases defense of all teammates by 30%',
				skillImageF:skillImageF5003,
				skillImageS:skillImageS5003,
			},
			{
				id:'5028',
				name: 'Horn',
				quality: 4,
				des:'Increases the attack power of all teammates by 30%',
				skillImageF:skillImageF5004,
				skillImageS:skillImageS5004,
			},
			{
				id:'5029',
				name: 'Roar',
				quality: 4,
				des:'Inflicts attack damage equal to 120% of ATK to all enemies',
				skillImageF:skillImageF5005,
				skillImageS:skillImageS5005,
			},
			{
				id:'5030',
				name: 'Slam',
				quality: 4,
				des:'Launch a slam, dealing 110% attack damage to a single enemy and stunned for 1 round',
				skillImageF:skillImageF5006,
				skillImageS:skillImageS5006,
			},
			{
				id:'5031',
				name: 'Rest',
				quality: 4,
				des:'Restores HP by 80% of own attack power',
				skillImageF:skillImageF5007,
				skillImageS:skillImageS5007,
			},
			{
				id:'5032',
				name: 'Treat',
				quality: 4,
				des:'Restores HP to all allies by 50% of their attack power',
				skillImageF:skillImageF5008,
				skillImageS:skillImageS5008,
			},
		],
		dragonSkills:[],
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
				type:'Qualifications',//Qualifications
				key:'GrowUp',
				//GrowUp
				value:'',
				image:require("@/assets/myAssets-details/material-2.png"),
			},
			{
				type:'Quality',//Quality
				value:'',
				key:'quality',
				image:require("@/assets/myAssets-details/material-3.png"),
			},
			{
				type:'Hatchability',//Hatchability
				value:'0/7',
				key:'Hatch',
				image:require("@/assets/myAssets-details/material-4.png"),
			},
		],
		attributeList:[
			{
				image:require("@/assets/myAssets-details/attr-health.png"),
				name:'Hp',
				key:'hp',
				currentValue:'0',
				maxValue:'*'
			},
			{
				image:require("@/assets/myAssets-details/attr-speed.png"),
				name:'Speed',
				key:'speed',
				currentValue:'0',
				maxValue:'*'
			},
			{
				image:require("@/assets/myAssets-details/attr-ccating.png"),
				name:'CritDam',
				key:'',
				currentValue:'150%',
				maxValue:'*'
			},
			{
				image:require("@/assets/myAssets-details/attr-attack.png"),
				name:'Attack',
				key:'attack',
				currentValue:'0',
				maxValue:'*',
			},
			{
				image:require("@/assets/myAssets-details/attr-defenc.png"),
				name:'Defence',
				key:'defense',
				currentValue:'0',
				maxValue:'*'
			},
			{
				image:require("@/assets/myAssets-details/attr-gunfire.png"),
				name:'CritRate',
				key:'',
				currentValue:'10%',
				maxValue:'*'
			},
		],
		qualityTypes:[
			{
				key:'1',
				value:'Excellent'
			},
			{
				key:'2',
				value:'Senior'
			},
			{
				key:'3',
				value:'Epic'
			},
			{
				key:'4',
				value:'Legend'
			},
		],
		tradingDialog:true,
	}},
	computed: {
		...mapGetters({
			ethAddress: 'ethAddress',
		}),
	},
	components: {
		rate,
		dragonCard,
		percent,
	},
	created() {
	},
	mounted() {
		// this.init()
	},
	methods:{
		init() {
			let params = JSON.parse(JSON.stringify(this.$route.params));
			if(params) {
				// console.log('have params');
				let skillIds = params.properties.skill.split(',');
				let skills = [];			
				skillIds.map(skillId=>{
					this.skillsList.map(item=>{
						if(item.id == skillId) {
							item.skillBorderImage = this.skillLvList.filter(lvItem=>{
								if(item.quality == lvItem.quality) {
									// console.log(lvItem);
									return lvItem
								}
							})[0].skillBorderImage;
							// console.log(item.skillborderImage)
							skills.push({
								...item
							});
						}
					})
				})
				let Attrs = params.properties;
				this.attributeList.map(item=>{
					for(let i in Attrs) {
						if(item.key == i) {
							item.currentValue = Attrs[i];
						}
					}
				})
				console.log('params.dragonHatch')
				this.materialList.map(item=>{
					if(item.key == 'Hatch') {
						item.value = params.dragonHatch + '/7'
					}
					for(let i in Attrs) {
						if(item.key == i) {
							if(item.key == 'quality') {
								item.value = this.qualityTypes.filter(qualityType=>qualityType.key == Attrs['quality'].toString())[0].value || '*';
							} else {
								item.value = Attrs[i];
							}
						}
					}
				})
				// console.log(skills);
				this.dragonSkills = skills;
				this.dragonInfo = params;
				// console.log(this.dragonInfo);
			} else {
				this.$router.replace('/myAssets')
			}
		},
		openDialog() {
			this.tradingDialog = true;
		},
		closeDialog() {
			this.tradingDialog = false;
		}
	}
}