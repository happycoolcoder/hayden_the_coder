const playBtn = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const match = document.querySelector(".match");
const options = document.querySelectorAll(".options button");

const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const hands = document.querySelectorAll(".hands");

const winner = document.querySelector(".winner");
const playerScore = document.querySelector(".player-score p");
const computerScore = document.querySelector(".computer-score p");

const score = document.querySelector(".score");
const button = document.querySelectorAll(".btn");

let pScore = 0;
let cScore = 0;

const computerOptions = ["rock", "paper", "scissors"]

function startGame() {
  introScreen.classList.add("fadeOut");
  match.classList.remove("fadeOut");
}

playBtn.addEventListener("click", startGame);


function compareHands(playerChoice, computerChoice) {

  if (playerChoice === computerChoice) {
    winner.innerHTML = "It is a tie";
    return;
  }

  //if player chooses rock
  if (playerChoice === "rock") {
    //computer chooses scissors
    if (computerChoice ==="scissors") {
      pScore++;
      winner.innerHTML = "Player Wins!"
      playerScore.innerHTML = pScore
    }
    //computer chooses paper
    else {
      cScore++;
      winner.innerHTML = "Computer Wins!"
      computerScore.innerHTML = cScore
    }
  }


  //if player chooses paper
  if (playerChoice === "paper") {
    //computer chooses rock
    if (computerChoice ==="rock") {
      pScore++;
      winner.innerHTML = "Player Wins!"
      playerScore.innerHTML = pScore
    }
    //computer chooses scissors
    else {
      cScore++;
      winner.innerHTML = "Computer Wins!"
      computerScore.innerHTML = cScore
    }
  }

  //if player chooses scissors
  if (playerChoice === "scissors") {
    //computer chooses rock
    if (computerChoice ==="rock") {
      pScore++;
      winner.innerHTML = "Computer Wins!"
      computerScore.innerHTML = cScore
    }
    //computer chooses paper
    else {
      cScore++;
      winner.innerHTML = "Player Wins!"
      playerScore.innerHTML = pScore
    }
  }



}

function optionAction(e) {
  winner.innerHTML = "Here he go..."
  playerHand.src = `./images/rock.png`;
  computerHand.src = `./images/rock.png`;

  const playerChoice = e.target.textContent;

  playerHand.style.animation = "shakePlayer 0.5s ease 4"
  computerHand.style.animation = "shakecomputer 0.5s ease 4"

  floor(5.67) = 5
}