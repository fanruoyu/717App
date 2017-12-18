const getCookie = (target) => {
    let cookie = document.cookie;
    var arr, reg = new RegExp("(^| )" + target + "=([^;]*)(;|$)")
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}
const setCookie = (name, data) => {
    document.cookie = name + '=' + data
}
const  delCookie = (name) => {//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间   
    let date = new Date();   
    date.setTime(date.getTime() - 1);
    let cval = getCookie(name);
    if (cval != null)
    document.cookie = name + " = " + cval + ";expires = " + date.toGMTString();   
}
export { getCookie, setCookie, delCookie}