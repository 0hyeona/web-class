// 클릭 함수 사용 click(동작 함수)
$('#btn').click(() => {
    $('.frame').css('color', 'blue');
});
$('.list > li').css('cursor', 'pointer');

$('.list>li').click(function() {
    // alert('test');

    // 부모 태그 기준 몇 번째 인덱스에 속하는지 
    let index = $(this).index();
    alert(index);
})

