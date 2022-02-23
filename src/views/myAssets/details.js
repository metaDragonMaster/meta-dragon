import rate from "@/components/rate.vue";
import dragonCard from "@/components/dragonCard.vue";
import percent from '@/components/percent.vue';
import {
	mapGetters
} from "vuex";

import skillsList from "@/jsons/skillsList.js"

// import skillImageF5001 from '@/assets/skills/f/5001.png';
// import skillImageS5001 from '@/assets/skills/s/5001.png';
// import skillImageF5002 from '@/assets/skills/f/5002.png';
// import skillImageS5002 from '@/assets/skills/s/5002.png';
// import skillImageF5003 from '@/assets/skills/f/5003.png';
// import skillImageS5003 from '@/assets/skills/s/5003.png';
// import skillImageF5004 from '@/assets/skills/f/5004.png';
// import skillImageS5004 from '@/assets/skills/s/5004.png';
// import skillImageF5005 from '@/assets/skills/f/5005.png';
// import skillImageS5005 from '@/assets/skills/s/5005.png';
// import skillImageF5006 from '@/assets/skills/f/5006.png';
// import skillImageS5006 from '@/assets/skills/s/5006.png';
// import skillImageF5007 from '@/assets/skills/f/5007.png';
// import skillImageS5007 from '@/assets/skills/s/5007.png';
// import skillImageF5008 from '@/assets/skills/f/5008.png';
// import skillImageS5008 from '@/assets/skills/s/5008.png';

export default {
	data() {
		return {
			dragonInfo: {},
			skillLvList: [{
					quality: 1,
					skillBorderImage: require("@/assets/myAssets-details/lv-border-1.png"),
				},
				{
					quality: 2,
					skillBorderImage: require("@/assets/myAssets-details/lv-border-2.png"),
				},
				{
					quality: 3,
					skillBorderImage: require("@/assets/myAssets-details/lv-border-3.png"),
				},
				{
					quality: 4,
					skillBorderImage: require("@/assets/myAssets-details/lv-border-4.png"),
				},
			],

			dragonSkills: [],
			// attributeList:[
			// 	{
			// 		image:require("@/assets/myAssets-details/attr-health.png"),
			// 		name:'Hp',
			// 		key:'hp',
			// 		currentValue:'0',
			// 		maxValue:'*'
			// 	},
			// 	{
			// 		image:require("@/assets/myAssets-details/attr-speed.png"),
			// 		name:'Speed',
			// 		key:'speed',
			// 		currentValue:'0',
			// 		maxValue:'*'
			// 	},
			// 	{
			// 		image:require("@/assets/myAssets-details/attr-ccating.png"),
			// 		name:'CritDam',
			// 		key:'',
			// 		currentValue:'150%',
			// 		maxValue:'*'
			// 	},
			// 	{
			// 		image:require("@/assets/myAssets-details/attr-attack.png"),
			// 		name:'Attack',
			// 		key:'attack',
			// 		currentValue:'0',
			// 		maxValue:'*',
			// 	},
			// 	{
			// 		image:require("@/assets/myAssets-details/attr-defenc.png"),
			// 		name:'Defence',
			// 		key:'defense',
			// 		currentValue:'0',
			// 		maxValue:'*'
			// 	},
			// 	{
			// 		image:require("@/assets/myAssets-details/attr-gunfire.png"),
			// 		name:'CritRate',
			// 		key:'',
			// 		currentValue:'10%',
			// 		maxValue:'*'
			// 	},
			// ],
			qualityTypes: [{
					key: '1',
					value: 'Excellent'
				},
				{
					key: '2',
					value: 'Senior'
				},
				{
					key: '3',
					value: 'Epic'
				},
				{
					key: '4',
					value: 'Legend'
				},
			]

		}
	},
	computed: {
		...mapGetters({
			ethAddress: 'ethAddress',
		}),
		attributeList() {
			return [{
					image: require("@/assets/myAssets-details/attr-health.png"),
					name: this.$t('myAssets_details.hp'),
					key: 'hp',
					currentValue: '0',
					maxValue: '*'
				},
				{
					image: require("@/assets/myAssets-details/attr-speed.png"),
					name: this.$t('myAssets_details.speed'),
					key: 'speed',
					currentValue: '0',
					maxValue: '*'
				},
				{
					image: require("@/assets/myAssets-details/attr-ccating.png"),
					name: this.$t('myAssets_details.critDam'),
					key: '',
					currentValue: '150%',
					maxValue: '*'
				},
				{
					image: require("@/assets/myAssets-details/attr-attack.png"),
					name: this.$t('myAssets_details.attack'),
					key: 'attack',
					currentValue: '0',
					maxValue: '*',
				},
				{
					image: require("@/assets/myAssets-details/attr-defenc.png"),
					name: this.$t('myAssets_details.defence'),
					key: 'defense',
					currentValue: '0',
					maxValue: '*'
				},
				{
					image: require("@/assets/myAssets-details/attr-gunfire.png"),
					name: this.$t('myAssets_details.critRate'),
					key: '',
					currentValue: '10%',
					maxValue: '*'
				},
			]
		},
		materialList() {
			return [{
					type: this.$t('myAssets_details.qualifications'), //Qualifications
					key: 'GrowUp',
					value: '',
					image: require("@/assets/myAssets-details/material-2.png"),
				},
				{
					type: this.$t('myAssets_details.quality'), //Quality
					value: '',
					key: 'quality',
					image: require("@/assets/myAssets-details/material-3.png"),
				},
				{
					type: this.$t('myAssets_details.hatchability'), //Hatchability
					value: '0/7',
					key: 'Hatch',
					image: require("@/assets/myAssets-details/material-4.png"),
				},
			]
		}
	},
	components: {
		rate,
		dragonCard,
		percent,
	},
	created() {},
	mounted() {
		this.init();
	},
	methods: {
		init() {
			let params = JSON.parse(JSON.stringify(this.$route.params));
			if (params) {
				let skillIds = params.properties.skill.split(',');
				let skills = [];
				skillIds.map(skillId => {
					// this.skillsList.map(item=>{
					skillsList.map(item => {
						if (item.id == skillId) {
							item.skillBorderImage = this.skillLvList.filter(lvItem => {
								if (item.quality == lvItem.quality) {
									return lvItem
								}
							})[0].skillBorderImage;
							skills.push({
								...item
							});
						}
					})
				})
				let Attrs = params.properties;
				this.attributeList.map(item => {
					for (let i in Attrs) {
						if (item.key == i) {
							item.currentValue = Attrs[i];
						}
					}
				})
				// console.log('params.dragonHatch')
				this.materialList.map(item => {
					if (item.key == 'Hatch') {
						item.value = params.dragonHatch + '/7'
					}
					for (let i in Attrs) {
						if (item.key == i) {
							if (item.key == 'quality') {
								item.value = this.qualityTypes.filter(qualityType => qualityType.key == Attrs[
									'quality'].toString())[0].value || '*';
							} else {
								item.value = Attrs[i];
							}
						}
					}
				})
				this.dragonSkills = skills;
				this.dragonInfo = params;
			} else {
				this.$router.replace('/myAssets')
			}
		},
		setAttributeListI18n() {

		}
	}
}
