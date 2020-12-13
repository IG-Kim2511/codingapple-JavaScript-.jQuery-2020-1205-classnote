// ●

//🦄c2 자바스크립트의 목적과 셀렉터

//  "=" 뜻 : 오른쪽을 왼쪽에 넣어주세요 라는 뜻 . 같다는 뜻이 아님
// selector, method 👉 구글링해서 필요한것 찾기

document.getElementById("test").innerHTML = "디즈니 innerHTML✋";

document.getElementById("test").style.color = "red";



// 🦄c3 onclick 속성으로 버튼 기능개발: Alert 박스 만들기

// 🦄c4 function 문법으로 코드 줄이기/ 에러 체크하기

/* js 4-1)
function: 긴 js문장을 한단어로 축약,여러번 재사용 할때
html문서 onclick안에 function실행어 사용 가능

콘솔창에서 null: 텅 비었다는 뜻, 보통 selector를 못찾을때 나옴

팁 : 콘솔창의 error메시지 : 그대로 복사해서 구글링하면 해결 가능 */

function alert닫기(){
    document.getElementById('alert').style.display = 'none';
  }
alert닫기();

  
// 🦄c5 parameter: function을 쓰는 이유 (function의 두번째 기능)


// js 5-1) function 2개 만듬
function alert열기5(){
  document.getElementById('alert5').style.display = 'block';
}

function alert닫기5(){
  document.getElementById('alert5').style.display = 'none';
}


// js 5-2) parameter 쓰기 
/*
함수실행(a)👉function(a)👉 a를 function안에서 자유롭게 사용함

parameter 장점 : 함수1개로 parameter만 바꾸면서 여러기능 만듬*/  

function alert5(파라미터){
  document.getElementById('alert5').style.display=파라미터;
}
/* 
alert5('파라미터');
alert5(123);

alert5('block');
alert5('none'); */


// js 5-3) parameter 여러개 사용가능 (2개,3개,4개 이상~~~)
/* 
사용할 곳 지정해서 집어넣으면 끝 */

function alert5_3(파라미터1,파라미터2){
  document.getElementById(파라미터1).style.display=파라미터2;
}

// alert5_3('파라미터1','파라미터2');


// 🦄c6 function과 파라미터 숙제 : UI 재사용하기

/* js 6_2 */
function 안내창6_2(파라미터1,파라미터2){
  document.getElementById('alert6_2').style.display = 파라미터1;
  document.getElementById('title6_2').innerHTML = 파라미터2;
}

/* 👉html에 넣음
안내창6_2('block','아이디를 입력하세요.');
안내창6_2('block','비번을 입력하세요.'); */


// 🦄c7 jQuery 설치와 기초 셀렉터 & querySelector

/* querySelector : 

(예제 둘다 같은 뜻)

document.querySelector('#title6_2')

document.getElementById('title6_2') */


// 🦄c8 addEventListener (이벤트 리스너)

document.querySelector('.btn8').addEventListener('click',()=>{
  document.querySelector('.btn8').classList.toggle("red");
  });
  
/* = 같은뜻 jquery로...
$('.btn8').on('click',function(){ }) */

/* 
html에 집어넣는 JS는 이제 그만, script 에서 모든 기능 개발

얘가 클릭이 일어나면~ 내부코드를 실행해주셈
     
method 구글링👉
click
keydown
scroll
...etc */

// 🦄c9 Bootstrap 사용하기와 모달창 UI 개발
/* 
🚀UI만들기 공식
1. HTML/CSS로 미리 디자인해놓기
2. 평소엔 안보이게 숨기기
3. 버튼을 눌렀을 때 보여주기  */

// 🦄c10 jQuery의 toggle 함수. hide함수.click함수.

// 🦄c11 if/else 조건문을 배워보자

if ( 1 > 3 ) {
  console.log('안녕')
} else if ( 1 < 2 ) {
  console.log('반가워')
} else {
  console.log('잘가')
}

/* false류의 값들
이런 값들도 if문 소괄호 안에서는 false로 판단합니다. 
0
""
null
undefined
NaN */

