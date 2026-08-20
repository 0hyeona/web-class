// 전체 슬라이드 섹션 변수 선언
const train = document.querySelector('.train');

// 이전 버튼 변수 선언
const btnPrev = document.querySelector('#btn-prev');

// 다음 버튼 변수 선언
const btnNext = document.querySelector('#btn-next');

let count = 0;

btnNext.addEventListener('click', function() {
    count++; // 증가할 때마다 count 값 증가 
    if (count > 4) {
        count=0;
    }
    train.style.transform = `translateX(${-20* count}%)`;
});

btnPrev.addEventListener('click', function() {
    count--; // 감소할 때마다 count 값 감소 
    if (count < 0) {
        count=3;
    }
    train.style.transform = `translateX(${-20 * count}%)`;
});