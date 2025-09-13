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

function getHumanChoice() {
    let userChoice = prompt("What is your choice?", "")
    let userChoiceLowerCase = userChoice.toLowerCase();
    return userChoiceLowerCase;
}

function playRound(humanChoice, computerChoice) {

    let computerScore = 0;
    let humanScore = 0;
    let humanLowerCase = humanChoice.toLowerCase();
    let computerLowerCase = computerChoice.toLowerCase();
    let human = humanLowerCase.trim();
    let computer = computerLowerCase.trim();
    
    //human wins
    if ((human=="rock" && computer=="scissors")|| (human=="paper" && computer=="rock") || (human=="scissors" && computer=="paper")){
        console.log("Human shows a " + human + ".");
        console.log("Computer shows a " + computer + ".");    
        console.log(human + " beats " + computer);
        humanScore++;
        console.log("Human scores " + humanScore + " point!");
    }

    else if (human==computer) {
        console.log("Human shows a " + human + ".");
        console.log("Computer shows a " + computer + ".");  
        console.log(human + " and " + computer + " are the same so no point!");
    }
    
    //fix this when user inputs a blank
    // else if (human.length=0) {
    //     console.log("Human shows nothing.");
    //     console.log("Computer shows a " + computer + ".");  
    //     console.log(computer + " beats " + human);
    //     computerScore++
    //     console.log("Computer scores " + computerScore + " point!");
    // }
    

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

    let numberOfRounds = prompt("How many rounds to you want to play?","");

    if(isNaN(numberOfRounds)||numberOfRounds<1){
        console.log("You need to enter a number!")
    }
    else {
        let humanScore = 0;
        let computerScore = 0;
        for (i = 0; i<numberOfRounds; i++) {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            
            console.log(`Round ${i+1}.`)
            scores = playRound(humanSelection, computerSelection);
            if (scores[0]!=0) {
                humanScore++;
            }
            if (scores[1]!=0) {
                computerScore++;
            }
        console.log("\n\n\n");
        }
        console.log(`Human scores ${humanScore} points! Computer scores ${computerScore} points!`);
    }
}
playGame();