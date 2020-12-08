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

/* 
document.querySelector('#title6_2').addEventListener('click',function( ));


html에 집어넣는 JS는 이제 그만, script 에서 모든 기능 개발

얘가 클릭이 일어나면~ 내부코드를 실행해주셈

method 구글링👉
click
keydown
scroll
...etc */

// 🦄c9 Bootstrap 사용하기와 모달창 UI 개발
/* 
UI만들기 공식
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

/* 🚀코딩 팁 : 먼저 한글로 알고리즘을 작성해보고, 그에 따라서 코딩함 */


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