'use strict';

let score = 0;

let yourName = prompt('what is your name?');
alert('welcome' + ' ' + yourName);

age();
gender();
myName();
myColor();
sport();
guessNum();
favColor();



function age()
{
    let age = prompt('Is my age 23 ?');
    if(age == 'yes')
    {
        console.log('good answer');
    }
    else
    {
        alert('No good luck');
    }
}


function gender()
{
    let gender = prompt('Is my gender a female?');
    if(gender.toLowerCase() ==='yes' || gender.toLowerCase() ==='y')
    {
        alert('Correct answer');
        score++;
    }
    else if(gender.toLowerCase() ==='no' || gender.toLowerCase() ==='n')
    {
        alert('Wrong!');
    }
    else
    {
        alert('invalid input, Refresh the page if u want to play again!');
    }
}


function myName()
{
    let myName  = prompt(' is my name Fidaa'); 
    if(myName.toLowerCase() ==='yes' || myName.toLowerCase() ==='y')
    {
        alert('Hello correct answer');
    }
    else if(myName.toLowerCase() ==='no' || myName.toLowerCase() ==='n')
    {
        alert('no good luck');
    }
    else
    {
        alert('invalid input, Refresh the page if u want to play again!');
    }
}

function myColor()
{
    let Color = prompt('Is my favourite color red');
    if (Color.toLowerCase() ==='yes' || Color.toLowerCase() ==='y')
    {
        alert('correct answer');
    }
    else if(Color.toLowerCase() ==='no' || Color.toLowerCase() ==='n')
    {
        alert('sorry try again');
    }
    else
    {
        alert('invalid input, Refresh the page if u want to play again!');
    }
}
 
function sport()
{
    let mySport = prompt('is swimming is my favourite sport');
    if (mySport.toLowerCase() ==='yes' || mySport.toLowerCase() ==='y')
    {
        alert('you are correct !');
    }
    else if(mySport.toLowerCase() ==='no' || mySport.toLowerCase() ==='n')
    {
        alert('you are wrong!');
    }
    else
    {
        alert('invalid input, Refresh the page if u want to play again!');
    }
}

function guessNum()
{
    let myNumber = 6;
    let userGuess ;
    for (let i=0;i<4;i++) 
    {
            userGuess = prompt(' guess what is my favourit number between 1 - 6');
        if (userGuess < myNumber)
        {
            alert('you are too low,try again');
        }
        else if (userGuess > myNumber)
        {
            alert('you are too high,try again');
        }
        else if (userGuess == myNumber)
        {
            alert('wow, correct answer');
            i = 6;
            score++;
        }
    }
    
}

function favColor()
{
    alert('Can you guess what is my fav color');
    let attemps = 6;
    let myColors =['pink','blue','red', 'yello'];
    for(let j = -5; j<=attemps;j++)
    {
        let userColor = prompt(' pink, black, blue, green, red, yello - ' +attemps+' Attempts left');
            
        for(let i = 0 ; i < myColors.length; i++ )
        {
            if(userColor.toLowerCase() === myColors[i])
            {
                alert('correct answer');               
                attemps = j;
                score++;
            }
                
        }
        attemps--;    
    }
}

  


  

