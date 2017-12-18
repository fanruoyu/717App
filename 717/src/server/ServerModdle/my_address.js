const fs = require('fs')
module.exports = (req, res) => {
    let params = req.body
    let my_address = JSON.parse(fs.readFileSync('./data_table/my_address.json'));
    let len = my_address.list.length;
    var id;
    if (len == 0) {
        params.id = 0
    } else {
        params.id = my_address.list[len - 1].id + 1
    }
        my_address.list.push(params);
        fs.writeFileSync('./data_table/my_address.json', JSON.stringify(my_address))
        console.log(my_address.list)
        res.end(JSON.stringify({msg: 'success', address: my_address}))
}