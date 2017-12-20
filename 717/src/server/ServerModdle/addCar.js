const fs = require('fs');
const jwt = require('jsonwebtoken');
module.exports = (req, res) => {
    jwt.verify(req.headers.authorization, '1508', function(err, decoded) {
        let params = req.body
        if (err) {
            let addCar = JSON.parse(fs.readFileSync('./data_table/addCar_list.json'));
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
            res.end(JSON.stringify({code: 1, list: addCar.list}));
        } else {
            let user_list = JSON.parse(fs.readFileSync('./data_table/user_list.json'));
            let num = 1;
            let flag = true;
            user_list[decoded.data].list.forEach(item => {
                if (item.id == params.id) {
                    flag = false
                    item.count ++
                }
            })
            if (flag) {
                params.count = 1;
                user_list[decoded.data].list.push(params)
            }
            fs.writeFileSync('./data_table/user_list.json', JSON.stringify(user_list))
            res.end(JSON.stringify({code: 1, list: user_list[decoded.data].list}));
        }
    });
}