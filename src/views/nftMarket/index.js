import {
	mapGetters
} from "vuex";
import {
	Notification
} from 'element-ui';
export default {
	data() {
		return {
			loading: false,
			currentStatic:-1,
			// show-icon :closable="false" title="成功提示的文案" type="success" effect="dark" />
			staticList:[
				{
					id:-1
				},
				{
					id:0,
					type:'default',
					title:'wait Hatching',
				},
				{
					id:1,
					type:'success',
					title:'successful hatching',
				},
				{
					id:2,
					type:'error',
					title:'hatching failure',
				},
			]
		}
	},
	computed: {
		...mapGetters({
			web3Provider: 'web3Provider',
		}),
		static() {
			let r = this.staticList.filter(item=>item.id == this.currentStatic)[0];
			return r || {
				title:"",
				type:""
			}
		}
	},
	methods: {
		ethSend() {
			let that = this;
			let web3 = this.web3Provider;
			web3.eth.getAccounts((error, result) => {
				if (!error) {
					this.currentStatic = 0;
					// console.log(result);
				} //授权成功后result能正常获取到账号了
				// result: ['0x5c2571f4AaBc057a100bDfc058264EEE9C65C3D3']
			}).then(res => {
				console.log(res);
				that.loading = true;
				web3.eth.sendTransaction({
						// from: '0x5c2571f4AaBc057a100bDfc058264EEE9C65C3D3',
						from: res[0],
						// to: '0x818DF62ff0bE3B28AE8be25e2e848E10138018B7',
						to: '0xb75d7BCE4cE82fcaB65318A71a34C7AE709D9ef7',
						value: '1000000000000000',

					})
					.on('transactionHash', (hash)=> {
						console.info("transactionHash", hash);
					})
					.on('confirmation', (confirmationNumber, receipt) => {
						console.info('confirmation');
						console.info(confirmationNumber);
						console.info(receipt);
						if (confirmationNumber >= 2) {
							this.loading = false;
							this.currentStatic = 1;
							return;
						}
					})
					.on('error', (e)=>{
						console.error(e);
						this.currentStatic = 2;
						this.loading = false;
					});
			});
			// console.log(this.web3Provider)
		}
	}
}
