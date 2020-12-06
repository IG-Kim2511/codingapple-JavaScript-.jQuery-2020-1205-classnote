// ●

//🦄c2 자바스크립트의 목적과 셀렉터

//  "=" 뜻 : 오른쪽을 왼쪽에 넣어주세요 라는 뜻 . 같다는 뜻이 아님
// selector, method

document.getElementById("test").innerHTML = "디즈니 innerHTML✋";

document.getElementById("test").style.color = "red";



// 🦄c3 onclick 속성으로 버튼 기능개발: Alert 박스 만들기

// 🦄c4 function 문법으로 코드 줄이기/ 에러 체크하기

// function: 긴 js문장을 한단어로 축약,여러번 재사용 할때
//html문서 onclick안에 function실행어 사용 가능

// 콘솔창에서 null: 텅 비었다는 뜻, 보통 selector를 못찾을때 나옴

// 팁 : 콘솔창의 error메시지 : 그대로 복사해서 구글링하면 해결 가능

function 안내창닫기(){
    document.getElementById('alert').style.display = 'none';
  }

  안내창닫기();

  
// 🦄5 parameter : function을 쓰는 이유 (function의 두번째 기능)
