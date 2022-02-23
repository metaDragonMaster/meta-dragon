
import skillImageS5001 from '@/assets/skills/s/5001.png';
import {
	mapActions,
	mapGetters
} from "vuex";

import ThemeSelect from "@/components/ThemeSelect.vue";
import dragonCard from "@/components/dragonCard.vue";
import eggCard from "@/components/eggCard.vue";

export default {
    data:()=>({
        elementLoadingBackground:'rgba(0, 0, 0, 0.8)',
		loading:false,
        // typeCheck:false,//是否进行选择
        selectTypeValue:"all",
		// selectTypeValue:"Egg",
		selectList:[
			{
				value:'all',
				title:'all'
			},
			{
				value:'on sale',
				title:'on sale'
			},
			{
				value:'un sale',
				title:'un sale'
			},
		],
		selectDragonValue:'1',
		selectDragonList:[
			{
				id:'1',
				value:'New'
			},
			{
				id:'2',
				value:'Highest'
			},
			{
				id:'3',
				value:'Lowest'
			},
			{
				id:'4',
				value:'Highest ID'
			},
			{
				id:'5',
				value:'Lowest ID'
			},
		],
		defineSkills:[
			skillImageS5001,
			skillImageS5001,
			skillImageS5001,
			skillImageS5001,
		],
    }),
    components: {
		dragonCard,
		ThemeSelect,
		eggCard
	},
    computed: {
		...mapGetters({
			web3Provider: 'web3Provider',
			ethAddress: 'ethAddress'
		}),
	},
    mounted() {
		this.$nextTick(()=>{
			this.getDragonList();
		})
	},
    methods: {
        cardClick(item) {
			// if(this.typeCheck) {
			// 	item.isChecked = !item.isChecked;
			// } else {
				this.toDetails(item)
			// }
		},
        toDetails(item) {
			this.$routerUtil.toName('tradingMarketDetails', item);
			console.log('to details')
		},
		emitValue(val) {
			this.selectTypeValue = val
		},
		selectDragonType(item) {
			this.selectDragonValue = item.id
		},
        async getDragonList() {
			if (!this.web3Provider) return;
			this.loading = true;
			// let isEgg = this.selectTypeValue == 'Egg'
			// await this.$M_getDragons('Egg');
			this.loading = false;
		},
    },
}