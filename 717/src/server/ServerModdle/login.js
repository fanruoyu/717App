const fs = require('fs');
const jwt = require('jsonwebtoken');
module.exports = (req, res) => {
    // console.log(req.headers.authorization)
    let user_list = JSON.parse(fs.readFileSync('./data_table/user_list.json'));
    let params = req.body;
    let code = 0;
    user_list.forEach((item, index) => {
        if (item.tel == params.tel && item.pwd == params.pwd) {
            code = 1
        }
    })
    if (code) {
        var older_token = jwt.sign({ foo: params.tel, iat: Math.floor(Date.now() / 1000) - 30 }, '1508');
        res.end(JSON.stringify({msg: 'success', token: older_token}))
    } else {
        res.end('error')
    }
    
}