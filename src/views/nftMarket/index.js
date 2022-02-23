export default {
    data: () => ({
        tabs: [
            {
                icon: require('@/assets/tradingMarket/tip-1.png'),
                activeIcon: require('@/assets/tradingMarket/tip-1-active.png'),
                title: 'MARKET',
                path: '/nftMarket/tradingMarket'
            },
            {
                icon: require('@/assets/tradingMarket/tip-2.png'),
                activeIcon: require('@/assets/tradingMarket/tip-2-active.png'),
                title: 'AUCTION',
                path: '/nftMarket/auction'

            },
            {
                icon: require('@/assets/tradingMarket/tip-3.png'),
                activeIcon: require('@/assets/tradingMarket/tip-3-active.png'),
                title: 'LEASE',
                path: '/nftMarket/lease'
            },
            {
                icon: require('@/assets/tradingMarket/tip-4.png'),
                activeIcon: require('@/assets/tradingMarket/tip-4-active.png'),
                title: 'PLEDGE',
                path: '/nftMarket/pledge'
            },
        ]
    }),
    components: {
    },
    computed: {
        activeItem() {
            let currentPath = this.$route.path;
            let currentIndex = 0;
            this.tabs.map((item, index) => {
                if (item.path == currentPath) currentIndex = index;
            })
            return currentIndex;
        }
    }
};