/* 
🚀알고리즘 공식 :
먼저 한글로 알고리즘을 작성해보고, 그에 따라서 코딩함 
여러개 기능일때, 일단 하나만 먼저 개발하면서, step by step하면 쉬움
*/


// 🦄c12 else if, and, or 조건문 (폼개발로 배우는 )

/*  and, or 조건문
and : &&  👉 2개 중 1개만 맞으면 false
or : ||  👉 2개 중 1개만 맞아도 true*/

if ( 1 == 1 && 1 == 2 ) {
  console.log('안녕')
}

if ( 1 == 1 || 2 == 3 ) {
  console.log('안녕')
}

// 🦄c13 if/else, function 실력향상 과제(369게임)
/* 1-1)
% 연산자 : 나머지를 알려주는 연산자
5 % 3 이라고 작성하면 2라는 값이 남겠죠? 
6 % 3 은 뭘까요. 0이겠죠 뭐. 

1-2)
삼육구게임(6); 이라고 쓰면 콘솔창에 ‘박수’라는 글자가 떠야합니다.
삼육구게임(11); 이라고 쓰면 콘솔창에 ‘통과’라는 글자가 떠야합니다.
삼육구게임(18); 이라고 쓰면 콘솔창에 ‘박수x2’라는 글자가 떠야합니다.

1-3)
함수 이름 맨 처음 단어는 숫자를 사용하시면 안됩니다. 그래서 삼육구게임() 이런 식으로 작명했습니다.  */

function 삼육구게임(숫자){
  if (숫자 % 9 == 0) {
    console.log("박수x2");
  } else if (숫자 % 3 == 0){
    console.log('박수');
  } else {
    console.log('통과');
  }
}

// 🦄c14 else if 활용 : 폼 전송시 공백체크 기능 만들기

/* 
nodeValue() : input안의 내용물

"" : 빈칸

자주 쓰이는 event  :
click 
input : 글을 쓰고 있을때
change : 글 다 쓰고 끝났을때 (빈칸이 글로 채워지면서 value가 바뀌었을때) */


// 🦄c15 var let const 변수와 변수의 활용법

/* ●
declaration : 변수 선언
Assignment : 변수 할당
scope : 변수 범위

●
local variable
global variable

●
closure : 
function안에서 만든 변수, 밖에서 쓸 수 없음

●var
function(){ } 에서만 적용

●let
if(){ }, function(){ }...등등 모든 { }에서 적용 

let 나이;  X (var 나이; 가능함)

●const
if(){ }, function(){ }...등등 모든 { }에서 적용 

const 나이 = 33; X (let 나이 = 33; 다시 Assignment 가능)
*/
/* 
변수의 Hoisting
자바스크립트는 변수 선언부분을 항상 위로 강제로 끌어올려서 해석하는 습성이 있습니다. (할당은 아니고요 선언만요)
함수 선언도 마찬가지로 코드 맨 위로 끌어올린 다음 해석을 합니다. 
이걸 Hoisting이라고 부릅니다.
 */


//  🦄c16 변수, 사칙연산: 실력향상 과제

/* 
콘솔창에 13이라는 글자가 출력될겁니다.
문자 더하기 연산은 문자를 그냥 양옆으로 붙여주는 연산입니다.  */
console.log(1 + '3')

/* 
Q. 이자율 계산하기 
예금액이 5만원 미만이면 이율이 연 15퍼센트,
예금액이 5만원 이상이면 이율이 연 20퍼센트라고 합니다. 
그래서 민준이는 2년 후의 예금액을 자동으로 계산 */

var 예금액 = 60000;
var 미래예금액 = 0;

if ( 예금액 >= 50000 ){
  미래예금액 = 예금액 * 1.2 * 1.2 ;
} else {
  미래예금액 = 예금액 * 1.15 * 1.15 ;
}
console.log(미래예금액) 

