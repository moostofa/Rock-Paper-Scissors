const options = ["Rock", "Paper", "Scissors"]

const winningPairs = [
    ["Rock", "Scissors"],
    ["Scissors", "Paper"],
    ["Paper", "Rock"]
]

// wait for user to click "Begin a game" button, then run the game() init function
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("start").addEventListener("click", () => game())
})

// play 1 round of the game
function playRound(playerSelection, computerSelection) {
    document.getElementById("start").style.display = "block"
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
    // hide the "start game" button after it is clicked
    document.getElementById("start").style.display = "none"

    // create buttons for rock, paper and scissors and display it in the "options" div
    const btnsDiv = document.getElementById("options")
    for (let option of options) {
        let btn = document.createElement("button")
        btn.innerHTML = option
        btn.value = option
        btn.classList = "option"
        btnsDiv.append(btn)
    }

    // listen for onclick event on each of the buttons
    const btns = document.querySelectorAll(".option")
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log(playRound(btn.value, options[Math.floor(Math.random() * options.length)]))
        })
    })
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