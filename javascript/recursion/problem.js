/**
 * Created by thanos on 4/12/16.
 */
/*
 学习 递归
 递归是非常适合于某些类型的任务的技术。
 在第一课中，我们将着眼于解决需要阵列，而不使用递归扁平化的问题。
 显示非递归解决方案的缺点首先会帮助你理解为什么它是如此宝贵，
 为什么有时它是很多问题的唯一解决方案。
  */
var input = ["dist"];

var config = {
    "dist": ["build", "deploy"],
    "build": ["js", "css", "version-env", "gulp"],
    "js": ["lint", "uglify"],
    "css": ["sass", "css-min"]
};

var tasks = [];

/*
 如果想要 input 数组含有的 "dist" 元素,在config中的属性含有的
 数组"build, deploy", 接着寻找build在config中的属性......
 这样代码逻辑会陷入无止境的深层循环
  */

input.forEach(task => {
    if (config[task]) {
        config[task].forEach(task => {
            if (config[task]) {
                config[task].forEach(task => {
                    if (config[task]) {
                        config[task].forEach(task => {
                            tasks.push(task);
                        })
                    } else {
                        tasks.push(task);
                    }
                })
            } else {
                tasks.push(task);
            }
        })
    } else {
        tasks.push(task);
    }
});

console.log(tasks);

