// 타임함수
// 1번째 인자값 : 동작 (함수=익명함수)
// 2번째 인자값 : 시간 (1초=1000 (단위 생략 : ms))
let timer1 = setTimeout(function() {
    alert('하이');
}, 3000);
clearTimeout(timer1);

let timer2 = setTimeout(function() {
    alert('방가방가루')
}, 6000)
// 취소함수
// 인자값 : 타임함수 지정
clearTimeout(timer2);


// // 몇 번 실행될지 변수 지정 
// let count=0;
// // 지정된 초마다 익명함수를 실행시키는 메서드
// let intervalTimer = setInterval(function() {
//     count++;
//     if (count==5) {
//         clearInterval(intervalTimer);
//         console.log('끝');
//     } else {
//         console.log(`test ${count}`);
//     }
// }, 1000);


// let intervalTimer = setInterval(function(){
//     for (let i=0; i<5; i++) {
//         console.log(`test ${i}`);
//     }
//     clearInterval(intervalTimer);
//     console.log('끝');
// }, 1000)



let cnt=2;
function countdown() {
    cnt--;
    setTimeout(function() {
        console.log(cnt);
        if (cnt===0) {
            return
        }
        countdown();
    }, 1000);
}
countdown();