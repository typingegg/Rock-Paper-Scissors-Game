// alert("Hello World!")
// console.log("Hello World")

// getComputerChoice()
// Computer can only get rock, paper, scissors.
// Use Math.random(). It returns values between 0 and 1. So make rock between 0 and 0.33, paper between .34 and .66, scissors between 0.67 and 1. ✅

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


// get choices from getComputerChoice and getHumanChoice. ✅
// set rules of what wins between rock, paper and scissors
// if rock and paper, paper wins. if paper and scissors, paper wins. if rock and scissors, rock wins.
// keep track of scores


function playRound(humanChoice, computerChoice) {

    let computerScore = 0;
    let humanScore = 0;
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    
    //human wins
    if (human=="rock" && computer=="scissors") {
        console.log("Human shows a " + human + ".");
        console.log("Computer shows a " + computer + ".");    
        console.log(human + " beats " + computer);
        humanScore++;
        console.log("Human scores " + humanScore + " point!");
    }

    else if (human=="paper" && computer=="rock") {
        console.log("Human shows a " + human + ".");
        console.log("Computer shows a " + computer + ".");  
        console.log(human + " beats " + computer);
        humanScore++;
        console.log("Human scores " + humanScore + " point!");
    }
    
    else if (human=="scissors" && computer=="paper") {
        console.log("Human shows a " + human + ".");
        console.log("Computer shows a " + computer + ".");  
        console.log(human + " beats " + computer);
        console.log("Human scores " + humanScore + " point!");
        humanScore++;
    }

    else if (human==computer) {
        console.log("Human shows a " + human + ".");
        console.log("Computer shows a " + computer + ".");  
        console.log(human + " and " + computer + " are the same so no point!");
    }

    // computer wins
    else {
        console.log("Human shows a " + human + ".");
        console.log("Computer shows a " + computer + ".");  
        console.log(computer + " beats " + human);
        computerScore++
        console.log("Computer scores " + computerScore + " point!");
    }
    return [humanScore, computerScore];
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;
    for (i = 0; i<5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        scores = playRound(humanSelection, computerSelection);
        if (scores[0]!=0) {
            humanScore++;
        }
        if (scores[1]!=0) {
            computerScore++;
        }
    }

    console.log(humanScore,computerScore);

}

playGame();

function playSumthing(){
    for (i = 0; i < 5; i++) {
        prompt("What's");
    }
}
// playSumthing(); 

// ask how many rounds are we playing?
// start the first round, ask for the human choice, print the results of the first round..
// start the second round, ask for the human choice, print the results..
// so on until 5 rounds
