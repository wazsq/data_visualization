import Vue from 'vue'
import Router from 'vue-router'

// import store from './../store';
// import shopDataHandler from './../assets/js/ShopDataHandler';

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: '登录',
        component: () => import('@/view/Login')
    }, {
        path: '/dashboard',
        name: '控制台',
        component: () => import('@/view/Menu'),
        children: [
            {
                path: 'season',
                name: '时序特征',
                component: () => import('@/view/ConsumptionTendenciesBySeason')
            }, {
                path: 'amount',
                name: '本地店铺',
                component: () => import('@/view/ShopAmountByCategory')
            }, {
                path: 'rose',
                name: '玫瑰图',
                component: () => import('@/view/RoseChart')
            }
        ]
    }
    ]
});
router.beforeEach((to, from, next) => {
    // if(!store.getters.hasShopCategory){
    //     store.commit('setShopCategory', shopDataHandler.getShopCategory());
    // }
    // if(!store.getters.hasShopByCategory){
    //     store.commit('setShopByCategory', shopDataHandler.getShopByCategory());
    // }
    next();
});

export default router;
