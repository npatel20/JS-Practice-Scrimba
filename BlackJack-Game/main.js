let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }

    // CASHOUT
    // console.log(hasBlackJack)
    console.log(message)
    // console.log(isAlive)
}

