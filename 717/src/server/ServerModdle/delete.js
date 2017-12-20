const fs = require('fs');
const jwt = require('jsonwebtoken');
module.exports = (req, res) => {
    let params = req.body;
    jwt.verify(req.headers.authorization, '1508', function(err, decoded) {
        if (err) {
            let address_list = JSON.parse(fs.readFileSync('./data_table/my_address.json'));
            address_list.list.forEach((item, index) => {
                if (item.id == params.id) {
                    address_list.list.splice(index, 1)
                }
            })
            fs.writeFileSync('./data_table/my_address.json', JSON.stringify(address_list))
            res.end(JSON.stringify({msg:'success', address: address_list}))
        } else {
            let user_address = JSON.parse(fs.readFileSync('./data_table/user_list.json'));
            user_address[decoded.data].addArr.forEach((item, index) => {
                if (item.id == params.id) {
                    user_address[decoded.data].addArr.splice(index, 1)
                }
            })
            fs.writeFileSync('./data_table/user_list.json', JSON.stringify(user_address))
            res.end(JSON.stringify({msg: 'success', address: user_address[decoded.data].addArr})) 
        }
    })
}