const options = ["Rock", "Paper", "Scissors"]

const winningPairs = [
    ["Rock", "Scissors"],
    ["Scissors", "Paper"],
    ["Paper", "Rock"]
]

// create RPS buttons, and wait for user to click "Begin a game" button to run the game() function
document.addEventListener("DOMContentLoaded", () => {
    // create RPS buttons and display it in the "options" div, which will initially be hidden
    const btnsDiv = document.getElementById("options")
    btnsDiv.style.display = "none"
    for (let option of options) {
        let btn = document.createElement("button")
        btn.innerHTML = option
        btn.value = option

        // add an "onclick" eventListener to each RPS button
        btn.addEventListener("click", () => {
            // 1st parameter: user's choice, 2nd parameter = randomly generated choice for computer
            console.log(playRound(btn.value, options[Math.floor(Math.random() * options.length)]))
        })
        btnsDiv.append(btn)
    }
    // if user clicks "start a game" button, display the RPS buttons
    document.getElementById("start").addEventListener("click", () => {
        // hide start button and display the RPS buttons 
        document.getElementById("start").style.display = "none"
        document.getElementById("options").style.display = "block"
    })
})

// play 1 round of the game
function playRound(playerSelection, computerSelection) {
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