/**
 * Created by thanos on 4/12/16.
 */
/*
 Refactoring to a Pure Function 重构一个纯函数
 我们以前的解决方案中使用的forEach和可以从我们的函数内部发生突变
 一个全局数组。我们可以改善这里并创建一个功能，就是通过替换我们的
 forEach循环,reduce;使得容易维护和测试。通过移除全局数组而是作出
 getTasks返回一个值直接我们最终有一个纯函数。
 */
var input = ["dist"];

var config = {
    "dist": ["build", "deploy"],
    "build": ["js", "css", "version-env", "gulp"],
    "js": ["lint", "uglify"],
    "css": ["sass", "css-min"]
};

var tasks = getTasks(config, input, []);
function getTasks (config, input, initial) {
    return input.reduce((prev, next) => {
        if (config[next]) {
            return getTasks(config, config[next], prev);
        } else {
            return prev.concat(next);
        }
    }, initial)
}

console.log(tasks);