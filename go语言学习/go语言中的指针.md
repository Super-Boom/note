<font size=4>

## 指针
1. 一个 <font color=red>指针变量</font> 可以指向任何一个值的 **内存地址**

2. <br>
```go
// 定义一个变量
var str = "xzg"
// 定义一个指针:&符号获取指针地址
var strP *string = &str;
// * 符号获取指针地址的值
var value = *strP;
```
