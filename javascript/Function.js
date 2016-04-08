/**
 * Created by thanos on 4/8/16.
 */
// 函数作用域
// 下面的变量定义在全局作用(global scope)域中
var num1 = 20,
    num2 = 3,
    name = "Chamahk";

// 本函数定义在全局作用域
function multiply() {
    return num1 * num2;
}

multiply(); // Returns 60

// 嵌套函数的例子
function getScore () {
    var num1 = 2,
        num2 = 3;

    function add() {
        return name + " scored " + (num1 + num2);
    }

    return add();
}

getScore(); // Returns "Chamahk scored 5"
//--------------------------------------------------------
//闭包(Closures)
var pet = function(name) {          //外部函数定义了一个变量"name"
    var getName = function() {
        //内部函数可以访问 外部函数定义的"name"
        return name;
    };
    //返回这个内部函数，从而将其暴露在外部函数作用域
    return getName;
},
myPet = pet("Vivie");

myPet();                            // 返回结果 "Vivie"