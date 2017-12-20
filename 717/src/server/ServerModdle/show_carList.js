const fs = require('fs')
const jwt = require('jsonwebtoken');
module.exports = (req, res) => {
    jwt.verify(req.headers.authorization, '1508', function(err, decoded) {
        if (err) {
            let addCar = JSON.parse(fs.readFileSync('./data_table/addCar_list.json'));
            res.end(JSON.stringify({code: 1, list: addCar.list}))    
        } else {
            let user_list = JSON.parse(fs.readFileSync('./data_table/user_list.json'));
            res.end(JSON.stringify({code: 1, list: user_list[decoded.data].list})) 
        }
    })
}