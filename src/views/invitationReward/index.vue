<template>
    <div class="invitation-reward-view limit-max-width-witch-pc">
        <img class="title-image" src="@/assets/text-shadow/invitation-reward.png" alt />
        <ul class="nav-list">
            <li
                :class="{ 'theme-type': activeRoute(item.path) }"
                v-for="item in navList"
                :key="item.path"
                @click="$routerUtil.toPath(item.path)"
            >
                <p>{{ item.title }}</p>
            </li>
        </ul>
        <div class="content-view">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        navList: [
            {
                title: 'My Friend',
                path: "/invitationReward/myFrind",
            },
            {
                title: 'Friend Reward',
                path: "/invitationReward/frindReward",
            },
            {
                title: 'Lnvitation Reward',
                path: "/invitationReward/lnvitationReward",
            },
            {
                title: 'Cumulative People',
                path: "/invitationReward/cumulativePeople",
            },
        ]
    }),
    computed: {
        currentRoutePath() {
            return this.$store.getters.currentRoutePath;
        },
        activeRoute() {
            return (path) => this.currentRoutePath.indexOf(path) > -1;
        },
    },
}
</script>
<style lang="scss" scoped>
@import "@/styles/theme";

.invitation-reward-view {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    background-image: url("~@/assets/nft-market/bg.png");
    min-height: 100vh;
    padding-bottom: 100px;
    color: #ffffff;
    background-color: #181727;
    .title-image {
        display: block;
        width: fit-content;
        margin: 8px auto 46px;
        max-width: 100%;
    }
    .nav-list {
        display: flex;

        @media screen and (min-width: 751px) {
            margin-bottom: 20px;
            padding-left: 70px;
        }
        @media screen and (max-width: 750px) {
            // justify-content: space-between;
            flex-wrap: wrap;
            margin-bottom: 10px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 10px;
        }
        li {
            border-radius: 12px;
            display: grid;
            place-items: center;
            cursor: pointer;
            background-color: #363447;
            @media screen and (min-width: 751px) {
                margin-right: 32px;
                min-width: 160px;
                height: 50px;
                padding: 0 20px;
                font-size: 14px;
            }
            @media screen and (max-width: 750px) {
                width: 100%;
                padding: 10px 10px;
                font-size: 12px;
                &:not(:last-child) {
                    margin-right: 10px;
                }
            }
        }
    }
    .content-view {
        background-color: #292945;
        @media screen and (min-width: 751px) {
            padding: 30px 75px;
        }
        @media screen and (max-width: 750px) {
            padding: 20px;
        }
        ::v-deep .weight-blod {
            font-weight: 900;
            @media screen and (min-width: 751px) {
                font-size: 20px;
            }
            @media screen and (max-width: 750px) {
                font-size: 14px;
            }
        }
        ::v-deep .friend-length {
            @media screen and (min-width: 751px) {
                padding: 20px 0;
                font-size: 28px;
            }
            @media screen and (max-width: 750px) {
                padding: 10px 0;
                font-size: 14px;
            }
        }
    }
}
</style>