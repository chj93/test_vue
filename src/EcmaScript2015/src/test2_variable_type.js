const A = "End";
//상수 선언
let msg1 = "GLOBAL";
//var 와 다르게 중복허용x
function outers (a) {
    let msg2 = "OUTER";
    console.log(msg1);
    if (true) {
        let msg = "BLOCK";
        console.log(msg);
    }
}