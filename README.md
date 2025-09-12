A Rock Paper Scissors Game using Javascript

The game is played between a computer and a user.

The getComputerChoice() function generates a random value for the computer between rock, paper and scissors. Using Math.random(), the computer generates a random number between 0 and 1. I categorized the rock, paper and scissors between 0 and 0.33, between 0.34 and 0.66, and between 0.67 and 1 respectively. 

The getHumanChoice() function takes in the value of rock, paper or scissors from a user.

The humanScore() function tallies the amount of times the user won over the computer. The computerScore() function tallies the amount of times the computer won over the user.

The playRound() function loops over the amount of rounds requested by the user.

Rules: Rock wins over scissors, scissors win over paper, paper wins over rock. Scissors lose over rock, rock loses over paper, paper loses over scissors.