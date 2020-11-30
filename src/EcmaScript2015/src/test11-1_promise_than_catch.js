//비동기 처리를 위한 객체
// superagent, axios, vue-resource 등 대부분 Promise 객체 사용


var p = new Promise(function(resolve, reject) {
//Promise -- resolve ---- then()
//        -- reject  ---- catch()

    setTimeout(function() {
        var num = Math.round(Math.random()*20);
        //20이하의 랜덤한 숫자
        var isValid = num % 2;
        //1==true, 0==false
        if (isValid) { resolve(num); }
        //isValid가 1일 경우 then으로
        else { reject(num); }
        //isValid가 0일 경우 catch로
    }, 2000);
    //2000밀리초 동안 시간 멈춤
});

p.then(function(num) {
    console.log("홀수 : " + num);
}).catch(function(num) {
    console.log("짝수 : " + num);
});

console.log("20까지의 난수중 홀수/짝수?");
console.log("결과는 2초후에 나옵니다.!!");