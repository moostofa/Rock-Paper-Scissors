const options = ["Rock", "Paper", "Scissors"]

const winningPairs = [
    ["Rock", "Scissors"],
    ["Scissor", "Paper"],
    ["Paper", "Rock"]
]

function getUserChoice() {
    let choice = prompt("Rock, paper, or scissors? ").trim().toLowerCase().replace(/[^a-z]/g, "")
    return choice.charAt(0).toUpperCase() + choice.slice(1)
}

// generate a random choice for the computer
function computerPlay() {
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
        return `It's a tie! Both you and the computer chose ${playerSelection}`

    for (let pair of winningPairs) 
        if (playerSelection === pair[0] && computerSelection == pair[1])
            return `You win! ${playerSelection} beats ${computerSelection}`
        else if (computerSelection === pair[0] && playerSelection == pair[1])
            return `You lose! ${computerSelection} beats ${playerSelection}`

    return `There is no winner because you did not choose Rock, paper or scissors. You chose ${playerSelection}`
}

const playerSelection = getUserChoice()
const computerSelection = computerPlay()

console.log(`Player selection: ${playerSelection}`)
console.log(`Computer selection: ${computerSelection}`)

game(playerSelection, computerSelection)