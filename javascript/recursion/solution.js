/**
 * Created by thanos on 4/12/16.
 */
/*
 在这一课中，我们设法消除所有的嵌套循环，帮助我们实现了第一课的
 部分解决方案。我们创建了一个 getTasks 函数，可以只在一定条件下，
 调用自己。这是递归的基础，往往导致更清洁，更短的代码，
 可以处理更多的动态输入。
 */
var input = ["dist"];

var config = {
    "dist": ["build", "deploy"],
    "build": ["js", "css", "version-env", "gulp"],
    "js": ["lint", "uglify"],
    "css": ["sass", "css-min"]
};

var tasks = [];

function getTasks (input) {
    input.forEach(task => {
        if (config[task]) {
            getTasks(config[task]);
        } else {
            tasks.push(task);
        }
    })
}
getTasks(input);
console.log(tasks);