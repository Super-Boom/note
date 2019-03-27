# vue源码学习
> 从`package.json`文件说起
```js
"dev": "rollup -w -c scripts/config.js --environment TARGET:web-full-dev",
```
>>`scripts/config.js`文件
```js
'web-full-dev':{
    entry: resolve('web/entry-runtime-with-compiler.js'),
    dest: resolve('dist/vue.js'),
    format: 'umd',
    env: 'development',
    alias: { he: './entity-decoder' },
    banner
}
```
>> 此处的web是一个别名，相关配置在 `scripts/alias.js` 中
```js
const path = require('path');
const resolve = p=>path.resolve(__dirname,'../',p);
module.exports = {
    vue: resolve('src/platforms/web/entry-runtime-with-compiler'),
    compiler: resolve('src/compiler'),
    core: resolve('src/core'),
    shared: resolve('src/shared'),
    web: resolve('src/platforms/web'),
    weex: resolve('src/platforms/weex'),
    server: resolve('src/server'),
    entries: resolve('src/entries'),
    sfc: resolve('src/sfc')
}
```
>>> 在 `src/platforms/web/entry-runtime-with-compiler.js` 中
```js
import Vue from './runtime/index'
```
>>>> `runtime/index.js` 中
```js
import Vue from 'core/index'
```
>>>>> 在 `src/core/index.js` 中
```js
import Vue from './instance/index'
```
>>>>>> 在 `instance/index.js` 中  
引入了五个方法
```js
import {initMixin} from './init'
import {stateMixin} from './state'
import {renderMixin} from './render'

```

