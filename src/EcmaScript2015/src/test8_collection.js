//Set,Map, WeakSet, WeakMap 제공

// Set 생성자 함수
var s1 = new Set();
s1.add("사과");   s1.add("배");
s1.add("사과");   s1.add("포도");
console.log(s1);
//실행 결과 : Set { '사과', '배', '포도' }   - 중복허용x

var john = new Set(["사과", "포도", "배"]);
var susan = new Set(["파인애플", "키위", "배"]);

//union 합집합 : Set { '사과', '포도', '배', '파인애플', '키위' }
var union = new Set([...john.values(), ...susan.values()]);
console.log(union);

//intersection 교집합 : Set { '배' }
var intersection = new Set([...john.values()].filter(e => susan.has(e)));
console.log(intersection);

//diff  차집합 : Set { '사과', '포도' }
var diff = new Set([...john.values()].filter(e => !susan.has(e)));
console.log(diff);

// Mqp 생성자 함수 = Key, Value
let teams = new Map();
teams.set('LG', '트윈스');     teams.set('삼성', '라이온스');
//set : 값 input
teams.set('NC', '다이노스');   teams.set('기아', '타이거스');
teams.set('한화', '이글즈');   teams.set('롯데', '자이언츠');

console.log(teams.has("SK"));       //false
//has : 값이 있는지 여부 확인
console.log(teams.get("LG"));       //트윈스
//get : 값 가져오기

//clear()
//delete()