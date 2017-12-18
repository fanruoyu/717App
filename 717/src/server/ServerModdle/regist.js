const fs = require('fs')
module.exports = (req, res) => {
    let user_list = JSON.parse(fs.readFileSync('./data_table/user_list.json'));
    let params = req.body;
    let code = 1;
    let len = user_list.length;
    let id = user_list[len - 1].id
    user_list.forEach(item => {
        if (item.tel == params.tel) {
            code = 0
        }
    })
    if (code == 1) {
        user_list.push({id: ++id, tel: params.tel, pwd: params.pwd});
        fs.writeFileSync('./data_table/user_list.json', JSON.stringify(user_list))
        res.end(JSON.stringify({code: 1, msg: '注册成功', user_data: {tel: params.tel, pwd: params.pwd}}))
    } else {
        res.end(JSON.stringify({code: 0, msg: '该用户已存在'}))
    }
    
}