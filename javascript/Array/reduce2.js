/**
 * Created by thanos on 4/11/16.
 */
var votes = [
    "angular",
    "angular",
    "angular",
    "react",
    "react",
    "angular",
    "ember",
    "vanilla"
];

var initialValue = {};

var reducer = function (tally, vote) {
    if (!tally[vote]){
        tally[vote] = 1;
    } else {
        tally[vote] += 1;
    }

    return tally;
};

var result = votes.reduce(reducer, initialValue);

console.log(result);