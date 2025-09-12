// alert("Hello World!")
// console.log("Hello World")

// getComputerChoice()
// Computer can only get rock, paper, scissors.
// Use Math.random(). It returns values between 0 and 1. So make rock between 0 and 0.33, paper between .34 and .66, scissors between 0.67 and 1. ✅

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomWholeNumber = Math.floor(Math.random()*100);

    if (randomWholeNumber <= 33) {
        return randomWholeNumber = "Rock";
    }
    else if (randomWholeNumber >= 67) {
        return randomWholeNumber = "Scissors";
    }
    else {
        return randomWholeNumber = "Paper";
    }
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let userChoice = prompt("What is your choice?", "")
    let userChoiceLowerCase = userChoice.toLowerCase();
    return userChoiceLowerCase;
}

// do 5 rounds
// get choices from getComputerChoice and getHumanChoice. ✅
// set rules of what wins between rock, paper and scissors
// if rock and paper, paper wins. if paper and scissors, paper wins. if rock and scissors, rock wins.
// keep track of scores
function playRound(humanChoice, computerChoice) {

    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    
    //human wins
    if (human=="rock" && computer=="scissors") {
        console.log("Human shows a " + human + ".");
        console.log("Computer shows a " + computer + ".");    
        console.log(human + " beats " + computer);
        humanScore++;
        console.log("Human scores " + humanScore + "point/s!");
    }

    else if (human=="paper" && computer=="rock") {
        console.log("Human shows a " + human + ".");
        console.log("Computer shows a " + computer + ".");  
        console.log(human + " beats " + computer);
        humanScore++;
        console.log("Human scores " + humanScore + "point/s!");

    }
    
    else if (human=="scissors" && computer=="paper") {
        console.log("Human shows a " + human + ".");
        console.log("Computer shows a " + computer + ".");  
        console.log(human + " beats " + computer);
        humanScore++;
        console.log("Human scores " + humanScore + "point/s!");

    }

    else if (human==computer) {
        console.log("Human shows a " + human + ".");
        console.log("Computer shows a " + computer + ".");  
        console.log(human + " and " + computer + " are the same so no point!");
    }

    else {
        console.log("Human shows a " + human + ".");
        console.log("Computer shows a " + computer + ".");  
        console.log(computer + " beats " + human);
        computerScore++;
        console.log("Computer scores " + computerScore + "point/s!");

    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
// console.log('Hello'.toLowerCase());

// function playGame(playRound){
//     for let(i = 0; i>5; i++){
//         return;
//     }
// }

// playGame();