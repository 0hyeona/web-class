document.addEventListener("DOMContentLoaded", ()=>{

    const html = document.querySelector('html');
    const fontBig = document.querySelector('#btn1');
    const fontSmall = document.querySelector('#btn2');
    const currentFontSizeText = document.querySelector('#currentFontSize');
    const btnToggle = document.querySelector('#btn-toggle');
    // 선택자를 img 까지 썼을 때 children[0]을 안 쓰고 this로 써서 이미지 속성을 변경할 수 있음
    // const btnToggle = document.querySelector('#btn-toggle img');
    const fontControl = document.querySelector('.fontControl');

    let currentFontSize = 20;

    function updateFontSizeText() {
        currentFontSizeText.textContent = `현재 폰트 사이즈 : ${currentFontSize}px`;
    }

    // 글씨 크기 키우기
    fontBig.addEventListener('click', function() {
        if (currentFontSize<40) {
            currentFontSize++;
            console.log(currentFontSize);
            html.style.fontSize=`${currentFontSize}px`;
            updateFontSizeText();
        }
        else { 
            return;
        }
       
    })

    // 글씨 크기 줄이기
    // fontsmall의 updateFontSizeText라는 메서드가 등록
    // fontsmall에서 this를 사용하면 updateFontSizeText 메서드를 실행할 수 있음
    fontSmall.updateFontSizeText=updateFontSizeText;
    
    fontSmall.addEventListener('click', function() {
        if (currentFontSize>12) {
            currentFontSize--;
            console.log(currentFontSize);
            html.style.fontSize=`${currentFontSize}px`;
            this.updateFontSizeText();
        }
        else { 
            return;
        }
    })

    // 클릭했을 때 애니메이션
    btnToggle.addEventListener('click', function() {
        fontControl.classList.toggle('on');
    })

    // 아이콘 이미지 변경 기능 
    let btnState = false; // 새로고침 시 일반 메뉴 상태
    btnToggle.addEventListener('click', function() {
        if (!btnState) { 
            // 닫기 이미지로 교체 (일반 메뉴 상태이기 때문)
            btnState = true;
            this.children[0].setAttribute('src', './img/close.svg');
            this.children[0].setAttribute('alt', '닫기');
        }
        else  {
            btnState = false;
            // 메뉴 이미지로 교체 (닫기 이미지에서)
            this.children[0].setAttribute('src', './img/menu.svg');  
            this.children[0].setAttribute('alt', '열기');
        }
    })
})
