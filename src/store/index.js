import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
        state: {
            //店铺类别
            shopCategory: [],
            //按照店铺类别划分店铺信息
            shopByCategory: [],
            //是否取得划分好的店铺信息
            hasShopByCategory: false,
            //是否取得店铺类别
            hasShopCategory: false,
            commentData:[],
            hasCommentData: false
        },
        getters: {
            shopCategory: state => state.shopCategory,
            hasShopCategory: state => state.hasShopCategory,
            shopByCategory: state => state.shopByCategory,
            hasShopByCategory: state => state.hasShopByCategory,
            commentData: state => state.commentData,
            hasCommentData: state => state.hasCommentData
        },
        mutations: {
            setShopCategory(state, list) {
                state.shopCategory = list;
                state.hasShopCategory = true;
            }
            ,
            setShopByCategory(state, data) {
                state.hasShopByCategory = true;
                state.shopByCategory = data;
            },
            setCommentData(state,data){
                state.hasCommentData = true;
                state.commentData = data;
            }
        }

    })
;

export default store;
