const fs = require('fs')
module.exports = (req, res) => {
    let params = req.body
    let my_address = JSON.parse(fs.readFileSync('./data_table/my_address.json'));
    let len = my_address.list.length;
        params.id = len;
        my_address.list.push(params);
        fs.writeFileSync('./data_table/my_address.json', JSON.stringify(my_address))
        console.log(my_address.list)
        res.end(JSON.stringify({msg: 'success', address: my_address}))
}