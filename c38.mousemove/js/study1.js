const mouseCursor = document.querySelector('.mouseCursor');
let CursorState = false;

// 마우스 움직일 때마다 실행되는 소스코드
document.addEventListener('mousemove', (event) => {
    // 커서 display:none/block 한 번만 사용하기 위한 조건문
    if (!CursorState) {
        // 참일 때 block
        mouseCursor.style.display='block';
        // none으로 변경
        CursorState=false;
    }

    // 마우스를 움직일 때마다 현재 커서 위치를 출력
    // console.log(event.clientX, event.clientY);

    mouseCursor.style.left=event.clientX + 'px';
    mouseCursor.style.top=event.clientY + 'px';
});

// 마우스 버튼을 눌렀을 때 
document.addEventListener('mousedown', (event)=> {
    mouseCursor.innerHTML=
    `<img src="./img/clicked.png" alt="마우스 누른 상태">`;
})
document.addEventListener('mouseup', (event)=> {
    mouseCursor.innerHTML=
    `<img src="./img/default.png" alt="마우스 기본 상태">`;
})
