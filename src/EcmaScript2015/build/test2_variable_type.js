"use strict";

var A = "End";
//상수 선언
var msg1 = "GLOBAL";
//var 와 다르게 중복허용x
function outers(a) {
    var msg2 = "OUTER";
    console.log(msg1);
    if (true) {
        var msg = "BLOCK";
        console.log(msg);
    }
}