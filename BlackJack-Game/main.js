let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
// Write the conditional according to these rules:

// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")

//19 Create a new function called startGame() that calls renderGame()
function startGame() {
    renderGame()
}
// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

function renderGame() {
    // 3. Render the cards on the page using this format -> "Cards: 10 4"
    cardsEl.textContent = "Cards: "

    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    // CASHOUT
    // console.log(hasBlackJack)
    // console.log(message)
    // console.log(isAlive)
    messageEl.textContent = message
}

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
    // console.log("Drawing a new card from the deck!")
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 7
    // 2. Add the new card to the sum variable
    sum +=
        // Push the card to the cards array
        cards.push(card)
    // 3. Call startGame() -- changed to renderGame
    renderGame()
}
