const fs = require('fs')
module.exports = (req, res) => {
    let user_list = JSON.parse(fs.readFileSync('./data_table/user_list.json'));
    let params = req.body;
    if (!user_list[params.tel]) {
        user_list[params.tel] = {
            pwd:params.pwd,
            list: []
        };
        fs.writeFileSync('./data_table/user_list.json', JSON.stringify(user_list))
        res.end(JSON.stringify({code: 1, msg: '注册成功'}));
        return;
    } else {
        res.end(JSON.stringify({code: 0, msg: '注册失败，用户已存在'}));
    }
}