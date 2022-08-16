window.onload = function() {
  // This variable stores the amount of wins by the player(user).
  let userWins = 0
  // This variable stores the amount of wins by the computer.
  let computerWins = 0

  // Grabbing all the HTML elements I need to listen to
  const newGameBtn = document.getElementById('newGameButton');
  newGameBtn.addEventListener('click', newGame)

  const game = document.getElementById('game')

  const wins = document.getElementById('wins')

  const rockButton = document.getElementById('rockButton')
  rockButton.addEventListener('click', setChoices.bind( this, 0))

  const paperButton = document.getElementById('paperButton')
  paperButton.addEventListener('click', setChoices.bind( this, 1))
  
  const scissorsButton = document.getElementById('scissorsButton')
  scissorsButton.addEventListener('click', setChoices.bind( this, 2))

  const roundResult = document.getElementById('roundResult')

  const gameResult = document.getElementById('gameResult');

  const showWinsUser = document.getElementById('userWins')
  showWinsUser.innerHTML = `Your wins: ${userWins}`

  const showWinsComputer = document.getElementById('computerWins') 
  showWinsComputer.innerHTML = `Computer wins: ${computerWins}`
 

  function newGame() {
    document.location.reload(true)
  }
  
  // Function will check if either the player or computer have 5 wins and return a message
  function checkForFiveWins() {
    showWinsUser.innerHTML = `Your wins: ${userWins}`
    showWinsComputer.innerHTML = `Computer wins: ${computerWins}`
    if (userWins === 5) {
      game.classList.remove('is-visible')
      wins.classList.remove('is-visible')
      newGameBtn.classList.add('is-visible')
      return gameResult.innerHTML = 'You won the game!'
    } else if (computerWins === 5) {
      game.classList.remove('is-visible')
      wins.classList.remove('is-visible')
      newGameBtn.classList.add('is-visible')
      return gameResult.innerHTML = 'You lost the game :('
    } else {
      return
    }
  }

  // function will set the choices for the player and computer and then check who wins the round.
  // It will then run the check for five wins function that will check if either player has now won the game.
  function setChoices(userChoice) {
    let computerChoice = Math.floor(Math.random() * 3)
    checkWinner(userChoice, computerChoice)
    checkForFiveWins()
  }

  // Function that takes two parameters checks who won the round.
  // The first parameter is the user's input and the second is the random number that is given by the computer.
  function checkWinner(user, computer) {
    if (user === computer) {
      return roundResult.innerHTML = 'You both guessed the same!'
    } 
    if (user === 0) {
      if (computer == 2) {
      userWins += 1
      console.log('wins: ', userWins, computerWins)
      return roundResult.innerHTML = 'Computer chose scissors. You win!'
      } else {
      computerWins += 1
      console.log('wins: ', userWins, computerWins)
      return roundResult.innerHTML = 'Computer paper. You lose!'
      }
    }
    if (user === 1) {
      if (computer == 0) {
      userWins += 1
      console.log('wins: ', userWins, computerWins)
      return roundResult.innerHTML = 'Computer chose rock. You win!'
      } else {
      computerWins += 1
      console.log('wins: ', userWins, computerWins)
      return roundResult.innerHTML = 'Computer chose scissors. You lose!'
      }
    }
    if (user === 2) {
      if (computer == 1) {
      userWins += 1
      console.log('wins: ', userWins, computerWins)
      return roundResult.innerHTML = 'Computer chose paper. You win!'
      } else {
      computerWins += 1
      console.log('wins: ', userWins, computerWins)
      return roundResult.innerHTML = 'Computer chose rock. You lose!'
      }
    }
  }

  // Only show new game button if the game hasn't started or if the computer or player just won.
  // Show user if they tied, lost or won each round.
  // Show user if they lost or won a game.
  // Reset wins after either player or computer reach 5 and display new game button.
  
  
}
