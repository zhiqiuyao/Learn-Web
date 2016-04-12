/**
 * Created by thanos on 4/11/16.
 */
var data = [1, 2, 3];
var doubled = data.reduce(function (acc, value) {
    acc.push(value * 2);

    return acc;
}, []);

console.log("My doubled data:", doubled);
// 另一种方式
var doubledMapped = data.map(function (item) {
    return item * 2;
});
console.log("My doubledMappped:", doubledMapped);
//------------------------------------------------
var data2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var evens = data2.reduce(function (acc, value) {
    if (value % 2 === 0) {
        acc.push(value);
    }

    return acc;
}, []);
console.log("evens is", evens);

// 另一种筛选偶数的方式
var evensFiltered = data2.filter(function (item) {
    return  (item % 2 === 0);
});
console.log(evensFiltered);

// 筛选出偶数后*2
var filterMapped = data2.filter(function (value) {
    return value % 2 === 0;
}).map(function (value) {
    return value * 2;
});
console.log(filterMapped);

//计算数组bigData遍历时间, 比较filter,map 与 reduce 实现同样业务逻辑的性能
var bigData = [];
for (var i = 0; i < 1000000; i++) {
    bigData[i] = i;
}

console.time('bigData');
var filterMappedBigData = bigData.filter(function (value) {
    return value % 2 === 0;
}).map(function (value) {
    return value * 2;
});
console.timeEnd('bigData');

console.time('bigDataReduce');
var reducedBigData = bigData.reduce(function (acc, value) {
    if (value % 2 === 0) {
        acc.push( value * 2);
    }
    return acc;
}, []);
console.timeEnd('bigDataReduce');