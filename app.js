let us=0;
let cs=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3); //for 3 choices
    return options[randIdx];
}

const drawgame=()=>{
    console.log("game drawn");
    msg.innerText="game was drawn, play again";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        us++;
        userscorepara.innerText=us;
        console.log("You Win!");
        msg.innerText=`You Win, ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        cs++;
        compscorepara.innerText=cs;
        console.log("You Lose");
        msg.innerText=`You Lose, ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice=",userChoice);
    //generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice==compChoice){
        drawgame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice==="paper"? false:true;

        }
        else if(userChoice=="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

    

}


choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        
        playGame(userChoice);
    }); 
});