/* 
Q. 마신 커피의 3분의 2만 리필해주는 카페가 있습니다.
예를 들면 처음 커피를 90ml 주문하면 첫 리필은 60ml를 해주며, 그 다음 리필은 40ml를 해주는 카페입니다. 
총 2회 리필이 가능합니다.
그럼 처음 주문한 커피 양에 따라서 최대한 마실 수 있는 커피 */

var 첫커피양 = 360;
var 마신커피 = 0;

var 리필양 = (첫커피양 * 2 / 3);
마신커피 = 첫커피양 + 리필양;

var 리필양2 = (리필양 * 2 / 3);
마신커피 = 마신커피 + 리필양2;

console.log(마신커피)


 /* 변수를 좀 줄여보도록 합시다. */
 
var 첫커피양 = 360;
var 마신커피 = 0;

var 리필양 = (첫커피양 * 2 / 3);
마신커피 = 첫커피양 + 리필양;

리필양 = (리필양 * 2 / 3);
마신커피 = 마신커피 + 리필양;

console.log(마신커피)


// 🦄c17 jQuery Animate 함수(애니메이션 UI 1 :)
/* 
camelCase작명법
'-'는 js에서 뺄셈을 의미해서 작명에  쓸수없음 */


// 🦄c18 JS 애니메이션 만드는 공식/ 팁 (애니메이션 UI 2 : Slide Down 모달창 만들기 & 애니메이션 필수 팁)
// 👉c8 button

/* 
🚀JS 애니메이션 만드는 공식

1. 시작화면/ 최종화면 만들기

2. 자바스크립트로 트리거를 주기

3. 스무스한 동작 : css transition애니메이션 사용 

(+  css class에 스타일링해서 classList로 붙이는 방식으로 개발하자 ) */

/* 
🚀애니메이션 팁
1. js 말고 CSS transition을 쓰자 

transition은 자바스크립트와 독립적으로 동작합니다. 

편집도 훨씬 더 쉽습니다. 

2. margin 말고 transform 속성을 쓰자 

margin, width, height, top, left, bottom, right
이런 CSS 속성들은 페이지 레이아웃을 변경하는 속성입니다.
브라우저는 레이아웃을 변경하면 렌더링시간이 매우 오래걸립니다.

transform, opacity
이런 CSS 속성들은 페이지 레이아웃과 상관없는 쩌리 속성들입니다.
매우 빠르게 처리해줍니다. */


// 🦄c19 Regular expressions (정규표현식으로 이메일 형식 검증해보기)

/* 
어떤 문자에 ‘abc’라는 단어가 들어가있나요? 라고 물어보고 싶을 때 쓰시면 됩니다. 

자바스크립트로 정규식을 어떻게 표현하냐면 이렇게 슬래시 기호로 표현합니다. 

/abc/ 
*/

/* 
그럼 abcdef라는 문자에 abc라는 단어가 포함되어있는건지 검사하는것임.
(동일한건지 검사 x) 

/abc/.test('abcdef')
 */
 
const str = 'hello world!';
const result = /^hello/.test(str);

console.log(result); // true

 /* 
 정규식 문법은 너무 많아서 외워서 쓰기도 힘들고 외울 필요도 없습니다. (
    
  /t/
이렇게 글자를 그대로 때려박으시면 t라는 글자가 있는지 없는지 물어보실 수 있습니다. 

/[A-D]/
/[가-하]/
[ ] , - 기호 : A부터 D까지의 글자가 포함되어있는지 확인. 한글도 가능합니다. 

/\S/
역슬래시(또는 원화기호)와 S라는 글자를 붙여주시면 모든 문자를 뜻합니다. (특수기호 포함)

/\S+/
+ 기호를 붙여주시면 뒤에 오는 글자들도 \S와 일치하면 함께 찾아달라는 뜻입니다. 

(원래 [A-D] 또는 \S 이렇게만 쓰시면 딱 한글자만 찾아줍니다.)

/\S+t/
이건 그럼 뭘까요. 모든 문자 여러개 다음에 t라는 글자가 있냐를 검사해주는 정규식입니다.
*/

