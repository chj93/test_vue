import { add, var1  } from './utils/utility1'
//import { add, var1 as v  } from './utils/utility1'; 별칭 설정

console.log(add(4,5));  //9
console.log(var1);             //1000
//모듈 내부에 선언된 변수, 함수, 객체 , 클래스 == local
//재사용 가능한 묘듈을 만들려면 외부로 공개하고자 하는 것은 export
//export된 모듈은  다른 모듈에서 import구문을 참조하여 사용할 수 있음