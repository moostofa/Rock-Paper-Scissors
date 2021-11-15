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
        document.getElementById("results").style.display = "block"
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

        // listen for "onclick" event for each RPS button - then, play 1 round of the game with that choice
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
        return {"user":playerSelection, "computer":computerSelection, "result":"It's a tie!"}

    // find a win/loss pair. If not found, user chose an invalid option
    for (let pair of winningPairs) {
        const win = pair[0]
        const lose = pair[1]
        if (playerSelection === win && computerSelection === lose)
            return {
                "user":playerSelection, 
                "computer":computerSelection, 
                "result":"You win!"
            }
        else if (computerSelection === win && playerSelection === lose)
            return {
                "user":playerSelection, 
                "computer":computerSelection, 
                "result":"You lose."
            }
    }
    return {
        "user":playerSelection, 
        "computer":computerSelection, 
        "result":"Invalid choice."
    }
}

function displayResult(result) {

}