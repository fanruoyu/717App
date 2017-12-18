const fs = require('fs')
module.exports = (req, res) => {
    const swiper_list = JSON.parse(fs.readFileSync('./data_table/swiperList.json'))
    res.end(JSON.stringify({msg: 'success', list: swiper_list.list}))
}