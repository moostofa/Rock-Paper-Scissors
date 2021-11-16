const options = ["Rock", "Paper", "Scissors"]

const winningPairs = [
    ["Rock", "Scissors"],
    ["Scissors", "Paper"],
    ["Paper", "Rock"]
]

// keep track of the number of rounds played
let round = 0

// create RPS buttons, and wait for user to click "Begin a game" button
document.addEventListener("DOMContentLoaded", () => {
    createButtons()
    // if user clicks "start a game" button, hide the "start" button and display the RPS buttons and results table
    document.getElementById("start").addEventListener("click", () => {
        document.getElementById("start").style.display = "none"
        document.getElementById("instructions").innerHTML = "Rock, paper, or scissors?"
        document.getElementById("options").style.display = "block"
        document.getElementById("results-table").style.display = "block"
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
        btn.classList = "btn btn-primary"

        // listen for "onclick" event for each RPS button - then, play 1 round of the game with that choice
        btn.addEventListener("click", () => {
            displayResult(playRound(btn.value))
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
    startButton.style.display = "inline"
    document.getElementById("options").style.display = "none"

    // check if the match is a tie
    if (playerSelection === computerSelection)
        return {"user":playerSelection, "computer":computerSelection, "result":"It's a tie!"}

    // find a win/loss pair. If not found, user chose an invalid option
    let result = "Invalid choice."
    for (let pair of winningPairs)
        if (playerSelection === pair[0] && computerSelection === pair[1])
            result = "You win!"
        else if (computerSelection === pair[0] && playerSelection === pair[1])
            result = "You lose."
    return {
        "user":playerSelection, 
        "computer":computerSelection, 
        "result":result
    }
}

// display the results of each round in a table format
function displayResult(result) {
    // give user the instruction to play another round if they want to
    document.getElementById("instructions").innerHTML = `${result["result"]} Play another round?`

    // create a table row for the current round
    const row = document.createElement("tr")
    let roundNumber = document.createElement("td")
    roundNumber.innerHTML = ++round;
    row.appendChild(roundNumber)

    // fill in row cells with Object values received from the playRound() function
    Object.values(result).forEach(value => {
        let resultCell = document.createElement("td")
        resultCell.innerHTML = value
        row.appendChild(resultCell)
    })
    document.getElementById("results").append(row)
}