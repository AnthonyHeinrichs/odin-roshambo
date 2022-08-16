// JS will load as soon as the HTML page is loaded.
window.onload = function() {
  // This variable stores the amount of wins by the player(user).
  let userWins = 0
  // This variable stores the amount of wins by the computer.
  let computerWins = 0

  // Grab all the HTML elements that need to be listened to
  // When new game button is selected, it runs the newGame function which reloads the page
  const newGameBtn = document.getElementById('newGameButton');
  newGameBtn.addEventListener('click', newGame)

  const game = document.getElementById('game')

  const wins = document.getElementById('wins')

  // Selecting an icon will run setchoices function and pass the choice based on the icon selected
  const rockButton = document.getElementById('rockButton')
  rockButton.addEventListener('click', setChoices.bind( this, 0))

  const paperButton = document.getElementById('paperButton')
  paperButton.addEventListener('click', setChoices.bind( this, 1))
  
  const scissorsButton = document.getElementById('scissorsButton')
  scissorsButton.addEventListener('click', setChoices.bind( this, 2))

  const roundResult = document.getElementById('roundResult')

  const gameResult = document.getElementById('gameResult');

  // Setting wins to show on page refresh
  const showWinsUser = document.getElementById('userWins')
  showWinsUser.innerHTML = `Your wins: ${userWins}`

  const showWinsComputer = document.getElementById('computerWins') 
  showWinsComputer.innerHTML = `Computer wins: ${computerWins}`
 
  // Reloads page if user selects the new game button
  function newGame() {
    document.location.reload(true)
  }
  
  /* Function will check if either the player or computer have 5 wins and return a message.
  This function will also remove visability of the main section and the wins counter, 
  it will then show the new game button
  */
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

  /* 
  Function will set the choices for the player and computer and then check who wins the round.
  It will then run the check for five wins function that will check if either player has now won the game.
  */
  function setChoices(userChoice) {
    let computerChoice = Math.floor(Math.random() * 3)
    checkWinner(userChoice, computerChoice)
    checkForFiveWins()
  }

  /* 
  Function that takes two parameters checks who won the round.
  The first parameter is the user's input and the second is the random number that is given by the computer.
  */
  function checkWinner(user, computer) {
    // First the function checks if both the player(user) and computer selected the same weapon
    if (user === computer) {
      return roundResult.innerHTML = 'You both guessed the same!'
    }
    // When user selects rock, it will check if computer chose scissors or paper and return the result. 
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
    // When user selects paper, it will check if computer chose rock or scissors and return the result.
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
    // When user selects scissors, it will check if computer chose paper or rock and return the result.
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
}
