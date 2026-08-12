// DOM : DOCUMENT OBJECT MODEL 문서 객체 모델 
// 문서 컨텐츠가 모두 읽혀졌을 때 실행하는 함수
// script 뒤에 defer 안 쓰고 이 함수들을 작성하면 됨 
document.addEventListener("DOMContentLoaded", ()=>{ // function 으로 쓰면 this는 document를 가리킴

    console.log(this) // widndow
    // 객체나 HTML 요소의 내용 속성 스타일을 변경하는 것은 변수 자체를 바꾸는게 아니기 대문에 const를 주로 사용함 
    const button1 = document.querySelector('#button1');
    const button2 = document.querySelector('#button2');
    const button3 = document.querySelector('#button3');
    const ptag = document.querySelector('.box');
    
    // 사용자가 버튼을 클릭했을 때 
    // 해석 : 이벤트 리스너를 추가한다. (클릭했을 때, 함수를 실행)
    button1.addEventListener('click', function() {
        // 클릭
        console.log(this); // button1
        ptag.innerHTML='안녕하십니까! 클릭을 하셨군요!';
    });
    
    button1.addEventListener('dblclick', function() {
        // 더블클릭
        ptag.innerHTML='더블클릭 하셧군요!';
    })
    
    button2.addEventListener('mousedown', function() {
        ptag.innerHTML='버튼을 누르고 있더용'
    })
    
    button2.addEventListener('mouseup', function() {
        ptag.innerHTML='버튼을 땟어용..'
    })
    
    button3.addEventListener('mouseenter', () => {
        ptag.innerHTML='마우스 들어왓땅';
    })
    
    button3.addEventListener('mouseleave', () => {
        ptag.innerHTML='마우스 나갔땅';
    })
    
    button3.addEventListener('mousemove', () => {
        ptag.innerHTML='마우스 움직인땅';
    })

    document.addEventListener('click', (event) => { // this 가리키는 것 window
        console.log(event.target.textContent);
    })

    
    const btn4 = document.querySelector('#button4');
    btn4.addEventListener('click', function(event) {
        // 기본 기능 억제 
        event.preventDefault();        
    });


    const btn5 = document.querySelectorAll('a');
    btn5.forEach((tag)=>
        tag.addEventListener('click', function(event)
        {
            event.preventDefault();
        })
    );

    // 이벤트 전파 (자식->부모)
    const inbox = document.querySelector('.inbox');
    // 이벤트 전파 차단 
    inbox.addEventListener('click', function(event) {
        event.stopImmediatePropagation();
        alert('안에 박스를 클릭하였당!');
    })
    
    const frame = document.querySelector('.frame');
    frame.addEventListener('click', function() {
        alert('프레임을 클릭했당.');
    })

    const inputTag = document.querySelector('.input');
    inputTag.addEventListener('input', function(event) {
        console.log(event.target.value);
    });

    inputTag.addEventListener('focus', ()=>{
        console.log('입력 시작할게융');
    })

    inputTag.addEventListener('blur', ()=> {
        console.log('입력을 마치셨군용!');
    })
});


// 마우스 이벤트
// element.addEventListener('click', 함수);       // 클릭
// element.addEventListener('dblclick', 함수);     // 더블클릭
// element.addEventListener('mousedown', 함수);    // 마우스 버튼 누름
// element.addEventListener('mouseup', 함수);      // 마우스 버튼 뗌
// element.addEventListener('mousemove', 함수);    // 마우스 이동
// element.addEventListener('mouseenter', 함수);   // 요소에 들어옴
// element.addEventListener('mouseleave', 함수);   // 요소에서 나감

// 키보드 이벤트
// element.addEventListener('keydown', 함수);     // 키를 누르는 순간
// element.addEventListener('keyup', 함수);       // 키를 뗀 순간

// 입력 및 폼 이벤트
// element.addEventListener('input', 함수);       // 입력값이 바뀔 때
// element.addEventListener('change', 함수);      // 입력값 변경 후 확정될 때
// element.addEventListener('focus', 함수);       // 포커스를 얻을 때
// element.addEventListener('blur', 함수);        // 포커스를 잃을 때
// element.addEventListener('submit', 함수);      // 폼 제출

// 기타 이벤트
// element.addEventListener('load', 함수);        // 로딩 완료
// element.addEventListener('scroll', 함수);      // 스크롤
// element.addEventListener('resize', 함수);      // 창 크기 변경
// element.addEventListener('DOMContentLoaded', 함수); // HTML 로딩 완료