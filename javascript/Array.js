/**
 * Created by thanos on 4/8/16.
 */
//创建数组(creating an array)
var arr = new Array(element0, element1, elementN);
var arr = Array(elechuangjment0, element1, elementN);
var arr = [element0, element1, elementN];
// 译者注: var arr=[4] 和 var arr=new Array(4)是不等效的，
// 后者4指数组长度，所以使用字面值(literal)的方式应该不仅仅是便捷，同时也不易踩坑

//forEach() 方法提供了遍历数组元素的其他方法
var colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
    console.log(color);
});

//--------------------------------------------------------
//数组的方法(array methods)
//concat() 连接两个数组并返回一个新的数组。
var myArray = new Array("1", "2", "3");
myArray = myArray.concat("a", "b", "c");
// myArray is now ["1", "2", "3", "a", "b", "c"]

//join(分隔符 = ',') 将数组的所有元素连接成一个字符串
var myArray = new Array("Wind", "Rain", "Fire");
var list = myArray.join(" - "); // list is "Wind - Rain - Fire"

//push() 在数组末尾添加一个或多个元素，并返回数组操作后的长度。
var myArray = new Array("1", "2");
myArray.push("3"); // myArray is now ["1", "2", "3"]

//pop() 从数组移出最后一个元素，并返回该元素。
var myArray = new Array("1", "2", "3");
var last = myArray.pop();
// myArray is now ["1", "2"], last = "3"

//shift() 从数组移出第一个元素，并返回该元素。
var myArray = new Array ("1", "2", "3");
var first = myArray.shift();
// myArray is now ["2", "3"], first is "1"

//unshift() 在数组开头添加一个或多个元素，并返回数组的新长度。
var myArray = new Array ("1", "2", "3");
myArray.unshift("4", "5");
// myArray becomes ["4", "5", "1", "2", "3"]

//slice(start_index, upto_index) 从数组提取一个片段，并作为一个新数组返回。
var myArray = new Array ("a", "b", "c", "d", "e");
myArray = myArray.slice(1, 4);
// starts at index 1 and extracts all elements until index 3, returning [ "b", "c", "d"]

//splice(index, count_to_remove, addElement1, addElement2, ...)从数组移出一些元素，（可选）并替换它们。
var myArray = new Array ("1", "2", "3", "4", "5");
myArray.splice(1, 3, "a", "b", "c", "d");

//reverse() 颠倒数组元素的顺序：第一个变成最后一个，最后一个变成第一个。
var myArray = new Array ("1", "2", "3");
myArray.reverse();
// transposes the array so that myArray = [ "3", "2", "1" ]

//sort() 给数组元素排序。
var myArray = new Array("Wind", "Rain", "Fire");
myArray.sort();
// sorts the array so that myArray = [ "Fire", "Rain", "Wind" ]

//indexOf(searchElement[, fromIndex]) 在数组中搜索searchElement 并返回第一个匹配的索引。
var a = ['a', 'b', 'a', 'b', 'a'];
console.log(a.indexOf('b')); // logs 1
// Now try again, starting from after the last match
console.log(a.indexOf('b', 2)); // logs 3
console.log(a.indexOf('z')); // logs -1, because 'z' was not found

//lastIndexOf(searchElement[, fromIndex]) 和 indexOf差不多，但是是从结尾开始，并且是反向搜索。
var a = ['a', 'b', 'c', 'd', 'a', 'b'];
console.log(a.lastIndexOf('b')); // logs 5
// Now try again, starting from before the last match
console.log(a.lastIndexOf('b', 4)); // logs 1
console.log(a.lastIndexOf('z')); // logs -1

//forEach(callback[, thisObject]) 在数组每个元素项上执行callback。

//map(callback[, thisObject]) 在数组的每个单元项上执行callback函数，并把返回包含回调函数返回值的新数组。
// 译者注：也就是遍历数组，并通过callback对数组元素进行操作，并将所有操作结果放入数组中并返回该数组。

//filter(callback[, thisObject]) 返回一个包含所有在回调函数上返回为true的元素的新数组。
// 译者注：callback在这里担任的是过滤器的角色，当元素符合条件，过滤器就返回true，而filter则会返回所有符合过滤条件的元素。

//every(callback[, thisObject]) 当数组中每一个元素在callback上被返回true时就返回true。
// 译者注：同上，every其实类似filter，只不过它的功能是判断是不是数组中的所有元素都符合条件，并且返回的是bool值。

//some(callback[, thisObject]) 只要数组中有一项在callback上被返回true，就返回true。
// 译者注：同上，类似every，不过前者要求都符合筛选条件才返回true，后者只要有符合条件的就返回true。