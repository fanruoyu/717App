const fs = require('fs')
module.exports = (req, res) => {
    let addCar = JSON.parse(fs.readFileSync('./data_table/addCar_list.json'));
    res.end(JSON.stringify({code: 1, list: addCar.list}))    
}