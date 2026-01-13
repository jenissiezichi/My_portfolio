
let computerresult = 0;
let humanresult =  0;
let name = prompt("Enter your name to proceed: ", '');
alert(`Youre Welcome, ${name}, You can begin...`);
let btn = document.getElementById("rock");
let btn2 = document.getElementById("papper");
let btn3 = document.getElementById("scissors");

let result = document.getElementById("result1");


  rock.onclick= function() {

const computermove = Math.random();
console.log(computermove);
let result1 ='';
if (computermove >= 0 && computermove < 1/3 ) {
    result1='Rock';
}

else if(computermove >= 1/3 && computermove < 2/3){
result1='Paper';
}

  else if ( computermove >= 2/3 && computermove <= 1){
result1='Scissor';
  }
 let result2 = '';
if (computermove >= 0 && computermove < 1/3 ) {
    result2='Its a Tie';
}

else if(computermove >= 1/3 && computermove < 2/3){
result2='You Lost';
 computerresult++;
}

  else if ( computermove >= 2/3 && computermove <= 1){
result2='You Won';
humanresult++;
  }

alert(`You chose Rock and the Computer chose ${result1} : ${result2}`);
alert(`You have : ${humanresult} points, Computer has : ${computerresult} points `);

}

papper.onclick = function () {
  const computermove = Math.random();
console.log(computermove);
let result11 ='';
if (computermove >= 0 && computermove < 1/3 ) {
    result11='Rock';
}

else if(computermove >= 1/3 && computermove < 2/3){
result11='Paper';
}

  else if ( computermove >= 2/3 && computermove <= 1){
result1='Scissor';
  }
let result2 = '';
if (computermove >= 0 && computermove < 1/3 ) {
    result2='You Won';
    humanresult++;
}

else if(computermove >= 1/3 && computermove < 2/3){
result2='Its a Tie';
}

  else if ( computermove >= 2/3 && computermove <= 1){
result2='You Lost';
computerresult++;
  }

alert(`You choose Papper and computer choose ${result11} : ${result2}`);
alert(`You have : ${humanresult} points, Computer has : ${computerresult} points `);

}

scissors.onclick = function () {
  let result111 ='';
   const computermove = Math.random();
console.log(computermove);

if (computermove >= 0 && computermove < 1/3 ) {
    result111='Rock';
}

else if(computermove >= 1/3 && computermove < 2/3){
result111='Paper';
}

  else if ( computermove >= 2/3 && computermove <= 1){
result111='Scissor';
  }
let result2 = '';
if (computermove >= 0 && computermove < 1/3 ) {
    result2='You Lost';
    computerresult++;
}

else if(computermove >= 1/3 && computermove < 2/3){
result2='You Won';
humanresult++;
}

  else if ( computermove >= 2/3 && computermove <= 1){
result2='Its a Tie';
  }

alert(`You choose Scissor and computer choose ${result111} : ${result2}`);
alert(`You have : ${humanresult} points, Computer has ${computerresult} points `);

}

 result1.onclick = function () {
alert(`You have : ${humanresult} points, Computer has : ${computerresult} points `);
}





