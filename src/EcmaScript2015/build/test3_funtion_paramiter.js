"use strict";

//기본값 할당 파라미터
function addContact(name, mobile) {
    var home = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "없음";
    var address = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "없음";
    var email = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "없음";

    var str = "name=" + name + ", mobile=" + mobile + ", home=" + home + ", \n               address=" + address + ", email=" + email;
    console.log(str);
}

addContact("홍길동", "010-222-3331");
//name: " , mobile: " , home : 없음 ...
addContact("이몽룡", "010-222-3331", "02-3422-9900", "서울시");

//가변 파라미터 -  ...favoriteFoods : 가변 파라미터로 입력한 내용이 배열형태로 저장
function foodReport(name, age) {
    console.log(name + ", " + age); //

    for (var _len = arguments.length, favoriteFoods = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        favoriteFoods[_key - 2] = arguments[_key];
    }

    console.log(favoriteFoods);
}

foodReport("이몽룡", 20, "짜장면", "냉면", "불고기");
/* console
이몽룡, 20
[ '짜장면', '냉면', '불고기' ]
    가변 파라미터로 입력한 내용이 배열형태로 저장

*/

foodReport("홍길동", 16, "초밥");
/* console
홍길동, 16
[ '초밥' ]
*/