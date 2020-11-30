
var d1 = new Date();
var name = "홍길동";

var r1= name+"님에게 "+d1.toDateString()+"에 연락했다.";
//이전 버전
var r2 = `${name} 님에게 ${d1.toDateString() }에 연락했다.`;
// + es 6  한글 자동 유니코드로 변환

console.log(r1);
console.log(r2);

var product = "갤럭시S7";
var price = 199000;
var str = `${product}의 가격은
       ${price}원 입니다.`;
console.log(str);