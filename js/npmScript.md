# npm script 脚本
## 一. 脚本原理
```js
{
    "scripts":{
        "build":"node build.js"
    }
}
```
当执行 scripts 中的命令时相当于执行 `node build.js` 命令 <br>

查看当前 npm 脚本命令 可执行 `npm run` <br>

当前目录的 `node_modules/.bin` 子目录里面的所有脚本，都可以直接用脚本名调用

## 二. 通配符
```js
"lint":"jshint *.js"
"lint":"jshint **/*.js"
```
上面代码中，`*`表示任意文件名，`**`表示任意一层子目录。
如果要将通配符传入原始命令，防止被shell转义，要将星号转义。
```js
"test":"tap test/\*.js"
```

## 三. 传参
向 npm 脚本传入参数，要使用 `--` 标明
```js
"lint":"jslint **.js"
```
向上面的 `npm run lint` 命令传入参数，必须写成下面这样。

```js
$ npm run lint -- --reporter checkstyle > checkstyle.xml
```
也可以在 `package.json` 里面再封装一个命令。
```js
"lint":"jshint **.js",
"lint:checkstyle":"npm run lint -- --reporter checkstyle > checkstyle.xml"
```
## 四. 执行顺序
如果 npm 脚本里面需要执行多个任务，那么需要明确它们的执行的顺序  
如果是并行执行（即同时平行执行），可以使用`&`符号
```js
$ npm run script1.js & npm run script2.js
```
如果是

