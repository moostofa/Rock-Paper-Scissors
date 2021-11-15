const options = ["Rock", "Paper", "Scissors"]

const winningPairs = [
    ["Rock", "Scissors"],
    ["Scissors", "Paper"],
    ["Paper", "Rock"]
]

// create RPS buttons, and wait for user to click "Begin a game" button to run the game() init function
document.addEventListener("DOMContentLoaded", () => {
    // create buttons for rock, paper and scissors and display it in the "options" div, which will initially be hidden
    const btnsDiv = document.getElementById("options")
    btnsDiv.style.display = "none"
    for (let option of options) {
        let btn = document.createElement("button")
        btn.innerHTML = option
        btn.value = option
        btn.classList = "option"
        btnsDiv.append(btn)
    }

    // if user clicks "start a game" button, play a round of rock, paper, scissors
    document.getElementById("start").addEventListener("click", () => game())
})

// play 1 round of the game
function playRound(playerSelection, computerSelection) {
    document.getElementById("start").style.display = "block"
    document.getElementById("options").style.display = "none"

    if (playerSelection === computerSelection)
        return `It's a tie! Both you and the computer chose ${playerSelection}`

    for (let pair of winningPairs) {
        const winner = pair[0]
        const loser = pair[1]

        if (playerSelection === winner && computerSelection === loser)
            return `You win! ${playerSelection} beats ${computerSelection}`
        else if (computerSelection === winner && playerSelection === loser)
            return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    return `There is no winner because you did not choose Rock, paper or scissors. You chose ${playerSelection}`
}

// display RPS buttons and start a game state
function game() {
    document.getElementById("start").style.display = "none"
    // display the RPS buttons and listen for onclick event on each of the buttons
    document.getElementById("options").style.display = "block"
    const btns = document.querySelectorAll(".option")
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            // 1st parameter: user's choice, 2nd parameter = randomly generated choice for computer
            console.log(playRound(btn.value, options[Math.floor(Math.random() * options.length)]))
        })
    })
}