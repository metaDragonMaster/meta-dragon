<template>
    <showOptions class="link-wallet">
        <template v-slot="{ open }">
            <div class="cursor-button" @click="open">
                <p class="font-hide">{{ ethAddress }}</p>
                <img class="setting-image" src="@/assets/head-nav/setting-icon.png" alt />
            </div>
        </template>
        <template v-slot:list>
            <ul class="select-option theme-border-select">
                <li
                    v-for="(item) in options"
                    :key="item.path"
                    @click="select(item)"
                >{{ item.title }}</li>
            </ul>
        </template>
    </showOptions>
</template>
<script>
import showOptions from "./showOptions.vue";
export default {
    components: {
        showOptions,
    },
    props: {
        options: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        ethAddress() {
            return this.$store.getters.ethAddress || "Link Wallet";
        },
    },
    methods: {
        select(item) {
            this.$routerUtil.toPath(item.path)
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";

.link-wallet {
    height: 65px;
    width: 214px;
    border-radius: 12px;
    color: #ffffff;
    margin-right: 20px;
    margin-left: 40px;
    text-align: center;
    position: relative;
    @include GradualBGColor;
    @media screen and (max-width: 1344px) {
        height: 48px;
        line-height: 48px;
        width: 168px;
        margin-left: 20px;
    }
    .cursor-button {
        // line-height: 65px;
        cursor: pointer;
        padding: 0 10px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        &:hover .setting-image {
            animation: Rotate infinite 3s ease;
        }
        @keyframes Rotate {
            from {
                transform: rotateZ(0);
            }
            to {
                transform: rotateZ(360deg);
            }
        }
    }
    .select-option {
        width: 100%;
        z-index: -1;
        position: absolute;
        top: 100%;
        // top: calc(100% - 10px);
        padding-top: 20px;
        margin-top: -10px;
        li {
            width: 100%;
            padding: 8px 12px;
            font-size: 12px;
            cursor: pointer;
            &:hover {
                color: rgba(46, 151, 249, 1);
            }
        }
    }
}
</style>