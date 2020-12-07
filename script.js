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
document.querySelector().addEventListener('click',function( ));

html에 집어넣는 JS는 이제 그만, script 에서 모든 기능 개발

얘가 클릭이 일어나면~ 내부코드를 실행해주셈

method 구글링👉
click
keydown
scroll
...etc */