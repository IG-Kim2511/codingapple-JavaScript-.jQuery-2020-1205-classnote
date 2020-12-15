
var 어레이32 = [26,28,30,32,34,36];


var select32 = document.querySelector('#select32');
var select32_2 = document.querySelector('#select32_2');

select32.addEventListener('change',()=>{

  if(select32.value =='바지'){  

    for (let i = 0; i < 어레이32.length; i++) {
      var 템플릿 = `<option>${어레이32[i]}</option>`;
      select32_2.innerHTML = 템플릿;
      
    }
  
}});



var 어레이32_2 = [100,200,300,400,500,600];

var select32 = document.querySelector('#select32');
var select32_2 = document.querySelector('#select32_2');

select32.addEventListener('change',()=>{

  if(select32.value =='셔츠'){  

    어레이32_2.forEach((i)=>{
    
      select32_2.innerHTML = `<option>${i}</option>`;
    })
}});



