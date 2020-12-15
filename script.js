


/* 자바스크립트 로 만들어보기....실패

???? 아직 해결 못함 

선생님 답변: 
셀렉터.innerHTML = ‘~’ 

이건 ‘내부 HTML내용을 전부 이걸로 싹 바꿔주세요’ 라는 뜻입니다. 

그래서 반복문의 맨 마지막 600이라는 정보만 꽂혀있겠군요. 

반복문 다 돌린 뒤에 innerHTML = 어쩌구 를 한번만 하도록 합시다. 

var 어레이32 = [26,28,30,32,34,36];


var select32 = document.querySelector('#select32');
var select32_2 = document.querySelector('#select32_2');

select32.addEventListener('change',()=>{

  if(select32.value =='바지'){  

    for (let i = 0; i < 어레이32.length; i++) {
      var 템플릿 = `<option>${어레이32[i]}</option>`;      
    }
    select32_2.innerHTML = 템플릿;

  
}});



var 어레이32_2 = [100,200,300,400,500,600];

var select32 = document.querySelector('#select32');
var select32_2 = document.querySelector('#select32_2');

select32.addEventListener('change',()=>{

  if(select32.value =='셔츠'){  

    어레이32_2.forEach((i)=>{
    
      var 템플릿2 = `<option>${i}</option>`
      select32_2.innerHTML = 템플릿2; 
    })
}});

*/


