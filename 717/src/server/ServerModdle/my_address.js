const fs = require('fs');
const jwt = require('jsonwebtoken');
module.exports = (req, res) => {
    let params = req.body
    jwt.verify(req.headers.authorization, '1508', function(err, decoded) {
        if (err) {
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
            res.end(JSON.stringify({msg: 'success', address: my_address.list}))
        
        } else {
            let user_list = JSON.parse(fs.readFileSync('./data_table/user_list.json'));
            let len = user_list[decoded.data].addArr.length;
            var id;
            if (len == 0) {
                params.id = 0
            } else {
                params.id = user_list[decoded.data].addArr[len - 1].id + 1
            }
            user_list[decoded.data].addArr.push(params);
            fs.writeFileSync('./data_table/user_list.json', JSON.stringify(user_list))
            res.end(JSON.stringify({msg: 'success', address: user_list[decoded.data].addArr}))
        }
    })
}