<template>
    <div class="show-options" @mouseleave="mouseleaveToClose" @mouseenter="mouseeventToClearTimer">
        <slot name="default" :open="openSelectOptions"></slot>
        <!-- <transition name="slide-fade"> -->
            <div v-show="show" class="list">
                <slot name="list"></slot>
            </div>
        <!-- </transition> -->
    </div>
</template>
<script>
export default {
    data: () => ({
        show: false,
        timer: "",
    }),
    methods: {
        openSelectOptions() {
            this.show = true;
        },
        closeSelectOptions() {
            this.show = false;
        },
        mouseleaveToClose() {
            // console.log("mouseleaveToClose");
            if (!this.show) return;
            this.timer = setTimeout(() => {
                this.closeSelectOptions();
            }, 1000);
        },
        mouseeventToClearTimer() {
            // console.log("mouseeventToClearTimer");
            if (this.timer && this.show) {
                clearTimeout(this.timer);
                this.openSelectOptions()
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}

.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>
