<template>
    <el-empty :image-size="200"  :description="$t('empty')"></el-empty>
    <!-- <div class="assets-list-module">
        <img class="decorate-dragon" src="@/assets/myAssets/dragon-posi-abs.png" alt />
        <div class="head-grid">
            <button
                class="batch-transfer-button"
                :class="{ 'active': selectDragonValue == item.id }"
                v-for="item in selectDragonList"
                :key="item.id"
                @click="selectDragonType(item)"
            >{{ item.value }}</button>
            <ThemeSelect :value="selectTypeValue" :list="selectList" @emitValue="emitValue"></ThemeSelect>
        </div>
        <ul class="dragon-table-data-list">
            <li v-for="item in 10" :key="item" @click="toDetails(item)">
                <dragonCard
                    dragonId="123"
                    dragonName="dragon"
                    :cardType="4"
                    :stars="0"
                    :skills="defineSkills"
                    :dragonImage="require('@/assets/dragon/Dragon_ziran_006.png')"
                    dragonHatch="123"
                    :nft="81.9999"
                    :doller="121.88888"
                >
                </dragonCard>
            </li>
        </ul>
    </div> -->
</template>
<script src="./index.js" type="text/javascript" charset="utf-8"></script>
<style lang="scss" scoped>
@import "@/styles/theme.scss";
.el-empty {
    background-color: #292945;
}
.assets-list-module {
    position: relative;
    background-color: #292945;
    // min-height: 100vh;
    // margin-top: 20px;
    padding: 40px 76px 100px;
    .decorate-dragon {
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-150px, -100px);
    }
    .head-grid {
        height: 50px;
        display: flex;
        align-items: center;
        & > *:first-child {
            margin-left: auto;
        }
        .batch-transfer-button {
            padding: 12px 22px;
            margin-right: 20px;
            color: #fff;
            border-radius: 12px;
            background-color: #1f1d32;
            font-size: 14px;
            min-width: 110px;
            &.active {
                @include GradualBGColor;
            }
        }
    }
    .dragon-table-data-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, 150px);
            grid-column-gap: 40px;
            grid-row-gap: 20px;
            margin-top: 20px;
            margin: 20px auto 0;
            padding-left: 15px;
            // .dragon-card {
            //     .price-blockchain,
            //     .price-doller {
            //         color: #ffffff;
            //     }
            //     .price-blockchain {
            //         font-size: 14px;
            //     }
            //     .price-doller {
            //         font-size: 12px;
            //     }
            // }
        }
}
</style>