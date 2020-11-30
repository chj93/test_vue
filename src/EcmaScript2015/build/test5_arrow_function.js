"use strict";

//이전 방식
function Person(name, yearCount) {
    this.name = name;
    this.age = 0;
    var incrAge = function incrAge() {
        this.age++;
    };
    for (var i = 1; i <= yearCount; i++) {
        //incrAge(); 오류.
        incrAge.apply(this);
        //apply == incrAge 함수를 둘러싸고 있는 영역의 this를 강제 지정
    }
}
var p1 = new Person("홍길동", 20);
//--this.age는 0이 출력됨.
console.log(p1.name + "님의 나이 : " + p1.age);

//화살표 함수 이용
//주의점 : this가 가르키는 곳 다름
function Person2(name, yearCount) {
    var _this = this;

    this.name = name;
    this.age = 0;
    var incrAge = function incrAge() {
        _this.age++;
    };
    for (var i = 1; i <= yearCount; i++) {
        incrAge();
        //함수를 둘러싸고 있는 영역의 this를 함수내부에서 그대로 사용
    }
}
var p2 = new Person2("홍길동", 20);
//--this.age는 0이 출력됨.
console.log(p2.name + "님의 나이 : " + p2.age);