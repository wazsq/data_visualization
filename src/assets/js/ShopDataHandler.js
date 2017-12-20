/**
 * @author： sce
 * @date：17-12-20
 * 处理店铺数据的工具类
 */

const {RECORDS : shopData} = require('./../../data/item.json');

class ShopDataHandler {
    constructor(){
        this.category = [];
    }
    /**
     * 获取所有店铺的类别
     * @returns {any[]}
     */
    getShopCategory(){
        const set = new Set();
        shopData.forEach((item) => {
            set.add(item.item_info.split(' | ')[0]);
        });
        return Array.from(set);
    }
    getShopByCategory(){
        let result = {};
        for(let i = 0; i < shopData.length; i++){
            result[shopData[i].item_info.split(' | ')[0]] = result[shopData[i].item_info.split(' | ')[0]] || {};
            let tmp = result[shopData[i].item_info.split(' | ')[0]];
            tmp.shopList = tmp.shopList || [];
            tmp.shopIdList = tmp.shopIdList || [];
            tmp.shopIdList.push(shopData[i].item_id);
            tmp.shopList.push(shopData[i]);
        }
        return result;
    }
}

const shopDataHandler = new ShopDataHandler();
export default shopDataHandler;
