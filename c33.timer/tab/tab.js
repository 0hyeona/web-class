// 탭스 안에 있는 div 태그들이 전부 선택 (유사 배열)
const tabs = document.querySelectorAll('.tabs>div');

// 탭 컨텐트 안에 있는 div 태그들이 전부 선택 (유사 배열)
const tabContents = document.querySelectorAll('.tab-contents>div');

tabs.forEach(function(tab, index){
    tab.addEventListener('click',function() {
        // alert(`test ${index+1}`);
        
        // 세 개의 탭스들 안에서 각각의 원소에 대해 선택된 on 클래스를 전부 삭제함 
        tabs.forEach((tab)=>{tab.classList.remove('on')})
        this.classList.add('on');
        
        tabContents.forEach((tab)=>{tab.classList.remove('on')})
        tabContents[index].classList.add('on');
    })
})