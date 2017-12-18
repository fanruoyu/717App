import Vue from 'vue';
import _ from 'lodash'
import './popup.css'
let popup = {
    install(Vue){
        let that = this;
        Object.defineProperty(Vue.prototype,'$message',{
            value:function(msg){
                console.log(msg)
                that.init(msg)
            }
        })
    },
    init(msg){
        let body = document.body;
        if(body.querySelector('.popup')){
            return; 
        }
        let el = this.createElement('div',{class:"popup"},[msg]);
        body.appendChild(el);
        el.addEventListener('webkitAnimationEnd',function(){
            body.removeChild(el);
        })
    },
    createElement(dom,props={},contents){
        if(!_.isString(dom)){
            console.error('first argument must be string');
            return; 
        }
        let el = document.createElement(dom);
        if(!_.isObject(props)){
            console.error('second argument must be Object');
            return; 
        }
        for(let i in props){
            el.setAttribute(i,props[i])
        };
        if(!_.isArray(contents)){
            console.error('last argument must be array');
            return; 
        }
        if(contents && contents.length>0){
            contents.forEach(item=>{
                if(_.isElement(item)){
                    el.appendChild(item)
                }else if(_.isString(item)){
                    el.innerText = item
                }else{
                    console.warn('children must be string or dom node')
                }
            })
        }
        return el;
    }
}
export default popup

