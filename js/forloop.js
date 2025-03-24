
/*for(let i=0;i<100;i+=5){
    if(i==50){
        break;
    }
    console.log(i);
}*/


const min=1;
const max=100;
const answer=Math.floor(Math.random()*(max-min+1))+min;
let attempts=0;
let guess;
let running=true;
while(running){
    guess=window.prompt(`enter a number between ${min} and ${max}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("enter a valid number");
    }
    else if(guess<min||guess>max){
        window.alert("enter a valid number");
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("too low");
        }
        else if(guess>answer){
            window.alert("too high");
        }
        else{
            window.alert(`you are correct.attempts =${attempts}`);
            running=false;
        }
           
    }
}
console.log("hello");
