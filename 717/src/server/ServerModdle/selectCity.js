const fs = require('fs')
module.exports = (req, res) => {
    let city_list  = JSON.parse(fs.readFileSync('./data_table/city_list.json'))
    res.end(JSON.stringify({msg: 'success', code:1, list: city_list}))
}