/*  
이메일 Regular expressions

이메일은 어쩌구@어쩌구.어쩌구 이렇게 되어야합니다. 

모든 문자 사이에 @ 그리고 .이라는 특수문자가 와야합니다.  

/\S+@\S+\.\S+/
이렇게 쓰면 되겠습니다. 

\. 이라는 기호는 왜 이렇게 썼냐면 마침표는 정규식에서 특수한 문법이기 때문에 

문법을 쓰는게 아니라 진짜 마침표를 찾아달라라는 의미로 쓰려면 역슬래시를 앞에 붙이셔야합니다. (escape기호)*/

/* 
자주 사용되는 정규 표현식

/^[0-9]*$/	숫자로만 되어 있는지 검사
/^[a-zA-Z]*$/	알파벳으로만 되어 있는지 검사
/^[ㄱ-ㅎ가-힣]*$/	한글로만 되어 있는지 검사
/^[a-zA-Z0-9]*$/	알파벳과 숫자로만 되어 있는지 검사
/^[ㄱ-ㅎ가-힣0-9]*$/	한글과 숫자로만 되어 있는지 검사
/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i	이메일 형식 검사
/^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/	핸드폰 번호 형식검사
/^\d{2,3}\d{3,4}\d{4}$/	집 전화 형식 검사
/^\d{6}[1-4]\d{6}/	주민번호 형식 검사
*/




// 🦄c20 Regular expressions 2 (정규식 숙제 : 비밀번호 검증하기)

/* 
html에서의<input type="text">
요즘 브라우저에서는 자동으로 검사해줌. regular expression쓸필요없음.
예전 브라우저를 위한 코딩.... */

// 1) 패스워드에 대문자가 있는지 검사하기

// 2) 이메일 형식 검사와 공백검사를 동시에?


// 🦄c21 슬라이드 만들기 1: UI와 버튼기능

/* 
 js 21-2) 큰 박스(.slide-container)를 옆으로 움직임
 
 .style.transform = "translateX(-100vw)"*/

document.querySelector('.slide-1').addEventListener('click',function(){
  document.querySelector('.slide-container').style.transform = "translateX(0)";
});

document.querySelector('.slide-2').addEventListener('click',function(){
  document.querySelector('.slide-container').style.transform = "translateX(-100vw)";
});

document.querySelector('.slide-3').addEventListener('click',function(){
  document.querySelector('.slide-container').style.transform = "translateX(-200vw)";
});


// 🦄c22 슬라이드 만들기 2 : Next 버튼 만들기

/* 
js 22-3) 한글로 먼저 표현 후, 코딩

3-1) 알고리즘
Next 버튼을 클릭하면..
만약에 지금 사진1을 보고있으면, 사진2를 보여주고  

3-4)
3이하일때만 지금보이는사진을 2로 바꿈(총 사진갯수3개)
 
3-2)
지금 보이는 사진이 1이란걸 어떻게 표현할 수 있죠?
지금 몇번째 사진 보고있는지 저장용.
default값 1 

3-3)
만약에 지금 사진2를 보고있으면, 사진3을 보여주기..
(3이하일때만 (총 사진갯수3개)) (+지금보이는 사진을 3으로 바꿈)
*/

// 3-2)
var 지금보이는사진 = 1;

var slideNext = document.querySelector('.slide-next');
var slideContainer = document.querySelector('.slide-container');

slideNext.addEventListener('click',function(){

  if(지금보이는사진 == 1){   /* 3-1) 3-3) */
    slideContainer.style.transform = `translateX(-${지금보이는사진}00vw)`;
    
    if ( 지금보이는사진 < 3 ) {  /* 3-4)*/
      지금보이는사진 = 지금보이는사진 + 1;}    
  }

  else if( 지금보이는사진 == 2){
    slideContainer.style.transform = `translateX(-${지금보이는사진}00vw)`;
   
    if ( 지금보이는사진 < 3 ) { 
      지금보이는사진 = 지금보이는사진 + 1;}
  }
});

