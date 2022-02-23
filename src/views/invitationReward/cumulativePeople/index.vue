<template>
    <div class="lnvitation-reward-view">
        <p class="title-p">
            <span class="weight-blod title">Cumulative People</span>
            <span
                class="ps"
            >{{$t('invitationReward.ps')}}</span>
        </p>
        <div class="table-title">
            <div class="centent">
                <p class="weight-blod">TASK CONTENT</p>
                <p class="weight-blod">REWARD DESCRIPTION</p>
                <p class="weight-blod">TASK PROGRESS</p>
            </div>
            <div class="hr theme-type"></div>
        </div>
        <p class="friend-length">{{ $t('taskDescribe.taskCount') + ' : ' + taskCount }}</p>
        <ul class="table-data-list" v-loading="listLoading">
            <li v-for="(item) in filterList" :key="item.id" class="hover-filter">
                <div class="task-content">
                    <p>{{ $t("taskDescribe.taskThree.describe", { amount: item.describe }) }}</p>
                </div>
                <div class="reward-description">
                    <p class="text">{{ $t('taskDescribe.taskTwo.reward', { amount: item.amount }) }}</p>
                </div>
                <div class="gift">
                    <div class="gift-box">
                        <img src="@/assets/inviteAPrize/gift.png" alt />
                    </div>
                </div>
                <div class="theme-type task-progress" v-loading="clickLoading" @click="withdrawalCardThree2(item)">{{item.feeAmount}} BNB</div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import {
    friendTaskAddress,
} from "@/jsons/contractAddress.js"
import AbiTask from "@/jsons/abi-friendTask.js"
import Decimal from "decimal.js"

export default {
    data: () => ({
        taskList: [],
        threeDataList: [],
        taskCount: 0,
        clickLoading: false,
        listLoading: false,
    }),
    computed: {
        ...mapGetters({
            web3Provider: 'web3Provider',
            // ethAddress: 'ethAddress',
        }),
        filterList() {
            return this.threeDataList.filter(item => parseInt(item.describe) <= this.taskCount && item.received == false)
        },
    },
    mounted() {
        this.init()
    },
    methods: {
        getContractTask() {
            return new this.web3Provider.eth.Contract(AbiTask, friendTaskAddress)
        },
        async init() {
            if (!this.web3Provider) return;
            try {
                this.listLoading = true;
                this.taskCount = await this.get_rs_times();
                this.threeDataList = await this.getTask_Three_data();
                this.listLoading = false;
            } catch (error) {
                console.error(error);
                this.listLoading = false;
            }
        },
        async getTask_Three_data() {
            const contractTask = this.getContractTask();
            const address = await this.web3Provider.eth.getAccounts();
            const data = await contractTask.methods.getTask_Three_data().call();
            const receivedList = await contractTask.methods.getTask_Three_Award_data(address[0]).call();
            const fee = await contractTask.methods.getFee().call();
            const feeAmount = this.web3Provider.utils.fromWei(fee);
            console.log('getTask_Three_data ---', data)
            console.log('getTask_Three_data receivedList ---', receivedList)
            let list = [];
            data.map((item, index) => {
                // console.log('getTask_tow_data', item[0], item[1])
                let _item = {
                    describe: item[0],
                    amount: item[1],
                    received: false,
                    id: index,
                    feeAmount:0,
                }
                _item.feeAmount = _item.amount * parseFloat(feeAmount)
                receivedList.map(receivedItem => {
                    if (receivedItem[0] == _item.describe && receivedItem[1] == _item.amount) _item.received = receivedItem[2]
                })
                list.push(_item)
            })
            return list;
        },
        async get_rs_times() {
            const contractTask = this.getContractTask();
            const address = await this.web3Provider.eth.getAccounts();
            const data = await contractTask.methods.get_rs_times(address[0]).call();
            return data;
        },
        async withdrawalCardThree2(item) {
            try {
                this.clickLoading = true;
                const contractTask = this.getContractTask();
                const address = await this.web3Provider.eth.getAccounts();
                const fee = await contractTask.methods.getFee().call();
                let amount = new Decimal(fee).mul(new Decimal(item.amount)).toString()
                const data = await contractTask.methods.withdrawalCardThree2(address[0], item.id, amount).send({
                    from: address[0],
                    value: amount
                });
                this.init();
                this.clickLoading = false;
            } catch (e) {
                console.error(e);
                this.clickLoading = false;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.lnvitation-reward-view {
       .title-p {
        display: flex;
        .title {
            font-size: 30px;
        }
        .ps {
            font-size: 12px;
            color: #0395f3;
            margin-left: auto;
        }
        @media screen and (min-width: 751px) {
            justify-content: space-between;
            align-items: flex-end;
        }
        @media screen and (max-width: 750px) {
            flex-direction: column;
            .weight-blod.title {
                font-size: 15px;
            }
        }
    }
    .table-title {
        padding: 0 0 30px;
        .centent {
            display: grid;
            grid-template-columns: 570px auto 175px;
            // justify-content: space-evenly;
            justify-items: start;
            padding: 20px 70px;
        }
        .hr {
            height: 4px;
            border-radius: 10px;
        }
        @media screen and (max-width: 750px) {
            padding: 0 0 0;
            .centent {
                display: flex;
                justify-content: space-between;
                // justify-content: space-evenly;
                justify-items: start;
                padding: 10px 0;
                .weight-blod {
                    font-size: 18px;
                    zoom: 0.5;
                }
            }
        }
    }
    .table-data-list {
        li {
            border-radius: 20px;
            align-items: center;
            overflow: hidden;

            @media screen and (min-width: 751px) {
                display: grid;
                height: 215px;
                padding: 20px 70px;
                grid-template-columns: 540px auto 225px 175px;
                font-size: 20px;
            }
            @media screen and (max-width: 750px) {
                padding: 10px 6px;
                font-size: 12px;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
            }
            &:not(:last-child) {
                margin-bottom: 30px;
            }
            &::before {
                background-image: url("~@/assets/inviteAPrize/lnvite-task-item-bg.png");
            }
            .task-content {
                @media screen and (max-width: 750px) {
                    width: 30%;
                    text-align: center;
                }
            }
            .reward-description {
                display: flex;
                align-items: center;
                .text {
                    text-align: center;
                    @media screen and (min-width: 751px) {
                        width: 300px;
                    }
                    @media screen and (max-width: 750px) {
                        width: 75px;
                    }
                }
            }
            .gift {
                display: flex;
                align-items: center;
                .gift-box {
                    background-image: url("~@/assets/inviteAPrize/border-bg.png");
                    background-size: contain;
                    background-position: center;
                    display: grid;
                    place-items: center;
                    @media screen and (min-width: 751px) {
                        width: 125px;
                        height: 160px;
                        img {
                            width: 80px;
                            height: 65px;
                        }
                    }
                    @media screen and (max-width: 750px) {
                        width: 45px;
                        height: 55px;
                        img {
                            width: 25px;
                            height: 25px;
                        }
                    }
                }
                .num {
                    @media screen and (min-width: 751px) {
                        font-size: 30px;
                    }
                    @media screen and (max-width: 750px) {
                        font-size: 15px;
                    }
                }
            }
            .task-progress {
                display: grid;
                place-items: center;
                border-radius: 12px;
                @media screen and (min-width: 751px) {
                    height: 50px;
                    width: 175px;
                    font-size: 16px;
                    cursor: pointer;
                }
                @media screen and (max-width: 750px) {
                    padding: 10px 15px;
                    font-size: 12px;
                    margin: 0 auto;
                }
            }
        }
    }
}
</style>