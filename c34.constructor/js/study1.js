function Person(username, age, gender) {
    this.username=username;
    this.age=age;
    this.gender=gender;
    this.sayHello=function() {
        alert(`안녕하세요 ${username}입니다. 제 나이는 ${age}살 입니다. 잘부탁합니다.`);
    }
}

// 객체를 만드는 생성자 함수
let person1 = new Person('김현아', 23, '여자'); 
let person2 = new Person('김정아', 20, '여자');


// 생성자 함수를 객체 형태로 표현
// let person2 = new Person({name:'rlagusdk',gender:'female'});

/* 객체 형태로 표현했을 시 함수 인자값 표현 
function Person(option) {
    this.username=option.name;
    this.gender=option.gender;
} */

// 호출
person1.sayHello();
person2.sayHello();