/* 하드코딩
slideNext.addEventListener('click',function(){
  if(지금보이는사진 == 1){
    slideContainer.style.transform = "translateX(-100vw)";
    지금보이는사진 = 2;     
  } else if( 지금보이는사진 == 2){
    slideContainer.style.transform = "translateX(-200vw)";   
    지금보이는사진 = 3;   
  }
});
*/

// 🦄c24 scroll, scrollY (스크롤 애니메이션 1: 스크롤시 변하는 Navbar 만들기)

/* 
1) js 문법:  window.
window 라는건 viewport 입니다. (지금 보이는 브라우저 화면을 뜻함)

2)'scroll'

3) classList.add

4)
scrollY
왼쪽에 있는 요소(window)가 위에서부터 몇 px 스크롤 되었는지 알려줍니다. 
 window라고 썼으니 viewport가 몇 px 스크롤되었는지 알려주겠죠?
  만약에 지금 위에서부터 1200px 이상 스크롤했을 때
 */
 
//🦄c25 scroll,classList.remove 스크롤을 다시 올리면 원래대로 (스크롤 애니메이션 2: 숙제)
/*  
1) scroll eventLister는  하나만 쓰세요. 
1초에 최대 60번 실행시키기 때문에, 실행횟수가 많아 브라우저가 간혹 느려짐
scroll 이벤트 리스너와 내부의 코드는 최대한 줄여서 사용하는게 좋습니다.
*/

/* 2) 스크롤시 로고 폰트사이즈가 서서히 작아지게 만들어보세요!
classList.add */

/* 3) 스크롤을 다시 올리면 원래대로
classList.remove
*/

window.addEventListener('scroll',function(){  /* 24-1) 24-2) */

  if(window.scrollY > 1200){  /* 24-4) */
    console.log(scrollY)
    document.querySelector('.nav-menu').classList.add("nav-black"); /* 24-3) */
    document.querySelector('.nav-menu h4').classList.add("small-logo"); /* 25-2) */  
  } else{   /* 25-3) */  
    document.querySelector('.nav-menu').classList.remove("nav-black"); 
    document.querySelector('.nav-menu h4').classList.remove("small-logo");    
  }
});

// 🦄c26 active show 클래스 응용. querySelectorAll('.~~')[1] (탭기능 만들기 1)
/* 
Q: 1번 버튼클릭하면, css로 색넣고, 해당탭의 내용 보여줌

알고리즘)
  1번 버튼을 누르면 
  0. 모든 버튼에 있는 active 클래스 제거
  0. 모든 내용에 있는 show 클래스 제거

  1. 1번 버튼에 active라는 클래스를 추가해야함 (버튼 누른듯한 하이라이트 해주려고)
  2. 1번 내용에 show라는 클래스를 추가해야함 (탭내용 보여주려고)
*/

/* 
1)  모든 active show 클래스 제거

2) 버튼에 css로 색넣기 👉 active라는 클래스를 추가

2-2)
querySelector는 코드 전체를 찾고, 그 중에서 첫번째 것만 알려 준다.

querySelectorAll은 코드 전체를 찾고, 이를 배열 형태로 나열 시킨다. 

querySelectorAll('.클래스이름')[1] : 전체클래스에서 1번째 선택


3) 내용에 해당탭 보여줌 👉 show라는 클래스를 추가
*/

/* 4)
???? :querySelectorAll 모두를 지정할 수 있는 방법은? --에러

A: 한번에 여러개 싸잡아서 바꾸는건 jQuery만 가능한것이고
쌩자바스크립트 사용시엔 이렇게 하나씩 써야합니다 다른 방법은 없습니다 

document.querySelectorAll(‘.tab-button’)[0].classList.remove(‘active’);
document.querySelectorAll(‘.tab-button’)[1].classList.remove(‘active’);
document.querySelectorAll(‘.tab-button’)[2].classList.remove(‘active’);

jQery : 
$('.tab-button').removeClass('active'); 
 */

var tabBtn = document.querySelectorAll('.tab-button');
var tabContent = document.querySelectorAll('.tab-content');

