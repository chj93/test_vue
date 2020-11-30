//객체 속성표기법

//변수명과 객체의 속성이 동일하다면 생략 가능
var name = "홍길동";
var age = 20;
var email = "gdhong@test.com";

var obj1= { name: name, age: age, email: email }; //이전 방식
var obj2 = { name, age, email }; // + ex6 생략가능
console.log(obj1);
console.log(obj2);

//메서드 표기법
let p1 = {
    name : "아이패드",
    price : 200000,
    quantity : 2,
    //이전방식
    order : function() {
        if (!this.amount) {
            this.amount = this.quantity * this.price;
        }
        console.log("주문금액 : " + this.amount);
    },
    // + ex6
    //function 키워드를 사용하지 않고 바로 구현부 {}
    discount(rate) {
        if (rate > 0 && rate < 0.8) {
            this.amount = (1-rate) * this.price * this.quantity;
        }
        console.log((100*rate) + "% 할인된 금액으로 구매합니다.");
    }
}
p1.discount(0.2);
p1.order();