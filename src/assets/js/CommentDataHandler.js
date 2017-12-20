const {RECORDS: commentData} = require('./../../data/useritem');
const {RECORDS : shopData} = require('./../../data/item.json');

class CommentDataHandler {
    /**
     * 根据月份取出店铺的评论数量（即店铺的人流量）
     * @param category
     */
    getShopQuantityBySeason(dataList) {
        // console.log(dataList);
        var result = {};
        let tmp_date = '';
        for(let i =0 ;i < commentData.length; i ++){
            const tmp = shopData.find((item) => item.item_id === commentData[i].item_id);
            let _type = tmp.item_info.split(' | ')[0]
            result[_type] = result[_type] || [];
            let tmp_data = result[_type];

            let tmp_date = commentData[i].times.split('  ')[0].split('-');
            let _time = tmp_date.length === 3 ? parseInt(tmp_date[1]) : parseInt(tmp_date[0]);
            tmp_data[_time -1] = tmp_data[_time-1] || 1;
            tmp_data[_time -1]++;
        }
        return result;
    }

    /**
     * 构造月份数组
     * @returns {Array}
     */
    getMounthArr() {
        let result = [];
        for (let i = 1; i <= 12; i++) {
            result[i - 1] = `${i}月`
        }
        ;
        return result;
    }
}

function getMounth() {

}

const commentDataHandler = new CommentDataHandler();
export default commentDataHandler;
