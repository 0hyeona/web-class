
document.addEventListener('DOMContentLoaded', () => {
    // headings slide in (ltr); other content fades (fade)
    document.body.querySelectorAll('*').forEach((el) => {
        if (el.matches('h1, h2, h3')) {
            el.classList.add('ltr');
        } else {
            el.classList.add('fade');
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('on');
            } else {
                entry.target.classList.remove('on');
            }
        });
    }, {
        // 옵션
        // 태그가 화면에 10%이상 보일 때 트리거를 하게 됨
        threshold: 0.15 });

    const tags = document.querySelectorAll('.ltr, .fade');
    tags.forEach((tag) => observer.observe(tag));
});


