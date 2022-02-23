<template>
    <showOptions class="i18n-change">
        <template v-slot="{ open }">
            <div class="default">
                <img src="@/assets/head-nav/i18n-icon.png" class="change-icon" @click="open" />
            </div>
        </template>
        <template v-slot:list>
            <ul class="select-option theme-border-select">
                <li
                    v-for="(item, index) of i18nTypes"
                    :key="index"
                    @click="select(index)"
                >{{ item }}</li>
            </ul>
        </template>
    </showOptions>
</template>
<script>
import showOptions from "./showOptions.vue";
import { mapActions } from "vuex"
export default {
    data: () => ({
        i18nTypes: {
            en: "English",
            zh: "简体中文",
        },
    }),
    components: {
        showOptions,
    },
    methods: {
        ...mapActions({ 'setI18nType': 'setI18nType' }),
        select(item) {
            this.setI18nType(item)
            this.$i18n.locale = item;
        },
    },
};
</script>
<style lang="scss" scoped>
.i18n-change {
    position: relative;
    .default {
        display: grid;
        place-items: center;
        width: 100px;
        height: 100px;
    }
    .change-icon {
        cursor: pointer;
    }
    .select-option {
        width: 100%;
        z-index: 1;
        position: absolute;
        top: 100%;
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


<!--
<template>
    <div class="i18n-change" @mouseleave="mouseleaveToClose" @mouseenter="mouseeventToClearTimer">
        <img
            src="@/assets/head-nav/i18n-icon.png"
            class="change-icon"
            @click="openSelectOptions"
        />
        <transition name="slide-fade">
            <ul class="select-option theme-border-select" v-show="show">
                <li v-for="(item, index) of i18nTypes" :key="index" @click="select(index)">{{ item }}</li>
            </ul>
        </transition>
    </div>
</template>
<script>
import { mapActions } from "vuex"
export default {
    data: () => ({
        i18nTypes: {
            en: "English",
            zh: "简体中文",
        },
        show: false,
        timer: "",
    }),
    methods: {
        ...mapActions({'setI18nType':'setI18nType'}),
        select(item) {
            this.setI18nType(item)
            this.$i18n.locale = item;
        },
        openSelectOptions() {
            this.show = true;
        },
        closeSelectOptions() {
            this.show = false;
        },
        mouseleaveToClose() {
            console.log("mouseleaveToClose");
            if(!this.show) return;
            this.timer = setTimeout(() => {
                this.closeSelectOptions();
            }, 1000);
        },
        mouseeventToClearTimer() {
            console.log("mouseeventToClearTimer");
            if(this.timer&&this.show) {
                clearTimeout(this.timer);
                this.openSelectOptions()
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.i18n-change {
    width: 100px;
    height: 100px;
    display: grid;
    place-items: center;
    position: relative;
    .change-icon {
        cursor: pointer;
    }
    .select-option {
        width: 100%;
        z-index: 1;
        position: absolute;
        top: 100%;
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
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>

-->