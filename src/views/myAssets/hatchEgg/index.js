import {
	NftAddress,
} from "@/jsons/contractAddress.js";
import {
	mapGetters
} from "vuex";
// import axios from "axios";
import dragonCard from "@/components/dragonCard.vue";
import choiceDragon from "@/components/choiceDragon.vue"
export default {
	data: () => ({
		elementLoadingBackground: 'rgba(0, 0, 0, 0.8)',
		loading: false,
		dragonInfo:{
			image:require('@/assets/dragon/Dragon_jinshu_001.png'),
			skills:[
				require('@/assets/skills/s/5001.png'),
				require('@/assets/skills/s/5002.png'),
				require('@/assets/skills/s/5003.png'),
				require('@/assets/skills/s/5004.png'),
			],
		},
		dialogHandleValue:false
	}),
	components: {
		dragonCard,
		choiceDragon,
	},
	computed: {},
	mounted() {},
	methods: {
		openChoiceDragon() {
			this.dialogHandleValue = true;
		},
	}
}
