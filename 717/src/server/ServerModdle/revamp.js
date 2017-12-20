const fs = require('fs')
const jwt = require('jsonwebtoken');
module.exports = (req, res) => {
    let params = req.body
    jwt.verify(req.headers.authorization, '1508', function(err, decoded) {
        if (err) {
            let my_address = JSON.parse(fs.readFileSync('./data_table/my_address.json'));
            my_address.list.forEach((item, index) => {
                if (item.id == params.id) {
                    my_address.list[index] = params
                }
            })
            fs.writeFileSync('./data_table/my_address.json', JSON.stringify(my_address));
            res.end('success')
        } else {
            let user_address = JSON.parse(fs.readFileSync('./data_table/user_list.json'));
            user_address[decoded.data].addArr.forEach((item, index) => {
                if (item.id == params.id) {
                    user_address[decoded.data].addArr[index] = params
                }
            })
            fs.writeFileSync('./data_table/user_list.json', JSON.stringify(user_address));
            res.end('success') 
        }
    })
    
}