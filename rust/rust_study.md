## match 控制流
#### _ 通配符：匹配所有值

 
## if let 间接控制流
#### 注释：可理解为 match 控制流的语法糖，简洁的同时失去了 match 的穷尽性检查

## 包，Creates,模块，路径
如果模块的有结构体中包含私有字段，则必须有一个公共关联函数来构造该结构体，不然无法创建该结构体的实例
```rust
    mod back_of_house {
        pub struct Breakfast {
            pub toast: String,
            seasonal_fruit: String,
        }
        
        impl Breakfast {
            pub fn summber(toast: &str)-> Breakfast {
                Breakfast {
                    toast: String::from(toast),
                    seasonal_fruit: String::from("peaches")
                }
            }
        }
    }
    
    pub fn eat_at_restaurant() {
        let vmut meal = back_of_house::Breakfast::summer("Rye");
        meal.toast = String::from("Wheat");
        println!("I'd like {} toast please", meal.toast);
    }
```

如果将枚举设置为公有，则它的所有成员都将变为公有

## 使用 `use` 关键词将名称引入作用域
```rust

```