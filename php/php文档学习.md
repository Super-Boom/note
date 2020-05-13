<font size=3> 

## 可变变量
```php
${$a}[1]和${$a[1]}的区别
```

---
## 常量
### 定义常量
```php
// define()方法：
define("CONSTANT", "Hello world.");
// const 在类之外定义常量
// 使用 const 定义常量，必须要出于顶端作用域，因为用此方法是在编译是定义的，这就意味着不能在函数内，循环内以及 if 语句之内
```

### 位运算符
位移在php中是数学运算，向任何方向移出去的位，都被丢弃，左移时右侧以 0 填充，符号位被移走，意味着正负号不被保留，右移时左侧以符号位填充，正负号保留。

1. &：按位与  
两个数相同的位不变，不同的取0
```php
$a = 1; // 0000 0001
$b = 2; // 0000 0010
$c = $a & $b; // 0000 0000
print_r($c); // 0
```

2. |：按位或
将两个数都为1的位设备1
```php
$a = 1;
$b = 2;
$c = $a | $b; // 0000 0011
print_r($c); // 3
```

3. ^: 按位异或
将两个数一个为1，另一个为0的设为1
```php
$a = 1;
$b = 2;
$c = $a ^ $b; // 0000 0011
print_r($c); //3
```
4. ~：按位取反
5. 左移运算：<< 
```php
// 将 $a 中的位左移 $b 次
$a << $b 
```
6. 右移运算: >>
```php
// 将 $a 中的单位右移 $b 次
$a >> $b
```

### 比较多种类型
 运算数1 | 运算数2 | 结果 
 - | - | - 
null 或 string | string | 将 null 转换成 "",进行数字或词汇比较



### 数组运算符
|例子|名称|结果
-|-|-|-
$a + $b|联合| 

### include 和 require 基本相同，只是处理错误的方式不同
require 会终止程序运行
include 则只会发出一个警告


### include
1. 如果定义了路径，不管是绝对路径还是当前目录的相对路径，`include_path` 都会忽略
2. 当一个文件被包含时，其中所有代码都继承 `include` 所在行的变量范围，调用文件再该行处的可用的任何变量在被调用文件中都是可用的。不过所有在被包含文件中被定义的函数都具有全局作用域。
3. 如果 `include` 在调用文件的函数里，应注意函数的变量范围，被调用文件中的所有代码都表现的如同函数内部定义的一样。所以他将遵循该函数的变量范围，此规则的一个例外数魔术变量，它们在被包含之前，就被解析器处理。

## 函数
### 用户自定义函数
### 函数的参数
#### 类型声明

别名作为标量类型不被支持 <br> 
例如：布尔值作为参数或返回类型将需要一个作为类或接口布尔值的实例
而不是布尔类型的实例的参数或返回值

1. Class / interface : 类或者接口名称
```php
// 基本类型声明
class C{};
class D extends C{};
class E{};
function f(C $c){
  echo get_class($c)."\n";
}
f(new C);
f(new D);
f(new E);

// 基本接口类型声明
interface I {
  public function f();
}

class C implements I {
  public function f(){};
};
class E {};
function f(I $i){
  echo get_class($i)."\n";
};
f(new C);
f(new E);

// 可空类型声明
class C{};
function f(C $c=null){
  var_dump($c);
};
f(new C);
f(null);
```
   
2. self
3. array
4. callbale
5. bool
6. float
7. int
8. string

***非严格类型中，php将强迫默认类型转换成期望类型***

<font color=red> 严格类型适用于在 ***启用严格模式的文件内*** 的函数调用，一个没有启用严格模式的文件内调用了一个在启用严格模式的文件中定义的函数，那么将会遵循调用者的偏好(弱类型)，而这个值将会被转换。
</font>
### 可变数量参数
... 操作符
```php
function f(...$numbers){

};
f(1,2,3);
```

### 函数返回
1. 从函数返回一个引用，必须在函数声明和将返回值复制给一个变量时都使用 & 符号。
```php
function &f(){
  return $res;
};
$res = &f();
```

