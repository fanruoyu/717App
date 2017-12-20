const fs = require('fs')
module.exports = (req, res) => {
    const dataList = JSON.parse(fs.readFileSync('./data_table/kinds_list.json'))
    const params = req.body;
    let list = []
    dataList.forEach(item => {
        if (item.cate_id == params.cate_id) {
            list = item.list
        }
    })
    res.end(JSON.stringify({msg: 'success', list: list}))
}