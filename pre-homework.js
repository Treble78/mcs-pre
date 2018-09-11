


//1 
function HelloWorld (){alert('Hello World!')};

//2
function GiveMeAndSomeoneElse (misterX){alert('One for-'+ misterX + '. One - for me.')};

//3
function isLeapYear (year) {return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;};

//4
function ReverseMe (input){return input.split('').reverse().join('');}

//5
function TranscriptRNA (code) {return code.split('').map(function(el) {return {C:'G', G:'C', A:'U', T:'A'}[el]}).join('')}

//6
function actionWithMsg(text,type){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    type == 'encrypt'?steps = 3:type == 'decrypt'?steps = -3: steps = false;

    if(steps>0){return text.split('').map(function(ltr){
        var start = alphabet.indexOf(ltr)+steps;
        var end = start + 1;
        if(start>alphabet.length-1) {return alphabet.slice(start-26,end-26);}    
        else {return alphabet.slice(start,end);}
    }).join('')
    
  }

    else if(steps<0){return text.split('').map(function(ltr){
        var start = alphabet.indexOf(ltr)+steps;
        var end = start + 1;
        if(start == 0) {return alphabet.slice(0,1);} 
        else if(end == 0) {return alphabet.slice(-1);}   
        else {return alphabet.slice(start,end);}
    }).join('')
  }
}



//7
function isItAPangram(myText) {return [...'abcdefghijklmnopqrstuvwxyz'].every(function(letter){return myText.includes(letter)});}
    
//8
function Bob(phrase){

if(phrase == ''){return 'Fine. Be that way!'}

    else {
    if (phrase.toString().slice(-2,-1) == '?' || phrase.toString().slice(-2,-1) == '!'){  
       
    switch(phrase.toString().slice(-2)){
        case '?!': return `Calm down, I know what I'm doing!`;
        case '!?': return `Calm down, I know what I'm doing!`;
        case '!!': return `Whoa, chill out!`;
        case '??': return `Sure.`;
        default: return 'Whatever.';
        }
    }

    else {

    switch(phrase.toString().slice(-1)){

        case '!': return 'Whoa, chill out!';
        case '?': return 'Sure.';
        default : return 'Whatever.';
        }
    }

  }  
}


