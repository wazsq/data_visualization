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
                    title : {
                        text: '店铺信息汇总',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series : [
                        {
                            name: '店铺信息汇总',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                }
            }
        },
        created() {


        },
        mounted() {
            this.setOption();
            this.option.series[0].data = this.shopCount;
            this.option.legend.data = this.$store.getters.shopCategory;
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
                    this.shopCount.push({
                        value:shopByCategory[shopCategory[i]].shopList.length,
                        name:shopCategory[i]
                    });
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
