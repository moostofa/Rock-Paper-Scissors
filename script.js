const options = ["Rock", "Paper", "Scissors"]

const winningPairs = [
    ["Rock", "Scissors"],
    ["Scissors", "Paper"],
    ["Paper", "Rock"]
]

// create RPS buttons, and wait for user to click "Begin a game" button
document.addEventListener("DOMContentLoaded", () => {
    createButtons()
    // if user clicks "start a game" button, hide the "start" button and display the RPS buttons
    document.getElementById("start").addEventListener("click", () => {
        document.getElementById("start").style.display = "none"
        document.getElementById("options").style.display = "block"
    })
})

// create RPS buttons and display it in the "options" div, which will initially be hidden
function createButtons() {
    const btnsDiv = document.getElementById("options")
    btnsDiv.style.display = "none"

    for (let option of options) {
        let btn = document.createElement("button")
        btn.innerHTML = option
        btn.value = option

        // listen for "onclick" event for each RPS button
        btn.addEventListener("click", () => {
            console.log(playRound(btn.value))
        })
        btnsDiv.append(btn)
    }
}

// play 1 round of the game
function playRound(playerSelection) {
    // generate a random choice for the computer
    const computerSelection = options[Math.floor(Math.random() * options.length)]

    // reveal the button which allows user to play another round, and hide the RPS buttons
    let startButton = document.getElementById("start")
    startButton.innerHTML = "Play another round"
    startButton.style.display = "block"
    document.getElementById("options").style.display = "none"

    // check if the match is a tie
    if (playerSelection === computerSelection)
        return `It's a tie! Both you and the computer chose ${playerSelection}`

    // find a win/loss pair
    for (let pair of winningPairs) 
        if (playerSelection === pair[0] && computerSelection === pair[1])
            return {"winner":"You", "loser":"Computer"}
        else if (computerSelection === pair[0] && playerSelection === pair[1])
            return {"winner":"Computer", "loser":"You"}
    return `
    There is no winner because you did not choose Rock, paper or scissors. 
    You chose ${playerSelection}
    `
}