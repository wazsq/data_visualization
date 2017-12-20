<template>
    <div id="menu">
        <el-row>
            <el-col :span="2">
                <el-menu class="navbar" :router="true" :default-active="onRoutes"
                         background-color="#545c64" text-color="#fff"
                         active-text-color="#ffd04b">
                    <el-menu-item index="/dashboard/amount">
                        <i class="el-icon-menu"></i>
                        <span slot="title">分类统计</span>
                    </el-menu-item>
                    <el-menu-item index="/dashboard/rose">
                        <i class="el-icon-setting"></i>
                        <span slot="title">店铺汇总</span>
                    </el-menu-item>
                    <el-menu-item index="/dashboard/season">
                        <i class="el-icon-setting"></i>
                        <span slot="title">时序统计</span>
                    </el-menu-item>

                </el-menu>
            </el-col>
            <el-col :span="22">
                    <router-view/>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        },
        computed: {
            onRoutes(){
                return this.$route.path
            }
        }
    }
</script>

<style scoped>

    * {
        margin: 0;
        padding: 0;
    }

    .navbar {
        height: 100vh;
    }
</style>

