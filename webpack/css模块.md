<font size=5>

```js
yarn add css-loader style-loader less less-loader -D
// 如果是sass 
node-sass sass-loader
```

```js
module.exports = {
    module:{// 模块
        // loader
        rules:[// 规则 css-loader 解读 @import这种语法
            // style-loader 把css 插入到head标签中
            // loader 的特点 希望单一
            // loader 的用法 字符串只用一个loader
            // 多个loader 需要 []
            // loader 的顺序 默认是从右往左执行
            // loader 可以写成对象方式
            {
                // 可处理less文件
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader',
                        options:{
                            insertAt:'top'//将style标签插到顶部
                        }
                    },
                    'css-laoder'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'css-loader',
                    'less-laoder'
                ]
            }
        ]
    }
}