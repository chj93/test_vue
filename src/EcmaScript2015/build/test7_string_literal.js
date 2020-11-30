"use strict";

var d1 = new Date();
var name = "홍길동";

var r1 = name + "님에게" + d1.toDateString() + "에 연락했다.";
//이전 버전
var r2 = name + " \uB2D8\uC5D0\uAC8C " + d1.toDateString() + "\uC5D0 \uC5F0\uB77D\uD588\uB2E4.";
// + es 6  한글 자동 유니코드로 변환

console.log(r1);
console.log(r2);

var product = "갤럭시S7";
var price = 199000;
var str = product + "\uC758 \uAC00\uACA9\uC740\n       " + price + "\uC6D0 \uC785\uB2C8\uB2E4.";
console.log(str);