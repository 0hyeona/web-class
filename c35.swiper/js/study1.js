// 스와이퍼 js
// 이미 만들어진 슬라이드를 가져다 씀

const swiper1 = new Swiper('#swip1', {
    // Optional parameters
    // 세로 방향
    direction: 'vertical',

    // 반복
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const swiper2 = new Swiper('#swip2', {
    // Optional parameters
    // 세로 방향
    // direction: 'vertical',

    // 반복
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});