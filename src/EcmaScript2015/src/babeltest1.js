//Babel == Es6를 하위 브라우저에서도 사용할 수 있도록 버전을 낮춰줌.
//src 폴더에 작성한 jS file을 terminal에서 'babel src -d build' 하면 build D에 자동적으로 버전을 낮춘 js file 생성됨
//생성된 트렌스파일을 불러올려면 'node 파일명(node build/test3_funtion_paramiter.js)' - console.log 내용 출력됨
let name = 'HJ';
console.log(`Hello ${name}`);

