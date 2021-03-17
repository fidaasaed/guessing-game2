'use strict';
let yourName = prompt('what is your name?');
alert('welcome' + ' ' + yourName);

let age = prompt('Is my age 23 ?');
if(age == 'yes')
{
    console.log('good answer');
}
else{
    alert('No good luck');
}
let gender = prompt('Is my gender a female?');
if(gender ==='yes')
{
    alert('Correct answer');
}
else
{
    alert('sorry do not match');

}
let myName  = prompt(' is my name Fidaa'); 
if(myName.toUpperCase() == 'YES')
 {
alert('Hello correct aswer');
}
else{
    alert('no good luck');
}
 
let Color = prompt('Is my favourite color red');
if (Color.toLowerCase() === 'no')
{
alert('correct answer');
}
else 
{
    alert('sorry try again');
}

let mySport = prompt('is swimming is my favourite sport');
if (mySport === 'yes')
{
alert('you are correct !');
}
else
{
    alert('you are wrong!');
}

let myNumber = 6;
let q6 ;
for (let i=0;i<4;i++) 
 q6 = prompt(' guess what is my favourit number');
 if (q6 < myNumber)
  {
        alert('you are too low,try again');
  }


 else if (q6 > myNumber)
{
    alert('you are too high,try again');

}

else if (q6 == myNumber)
{
    alert('wow, correct answer');
    i = 6;
    score++;
  }

  let score = 0;
  let colors =['pink','blue','red', 'yello'];
  let favColors;
  let correct = false;
  for(let i = 1; i<=6;i++)
  {
      favColors = prompt('what is my fav color');}
  for(let i = 1 ; i < colors.length; 1++ ){
      if(favColors === colors[i]){
      
          correct = true;
          score++;
          break;
      }
  }
  if (correct)
  {
      alert('correct answer');
      break;
  }


  