tabBtn[1].addEventListener('click',function(){

  // 4)
  tabBtn[0].classList.remove('active'); 
  tabBtn[1].classList.remove('active'); 
  tabBtn[2].classList.remove('active'); 
  tabContent[0].classList.remove('show');  
  tabContent[1].classList.remove('show');  
  tabContent[2].classList.remove('show');  
  
tabBtn[1].classList.add('active');  /* 26-2 */
tabContent[1].classList.add('show');  /* 26-3 */
});


// 🦄c27 for반복문. (탭기능 만들기 2: 모든 버튼 구현)

/* 
1) for 반복문
var i = 0은 초기값, 
i < 3은 반복문이 실행되는 조건,
i++는 반복문이 돌 때마다 i라는 변수에다가 1을 더해주세요~

2) for 반복문에서 var 쓰지말고, let을 쓰자.
let이라는 변수를 쓰기만 하면 버그가 전혀 없으니, 이해안되도 그냥 let쓰면됨 
*/
for (let i = 0; i < 3; i++) {
  console.log('안녕');
}

/* 
3) 소프트코딩 
모든 버튼 기능 구현
*/

for (let i = 0; i < tabBtn.length; i++) {
  tabBtn[i].addEventListener('click',function(){

  tabBtn[0].classList.remove('active'); 
  tabBtn[1].classList.remove('active'); 
  tabBtn[2].classList.remove('active'); 
  tabContent[0].classList.remove('show');  
  tabContent[1].classList.remove('show');  
  tabContent[2].classList.remove('show');  
  
  tabBtn[i].classList.add('active');  
  tabContent[i].classList.add('show');  
  });
}


// 🦄c28 event bubbling. e.target e.currentTarget this. e.preventDefault e.stopPropagation

/* 2)
이벤트 버블링
어떤 HTML 태그에 이벤트(ex: click)가 발생하면 그의 모든 상위요소까지 이벤트(ex: click)가 실행되는 현상 

무언가 클릭한 때,  1번만 클릭한것이 아님
하위태그 클릭하면, 상위 모든 태그도 클릭한것으로 보고됨 (태그 3개일때, 총 3번 클릭)
*/

/* 2-2)
q: black-background배경을 누를때만 창이 닫히는 기능

버그 : black-background 안의 다른 태그 눌러도 이벤트 발생함
input을 눌러도 
.white~ 눌러도 
상위태그인.black-background 클릭한 것으로 보고됨.
black-background 클릭한걸로알고 창을 닫는 버그
*/

var bbg = document.querySelector('.black-background');

bbg.addEventListener('click',function(){
  bbg.style.display = 'none';
});


/* 
3) 한글로 알고리즘 먼저 작성 : 지금 실제로 누른게 검은 배경일 때만 display = 'none';해주셈

4) 이벤트함수: 이벤트리스너 콜백함수안에 파라미터(e)를 추가하면 이벤트관련 함수들 사용 가능해짐

~~~~~.~~~~((e)=>{

e.target; : 지금 실제 클릭한 요소

e.currentTarget; (=this): 지금 이벤트리스너가 달린 곳 

e.preventDefault(); : 기본 동작을 막을 때 쓰고 

e.stopPropagation(); : 내 상위요소로의 이벤트 버블링을 중단할 때 씁니다. 

});

*/

var bbg2 = document.querySelector('.black-background2');

bbg2.addEventListener('click',function(e){

  if(e.target == e.currentTarget){  /* 4) */

    /* if(e.target == this) */  /* 4) */
    bbg2.style.display = 'none';
  } 
});

/* 5)
 e.target == $(‘.black-background’) 작동하진 않습니다. 
바닐라 자바스크립트 & jQuery는 같이 쓸 수 없음
*/

/* 
🦄c28-2 addEventListener 자주 쓰이는 이벤트 목록
 
change	변동이 있을 때 발생 
click	클릭 시 발생
focus	포커스를 얻었을 때 발생
keydown	키를 눌렀을 때 발생 
keyup	키에서 손을 땟을 때 발생 
load	로드가 완료 되었을 때 발생 
mousedown	마우스를 클릭 했을 때 발생
mouseout	마우스가 특정 객체 밖으로 나갔을 때 발생
mouseover	마우스가 특정 객체 위로 올려졌을 때 발생
mousemove	마우스가 움직였을 때 발생
mouseup	마우스에서 손을 땟을 때 발생
select	option 태그 등에서 선택을 햇을 때 발생
*/


