// ●

//🦄c2 자바스크립트의 목적과 셀렉터
console.log("C 02 자바스크립트의 목적과 셀렉터");

//  "=" 뜻 : 오른쪽을 왼쪽에 넣어주세요 라는 뜻 . 같다는 뜻이 아님
// selector, method

document.getElementById("test").innerHTML = "디즈니✋";

document.getElementById("test").style.color = "red";



// 🦄c3 


// 🦄c4 function 문법으로 코드 줄이기/ 에러 체크하기
console.log("●C 04 ");

// function: 긴 js문장을 한단어로 축약,여러번 재사용 할때
//html문서 onclick안에 function실행어 사용 가능

function 안내창닫기(){
    document.getElementById('alert').style.display = 'none';
  }

  안내창닫기();
