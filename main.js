const options = ["Rock", "Paper", "Scissors"]

const winningPairs = [
    ["Rock", "Scissors"],
    ["Scissor", "Paper"],
    ["Paper", "Rock"]
]

// wait for user to click "Begin a game" button, then run the JS code
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("start").addEventListener("click", () => game())
})


// get user input and canonicalize it, and check if it is a valid option
function getUserChoice() {
    let choice = prompt("Rock, paper, or scissors? ").trim().toLowerCase().replace(/[^a-z]/g, "")
    return choice.charAt(0).toUpperCase() + choice.slice(1)
}

// generate a random choice for the computer
function computerPlay() {
    return options[Math.floor(Math.random() * options.length)]
}

// play 1 round of the game
function playRound(playerSelection, computerSelection) {
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

// play a game - by default, a game will consist of 5 rounds
function game() {
    console.log("No game functionality yet!")
    const btns = document.getElementById("options")
    for (let option of options) {
        let btn = document.createElement("button")
        btn.innerHTML = option
        btn.value = option
        btns.append(btn)
    }
    /*
    for (let i = 1; i <= 5; i++) {
        const playerSelection = getUserChoice()
        const computerSelection = computerPlay()
        
        console.log(`Round ${i} - Player selection: ${playerSelection}`)
        console.log(`Round ${i} - Computer selection: ${computerSelection}`)

        const result = playRound(playerSelection, computerSelection)

        console.log(`Round ${i} - result: ${result}`)
        alert(result)
    }
    */
}