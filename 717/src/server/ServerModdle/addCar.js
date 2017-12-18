const fs = require('fs')
module.exports = (req, res) => {
    let addCar = JSON.parse(fs.readFileSync('./data_table/addCar_list.json'));
    let params = req.body
    let num = 1;
    let flag = true;
    addCar.list.forEach(item => {
        if (item.id == params.id) {
            flag = false
            item.count ++
        }
    })
    if (flag) {
        params.count = 1;
        addCar.list.push(params)
    }
    fs.writeFileSync('./data_table/addCar_list.json', JSON.stringify(addCar))
    // console.log(addCar.list)
    res.end(JSON.stringify({code: 1, list: addCar.list}))
}