// 🦄c29 Array. Object. data type (Array 와 Object 자료형 기초)

/* 1) Data Types :

1-1) primitives Data Types :

undefined  

Boolean
Number 
String
BigInt 
Symbol 

1-2) Structural Types:

Object 
Function 
null  
*/

/* 영어
[ ] { } ( ) : 모든 것 총칭 :  bracket

[ ] : square bracket 

{ } : curly bracket

( ) : parentheses , round bracket */


// 2) string '' "" `` 모두 사용가능

var Data = 'string'
var Data = "string"
var Data = `stirng`

// 3) number
var Data =  20;  /* number */
var Data =  '20'; /* string */

/* 
4) array :
[ ] square braket 사용
String, number, array...넣을 수 있음 

4-2) 사용방법 : array이름[1]  */

var DataArray = ['bmw', 520, [1,2,3]]

console.log(DataArray[1]); /* 4-2) */


/*4-3) array안의 object 형식 : [ { }, { },{ } ] */
var array안object = [{brand:'amazon'}, {price:300}]

/* 
5) Object :
{ } curly bracket 사용
key : data이름 의미함 (data ❌)
value : 실제 data 의미 함

5-2) 사용방법 : object이름.key (ex: brand 넣으면, 'bmw'출력됨)
5-3) 사용방법 2 
*/

var dataObject = { 
  brand : 'BMW', 
  model : 520 };

console.log(dataObject.brand);  /*  5-2) 사용방법  */
console.log(dataObject['brand']);  /*  5-3) 사용방법 */
/*

6) object안에 array, object, function 등등 다 넣을 수 있음 */

var dataObject2 = { 
  brand : 'BMW', 
  model : 520,  

  array3 : [1,2,3],

  object2: {
    key2: 'value2',
    key3: 'value3'}
};

console.log(dataObject2.object2.key3); /* 사용방법 */
/* 


7)
data binding : 
자바스크립트로 데이터를 HTML에 꽂아넣는 작업

Q: array, object 내의 데이터(실전에서의 서버데이터)를 👉 html로 보내서 바꾸기
 */

var array7=['LG', 'samsung'];

var object7 = { brand:'apple' , price : 5000};

var arrayWithObject = [{brand:'amazon'}, {price:300}]

document.querySelector('#btn29').addEventListener('click',()=>{
  document.querySelector('#data29').innerHTML = array7[0]  /* array */

  document.querySelector('#data29_2').innerHTML = object7.price /* object */

  document.querySelector('#data29_3').innerHTML = arrayWithObject[0].brand /* array안의 object */
});


//  🦄c30  input과 change 이벤트 (인터랙티브 form 만들기: )

/* 
Q: 셔츠를 선택하면, 숨어있던 셔츠사이즈를 고를 수 있는 UI를, 등장시키는 기능만들기  



*/

/* 

●
change, input 이벤트 : 
form 안에서 사용자가 값을 입력할 수 있는 <input>, <select>, <textarea> 태그들에서, 
사용자가 값을 입력하거나 변경했을 때를 체크할 수 있는 이벤트


각각 발동되는 시점이 다른데 

1) input : input값이 변경될 때마다 실행됩니다.  (타이핑할때마다 계속 작동함)


2-1) change가 <input>태그인 경우: input값이 바뀌고, focus잃을때 작동함

(선택 후 다른곳을 클릭해야만(focus를 잃어야) 작동함)

2-2) change가 <select>태그인 경우 :  focus와 상관없이 , option 선택하면 작동함

(값이 변경될 때 바로 작동함 )




 



$('#option1').on('change', function(){
      
    if ( $('#option1').val() == '셔츠' ) {
      $('.size-select').show();
    }

});

*/