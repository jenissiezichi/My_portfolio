
const display = document.querySelector("#display");
const result1 = document.querySelectorAll(".btn");


result1.forEach(btn => {
  btn.addEventListener('click', function(){
    
if (btn.textContent === 'C')  
     display.value = "";
  else if(btn.textContent === '=') {
    try{
    display.value = eval(display.value);
  }
    catch{
      display.value = "Error";
    }}
    else 
      display.value += btn.textContent;
  });
});



