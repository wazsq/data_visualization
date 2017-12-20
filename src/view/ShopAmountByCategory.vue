<!--
    @author： sce
    @date：17-12-14
    @desc：本地店铺数量汇总
-->

<template>
    <div id="amountByCategory">
        <IEcharts
            :option="option"
            :loading="loading"
            :resizable="true"
            @ready="onReady"
            @resize="onResize"
            @click="onClick"
        />
    </div>
</template>

<script>
    import IEcharts from 'vue-echarts-v3/src/full.js'
    import shopDataHandler from './../assets/js/ShopDataHandler';

    export default {
        name: 'amountByCategory',
        components: {
            IEcharts
        },
        data() {
            return {
                shopCount: [],
                loading: true,
                option: {
                    title: {
                        text: '店铺种类统计'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: []
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [{
                        name: '店铺数量',
                        type: 'bar',
                        barWidth: '60%',
                        data: [],
                        label: {
                            normal: {
                                show: true,
                                position: 'inside'
                            }
                        },
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'}
                            ]
                        }
                    }]
                }
            }
        },
        created() {


        },
        mounted() {
            this.setOption();
            this.option.series[0].data = this.shopCount;
            this.option.xAxis[0].data = this.$store.getters.shopCategory;
            this.loading = false;
        },
        methods: {
            setOption() {
                if (!this.$store.getters.hasShopCategory) {
                    this.$store.commit('setShopCategory', shopDataHandler.getShopCategory());
                }
                if (!this.$store.getters.hasShopByCategory) {
                    this.$store.commit('setShopByCategory', shopDataHandler.getShopByCategory());
                }
                const shopByCategory = this.$store.getters.shopByCategory;
                const shopCategory = this.$store.getters.shopCategory;
                for (let i = 0; i < shopCategory.length; i++) {
                    this.shopCount.push(shopByCategory[shopCategory[i]].shopList.length);
                }
            },
            onReady(ins) {

            },
            onResize(width, height) {
            },
            onClick(event, instance, echarts) {
            }
        }
    }
</script>

<style scoped>
    #amountByCategory {
        padding: 10px;
        height: 90vh;
        /*width:85vw;*/
    }
</style>