### 可变函数
```php
function foo(){

}
function bar(){

}
function echoit($string){
  echo $string;
}
$func = "foo";
$func();

$func = "bar";
$func();

$func = "echoit";
$func("test");
```
### 静态方法调用
```php
class Foo {
  static function bar(){
    var_dump(1);
  }
  function baz(){
    var_dump(2);
  }
}
$func = ["Foo","bar"];
$func();
$func = [new Foo,"baz"];
$func();
// 报错
$func = ["Foo","baz"];
$func();
```
---
## 匿名函数
### 从父作用域继承变量
```php
$message = "a";
// 非继承匿名函数
$func = function(){
  var_dump($message);
}
echo $func(); // 报错,未定义

// 从父作用域继承
$func = function() use ($message){
  var_dump($message);
}
$func(); // a

// 继承函数变量的值来自函数定义时而不是调用时
$message = 'b';
echo $func(); // a

// 引用赋值
$message = 'c';

$example = function () use (&$message) {
    var_dump($message);
};
echo $example(); // c

$message = "d";
echo $example(); //d
```
#### 从父作用域继承变量和全局变量时不同的，全局变量存在一个全局的范围，无论当前执行的是哪个函数。而闭包的父作用域是定义该闭包的函数(不一定是调用它的函数)

### 闭包的父作用域是定义该闭包的函数

### 自动绑定 `$this`
```php
class Test{
  public function testing(){
    var_dump($this);
  }
}
$testing = new Test;
$testing->testing(); // object(Test)#1 (0) {}
```

### 匿名函数静态声明，防止当前类自动绑定它们
```php
class Test{
  $func =  static function(){
    var_dump($this);
  }
  $func();
}
new Test();
```

### 绑定对象到静态匿名函数
```php
$func = static function(){};
$func = $func->bindTo(new StdClass);
$func();
```
---
## 类与对象
<font color=#green>当一个方法在类内部调用时，`$this` 有一个可用的伪变量 `$this`,`$this`是一个主叫对象引用，（通常谁该方法所属的对象，但是如果从第二个对象静态调用，也可能是另一个对象）</font>

### 继承
1. 在 php 中一个类只能继承一个父类
2. 被继承的方法和属性可以通过用同样的名字重新声明被覆盖，但如果父类定义时使用了 `final` 则该方法不可被覆盖，可以通过 `parent::` 来访问被覆盖的方法或属性(访问的是父类的方法);

###  属性访问
1. 访问静态属性\
   `$this->property`
2. 访问静态属性
   `self::property`

### 类常量
1. 访问类常量
   `self::property`

### 类的自动加载
```php
// 自动加载类
spl_autoload_call(function ($class_name){
    require_once $class_name.".php";
});

$obj1 = new MyClass1();
$obj2 = new MyClass2();

// 自动加载接口
spl_autoload_register(function($name){
  var_dump($name);
});
class Test implements ITest{

}
```

### 构造函数和析构函数
1. 具有构造函数的类会在每次创建新对象时调用此方法
2. 如果子类中定义了构造函数，则不会隐式调用父类的构造函数。要执行父类构造函数，需要在子类的构造函数中调用 `parent::__construct()`。如果子类没有定义构造函数，则会如同一个普通的类方法一样从父类继承。

#### 析构函数
```php
class Test{
  function __destruct(){

  }
}
1. 析构函数会在到某个对象的所有引用都被删除或者当对象被显示销毁时执行。
2. 析构函数在脚本关闭时调用。
3. 试图在析构函数中抛出一个异常会导致致命错误。
```
### 访问控制(可见性)
1. public ：被定义为共有的类成员，在任何地方都可被调用
2. protected：被定义为受保护的类成员，可以被自身，子类，父类调用。
3. private：被定义为私有类，则只能被自身调用。
```php
class Test{
  public $public = "public";
  protected $protected = "protected";
  private $private = "private";
  function func(){
    echo $this->$public;
    echo $this->$protected;
    echo $this->$private;
  }
}
$obj = new Test();
echo $obj->$public; // 正常执行
echo $obj->$protected; //报错
echo $obj->$private; // 报错
$obj->func(); // "public","protected","private"

class Test2 extends Test{
  
}







