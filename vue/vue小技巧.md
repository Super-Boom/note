# vue源码中的小技巧
### 判断当前环境
1. 检测当前主环境是否为浏览器
```js
export const inBrowser = typeof window !== 'undefined'
```
2. 检测当前环境是否可以使用 `__proto__` 属性
```js
export const hasProto = '__proto__' in {}
```

