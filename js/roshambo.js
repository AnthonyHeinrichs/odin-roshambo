window.onload = function() {
  // This variable stores the amount of wins by the player(user).
  let userWins = 0
  // This variable stores the amount of wins by the computer.
  let computerWins = 0

  // Function that takes two parameters checks who won the round.
  // The first parameter is the user's input and the second is the random number that is given by the computer.
  function checkWinner(user, computer) {
    if (user === computer) {
      return console.log('You both guessed the same!')
    } 
    if (user === 0) {
      if (computer == 2) {
      userWins += 1
      console.log('wins: ', userWins, computerWins)
      return console.log('You win!')
      } else {
      computerWins += 1
      console.log('wins: ', userWins, computerWins)
      return console.log('You lose!')
      }
    }
    if (user === 1) {
      if (computer == 0) {
      userWins += 1
      console.log('wins: ', userWins, computerWins)
      return console.log('You win!')
      } else {
      computerWins += 1
      console.log('wins: ', userWins, computerWins)
      return console.log('You lose!')
      }
    }
    if (user === 2) {
      if (computer == 1) {
      userWins += 1
      console.log('wins: ', userWins, computerWins)
      return console.log('You win!')
      } else {
      computerWins += 1
      console.log('wins: ', userWins, computerWins)
      return console.log('You lose!')
      }
    }
  }

  // This function gets a prompt from the user, at the moment a number between 1-3 then reduces it by 1
  // Then get a random integer between 0-2 for the computer
  // Then run the function to check who wins the round
  function runGame() {
    let userAnswer = prompt('What will be your tool of choice? 1 - rock, 2 - paper, 3 - scissors') - 1
    let computerChoice = Math.floor(Math.random() * 3)  
    checkWinner(userAnswer, computerChoice)
  }

  const newGameBtn = document.getElementById("newGameButton");
    newGameBtn.addEventListener('click', newGame)

    function newGame() {
      runGame()
    }
}
