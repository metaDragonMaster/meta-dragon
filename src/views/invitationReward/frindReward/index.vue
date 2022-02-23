<template>
    <div class="friend-reward-view">
        <div class="reverse">
            <p
                class="title-p"
            >{{$t('invitationReward.ps')}}</p>
            <div class="table-title">
                <div class="centent">
                    <p class="weight-blod">WALLET ADDRESS</p>
                    <p class="weight-blod">NUMBER OF PURCHASES</p>
                </div>
                <div class="hr theme-type"></div>
            </div>
        </div>
        <ul class="table-data-list" v-loading="listLoading">
            <li v-for="item in resChild" :key="item.address" class="hover-filter">
                <div class="dragon-head">
                    <img src="@/assets/inviteAPrize/dragon-head.png" alt />
                </div>
                <div class="wallet-address">
                    <div>
                        <span class="weight-blod">Wallet Address :</span>
                        <span>{{ item.address }}</span>
                    </div>
                    <img
                        class="cur-pint"
                        v-copy="item.address"
                        src="@/assets/myAssets-details/wallet-address-icon.png"
                        alt
                    />
                    <div class="proportion">
                        <p class="weight-blod">{{ item.amount }}/10</p>
                    </div>
                </div>
                <div
                    class="theme-type"
                    v-loading="withdrawalLoading"
                    @click="withdrawalCardOne2(item.address)"
                >{{fee}} BNB</div>
                <!-- <div class="task-progress">
                </div>-->
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

export default {
    data: () => ({
        listLoading: false,
        withdrawalLoading: false,
        resChild: [],
        fee:'',
    }),
    computed: {
        ...mapGetters({
            web3Provider: 'web3Provider',
            // ethAddress: 'ethAddress',
        }),
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
            // console.log(addressList)
            // this.resChild
            this.listLoading = true;
            this.resChild = await this.getResChild();
            this.getFee()
            this.listLoading = false;

        },
        async getFee() {
            let web3 = this.web3Provider;
            const contractTask = this.getContractTask();
            const fee = await contractTask.methods.getFee().call();
            this.fee = web3.utils.fromWei(fee);
        },
        async getResChild() {
            let web3 = this.web3Provider;
            const address = await web3.eth.getAccounts();
            const contractTask = this.getContractTask();
            const fee = await contractTask.methods.getFee().call();
            const addressList = await contractTask.methods.getResChild(address[0]).call();
            let resChild = [];
            addressList.map(async item => {
                const data = await contractTask.methods.getTask_one_data(item).call();
                if (data > 0) {
                    resChild.push({
                        address: item,
                        amount: data,
                    })
                }
            });
            return resChild;
        },
        async withdrawalCardOne2(childAddress) {
            this.withdrawalLoading = true;
            let web3 = this.web3Provider;
            try {
                const address = await web3.eth.getAccounts();
                const contractTask = this.getContractTask();
                const fee = await contractTask.methods.getFee().call();
                const withdrawalCardOne2 = await contractTask.methods.withdrawalCardOne2(address[0], childAddress, fee).send({
                    from: address[0],
                    value: fee
                });
                console.log("withdrawalCardOne2", withdrawalCardOne2)
                this.withdrawalLoading = false;
                this.init()
            } catch (e) {
                this.withdrawalLoading = false;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.friend-reward-view {
    .cur-pint {
        cursor: pointer;
    }

    .reverse {
        @media screen and (max-width: 750px) {
            display: flex;
            flex-direction: column-reverse;
            .title-p {
                text-align: right;
                zoom: 0.8;
                margin-bottom: 10px;
            }
        }
    }
    .title-p {
        font-size: 12px;
        color: #0395f3;
        margin-left: auto;
        text-align: right;
    }
    .table-title {
        .centent {
            @media screen and (min-width: 751px) {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                justify-items: center;
                align-items: center;
                padding: 20px;
            }
            @media screen and (max-width: 750px) {
                padding: 0;
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
            }
            .weight-blod {
                @media screen and (max-width: 750px) {
                    zoom: 0.8;
                }
            }
        }
        .hr {
            height: 4px;
            border-radius: 10px;
        }
        @media screen and (min-width: 751px) {
            padding: 0 0 30px;
        }
        @media screen and (max-width: 750px) {
            padding: 0 0 15px;
        }
    }
    .table-data-list {
        li {
            // display: grid;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            // align-items: center;
            overflow: hidden;
            @media screen and (min-width: 751px) {
                border-radius: 20px;
                // height: 215px;
                padding: 20px 70px;
                // grid-template-columns: 150px 1fr;
                align-content: center;
            }
            @media screen and (max-width: 750px) {
                border-radius: 10px;
                // height: 105px;
                padding: 20px 10px;
                // grid-template-columns: 50px 1fr;
                align-content: center;

                // justify-content: space-around;
                // flex-wrap: wrap;
            }
            &:not(:last-child) {
                margin-bottom: 30px;
            }
            &::before {
                background-image: url("~@/assets/inviteAPrize/recommended-award-item-bg.png");
            }
            .dragon-head {
                background-image: url("~@/assets/inviteAPrize/dragon-head-border.png");
                background-size: cover;
                background-position: center;
                display: grid;
                place-items: center;
                @media screen and (min-width: 751px) {
                    height: 160px;
                    width: 150px;
                }
                @media screen and (max-width: 750px) {
                    height: 60px;
                    width: 60px;
                }
                img {
                    width: calc(100% - 10px);
                }
            }
            .wallet-address {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                align-items: center;
                @media screen and (min-width: 751px) {
                    padding-left: 65px;
                    span:first-child {
                        padding-right: 30px;
                    }
                    img {
                        margin-left: 30px;
                    }
                }
                @media screen and (max-width: 750px) {
                    padding-left: 12px;
                    font-size: 12px;
                    align-items: center;
                    span {
                        display: block;
                        text-align: center;
                        max-width: 150px;
                        word-wrap: break-word;
                        zoom: 0.8;
                    }
                    img {
                        margin-left: 10px;
                        width: 30px;
                        height: 30px;
                        // position: absolute;
                    }
                }
            }
            .proportion {
                background-image: url("~@/assets/inviteAPrize/six-border.png");
                background-size: contain;
                display: grid;
                place-items: center;
                background-size: center;

                @media screen and (min-width: 751px) {
                    margin-right: 50px;
                    width: 105px;
                    height: 120px;
                    margin-left: 50px;
                }
                @media screen and (max-width: 750px) {
                    height: 30px;
                    font-size: 12px;
                    width: 40px;
                    height: 45px;
                }
            }
            .theme-type {
                border-radius: 12px;
                display: grid;
                place-items: center;
                cursor: pointer;
                @media screen and (min-width: 751px) {
                    padding: 10px 15px;
                }
                @media screen and (max-width: 750px) {
                    font-size: 12px;
                    padding: 10px 15px;
                    margin: auto;
                }
            }
        }
    }
}
</style>