const fs = require('fs');
module.exports = (req, res) => {
    const nav_list = JSON.parse(fs.readFileSync('./data_table/navList.json'))
    res.end(JSON.stringify({msg: 'Success', list: nav_list}))
}