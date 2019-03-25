# vue源码学习
## 1.  new Vue()做了什么
```js
function Vue(options){
    if(process.env.NODE_ENV !== 'production' && !(this instanceof Vue)){
        warn('Vue is a constructor and should be called with rhe `new` keyword')
    }
    this_init(options);
}
```
`this._init()` 方法
```js
Vue.prototype._init = function(option?:Object){
    const vm: Component = this
    // ...忽略，从45行看起
    if(process.env.NODE_ENV!=='production'){
        initProxy(vm)
    } else {
        vm._renderPRoxy = vm;
    }
}
```
