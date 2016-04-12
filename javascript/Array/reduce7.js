/**
 * Created by thanos on 4/12/16.
 */
var number = [1, 2, 3, 4, 5, 6];

number.reduce(function (previous, current, index, array) {
    console.log({previous, current, index, array});
});