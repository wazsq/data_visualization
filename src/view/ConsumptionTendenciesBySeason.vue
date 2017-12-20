<!--
    @author： sce
    @date：17-12-14
    @desc：消费者的季节倾向
-->

<template>
    <div id="season">
        <IEcharts
            :option="option"
            :loading="false"
            :resizable="true"
        />
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import IEcharts from 'vue-echarts-v3/src/full.js'

    export default {
        name: 'season',
        components: {
            IEcharts
        },
        data() {
            return {
                option: {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.getMounthArr()
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        }
                    ]
                }
            }
        },
        methods: {},
        created() {
            this.option.legend.data = this.$store.getters.shopCategory;
        },
        computed: {
            // 使用对象展开运算符将 getter 混入 computed 对象中
            ...mapGetters([
                'commentData',
                'anotherGetter',
                // ...
            ])
        },
        mounted() {
            this.setOption();
        },
        methods: {
            setOption() {
                const filter = function (arr) {
                    for (let i = 0; i < arr.length; i++) {
                        if (!arr[i]) arr[i] = 0;
                    }
                    return arr;
                };
                const me = this;
                let result = [];
                for (let item in this.commentData) {
                    result.push({
                        name: item,
                        type: 'line',
                        stack: '总量',
                        data: filter(me.commentData[item])
                    });
                }
                this.option.series = result;
            },
            getMounthArr() {
                let result = [];
                for (let i = 1; i <= 12; i++) {
                    result[i - 1] = `${i}月`
                }
                ;
                return result;
            }
        }
    }
</script>

<style scoped>
    #season {
        height: 90vh;
    }
</style>
