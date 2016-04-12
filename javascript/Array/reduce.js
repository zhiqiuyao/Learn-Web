/**
 * Created by thanos on 4/11/16.
 */
/*
 understand how to use reduce
 Reduce is an extremely useful tool for extracting data out of collections of data
  */
var data = [1, 2, 3];

var reducer = function (accumulator, item) {
    return accumulator + item;
};

var initialValue = 0;

var total = data.reduce(reducer, initialValue);
console.log("The sum is", total);
