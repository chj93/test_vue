//구조분해 할당
    //배열, 객체의 값들을 추출하여 여러변수에 할당할 수 있는 기능

//예제 1
let arr = [10,20,30,40];
let [a1,a2,a3] = arr;   //a1=10, a2=20, a3=30 할당

console.log(a1, a2, a3);
//10,20,30
let p1 = {name:"홍길동", age:20, gender:"M"};
let { name:n, age:a, gender } = p1;
//변수 n="홍길동", age=20, gender="M"

console.log(n, a, gender);
//홍길동 20 M

//예제 2 기본값 할당 +  구조분해 할당
function addContact({name, phone, email="이메일 없음", age=0}) {
    console.log("이름 : " + name);
    console.log("전번 : " + phone);
    console.log("이메일 : " + email);
    console.log("나이 : " + age);
}

addContact({
    name : "이몽룡",
    phone : "010-3434-8989"
})