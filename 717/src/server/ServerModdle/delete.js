const fs = require('fs')
module.exports = (req, res) => {
    let address_list = JSON.parse(fs.readFileSync('./data_table/my_address.json'));
    let params = req.body;
    address_list.list.forEach((item, index) => {
        if (item.id == params.id) {
            address_list.list.splice(index)
        }
    })
    fs.writeFileSync('./data_table/my_address.json', JSON.stringify(address_list))
    res.end(JSON.stringify({msg:'success', address: address_list}))
}