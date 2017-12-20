const fs = require('fs');
const jwt = require('jsonwebtoken');
module.exports = (req, res) => {
    let user_list = JSON.parse(fs.readFileSync('./data_table/user_list.json'));
    let params = req.body;
    if (user_list[params.tel] && params.pwd == user_list[params.tel].pwd) {
        var older_token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: params.tel
          }, '1508');
        res.end(JSON.stringify({msg:'success', token: older_token}))
    } else {
        res.end('error')
    }
}