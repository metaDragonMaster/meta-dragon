<template>
    <div class="my-friend-view">
        <div class="title-p">
            <span class="weight-blod">My friend</span>
            <span class="ps">{{$t('invitationReward.ps')}}</span>
        </div>
        <div class="hr theme-type"></div>
        <div class="grid-cards">
            <div class="dragon-link-card lnvitation-link hover-filter">
                <div class="lnvitation-button">Lnvitation link</div>
                <div class="link">
                    <p class="font-hide">{{ copyEthAddress }}</p>
                    <img
                        class="cur-pint"
                        src="@/assets/invitation-reward/copy-link-icon.png"
                        @click="mycopy(copyEthAddress)"
                    />
                </div>
            </div>
            <div class="dragon-link-card lnvitation-code hover-filter">
                <div class="lnvitation-button">Lnvitation code</div>
                <div class="link">
                    <p  class="font-hide">{{ethAddress}}</p>
                    <img
                        class="cur-pint"
                        src="@/assets/invitation-reward/copy-link-icon.png"
                        @click="mycopy(ethAddress)"

                    />
                </div>
            </div>
        </div>
        <p
            class="friend-length"
        >{{ $t('invitationReward_myFrind.friendLength') + ' : ' + friendLength }}</p>
        <ul class="table-data-list">
            <li v-for="item in resChild" :key="item.address" class="hover-filter">
                <div class="dragon-head">
                    <img src="@/assets/inviteAPrize/dragon-head.png" alt />
                </div>
                <div class="wallet-address">
                    <p>
                        <span class="weight-blod">Wallet Address:</span>
                        <span>{{ item.address }}</span>
                    </p>
                    <img
                        class="cur-pint"
                        src="@/assets/myAssets-details/wallet-address-icon.png"
                        v-copy="item.address"
                    />
                </div>
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
        resChild: []
    }),
    computed: {
        ...mapGetters({
            web3Provider: 'web3Provider',
            ethAddress: 'ethAddress',
        }),
        friendLength() {
            return this.resChild.length;
        },
        copyEthAddress() {
            return `metadragon.games/#/?ref=${this.ethAddress}`;
            // return `192.168.1.20:8080/#/?ref=${this.ethAddress}`;
        }
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
            this.resChild = await this.getResChild();
        },
        async getResChild() {
            let web3 = this.web3Provider;
            const address = await web3.eth.getAccounts();
            const contractTask = this.getContractTask();
            const addressList = await contractTask.methods.getResChild(address[0]).call();
            let resChild = []
            addressList.map(async item => {
                const taskOneData = await contractTask.methods.getTask_one_data(item).call();
                console.log(taskOneData)
                resChild.push({
                    address: item,
                    amount: taskOneData
                })
            })
            return resChild
        },
        mycopy(text) {
            console.log(text);
            let textareaEl = document.createElement('textarea');
            textareaEl.setAttribute('readonly', 'readonly'); // 防止手机上弹出软键盘
            textareaEl.value = text;
            document.body.appendChild(textareaEl);
            textareaEl.select();
            let success = document.execCommand('copy');
            document.body.removeChild(textareaEl);
            if (success) {
                this.$message.success('copy success')
            }
            return success;
        }
    }
}
</script>
<style lang="scss" scoped>
.my-friend-view {
    .cur-pint {
        cursor: pointer;
    }
    // .weight-blod {
    //     font-weight: 900;
    //     @media screen and (min-width: 751px) {
    //         font-size: 28px;
    //     }
    //     @media screen and (max-width: 750px) {
    //         font-size: 18px;
    //     }
    // }
    .title-p {
        display: flex;
        @media screen and (min-width: 751px) {
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 20px;
        }
        @media screen and (max-width: 750px) {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 10px;
        }
        .weight-blod {
            min-width: 6rem;
        }
        .ps {
            font-size: 12px;
            color: #0395f3;
            margin-left: auto;
        }
    }
    .hr {
        height: 4px;
        border-radius: 10px;
        margin-bottom: 10px;
        @media screen and (min-width: 751px) {
            display: none;
        }
    }

    .grid-cards {
        display: grid;
        grid-column-gap: 20px;
        // margin-bottom: 45px;
        @media screen and (min-width: 751px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 750px) {
            grid-template-columns: 1fr;
            grid-gap: 10px;
        }
        .dragon-link-card {
            width: 100%;
            border-radius: 18px;
            display: grid;
            place-items: center;
            @media screen and (min-width: 751px) {
                height: 260px;
            }
            @media screen and (max-width: 750px) {
                height: 130px;
            }
            .lnvitation-button {
                position: absolute;
                left: 0;
                text-align: center;
                border-radius: 0 10px 10px 0;
                cursor: pointer;
                @media screen and (min-width: 751px) {
                    top: 40px;
                    width: 200px;
                    height: 48px;
                    line-height: 48px;
                }
                @media screen and (max-width: 750px) {
                    top: 20px;
                    width: 100px;
                    height: 24px;
                    line-height: 24px;
                    font-size: 12px;
                }
            }
            &.lnvitation-link {
                .lnvitation-button {
                    box-shadow: 0 0 10px 0 #7d37d6, inset -1px 0 2px 0 #bba6d8;
                    background-color: #7d37d6;
                }
                &::before {
                    background-image: url("~@/assets/invitation-reward/lnvitation-link.png");
                }
            }
            &.lnvitation-code {
                .lnvitation-button {
                    box-shadow: 0 0 10px 0 #33cfe0, inset -1px 0 2px 0 #97d0d6;
                    background-color: #33cfe0;
                }
                &::before {
                    background-image: url("~@/assets/invitation-reward/lnvitation-code.png");
                }
            }
            .link {
                position: relative;
                display: inline-block;
                @media screen and (min-width: 751px) {
                    font-size: 28px;
                }
                @media screen and (max-width: 750px) {
                    font-size: 14px;
                }
                // max-width: 80%;
                p {
                    @media screen and (min-width: 751px) {
                        max-width: 500px;
                    }
                    @media screen and (max-width: 750px) {
                        max-width: 180px;
                    }
                }
                .cur-pint {
                    position: absolute;
                    @media screen and (min-width: 751px) {
                        right: -60px;
                        top: -10px;
                        width: 60px;
                    }
                    @media screen and (max-width: 750px) {
                        right: -30px;
                        top: -5px;
                        width: 30px;
                    }
                }
            }
        }
    }
    // .friend-length {
    //     padding: 20px 0;
    //     font-size: 28px;
    // }
    .table-data-list {
        li {
            display: grid;
            align-items: center;
            overflow: hidden;
            @media screen and (min-width: 751px) {
                border-radius: 20px;
                height: 215px;
                padding: 20px 70px;
                grid-template-columns: 150px 1fr;
            }
            @media screen and (max-width: 750px) {
                border-radius: 10px;
                height: 105px;
                padding: 20px 10px;
                display: flex;
                justify-content: space-around;
            }
            &:not(:last-child) {
                margin-bottom: 20px;
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
                    width: 100%;
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
                img {
                    margin-left: 30px;
                }
                @media screen and (min-width: 751px) {
                    padding-left: 65px;
                    span:first-child {
                        padding-right: 30px;
                    }
                }
                @media screen and (max-width: 750px) {
                    padding-left: 12px;
                    font-size: 12px;
                    align-items: center;
                    span {
                        display: block;
                        text-align: center;
                        max-width: 160px;
                        word-wrap: break-word;
                    }
                    img {
                        margin-left: 15px;
                        width: 30px;
                        height: 30px;
                        // position: absolute;
                    }
                }
            }
        }
    }
}
</style>