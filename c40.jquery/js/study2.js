document.addEventListener('DOMContentLoaded', () => {});

// $(document).ready(function() {})


$('.a').css('color', 'red');
let txt = $('.a').html();
// alert(alert);
$('.a').html('<i> 새로운 내용 </i>');

// 속성 불러오기 attr(인자값1) - 속성명 
// 속성 불러오기 attr(인자값1, 인자값2) - 속성명, 주소
$('.b').attr('href');

// on 클래스 추가
$('.c').addClass('on');

// on 클래스 제거
$('.c').removeClass('on');

// b클래스 다음에 오는 c클래스에 on클래스 추가
$('.b').next().addClass('on');

// c클래스 이전에 오는 a클래스
$('.c').prev().html('네이버');

// c클래스의 부모 태그 body 태그 
$('.c').parent().css('background-color', 'pink');