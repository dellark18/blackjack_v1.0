let firstCard = 9
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
message = ""

let messageEl = document.getElementById("message-el")
let sumEl =document.getElementById("sum-el")
let CardsEl = document.getElementById("cards-el")

function startGame() {
    CardsEl.textContent = "Cards " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        let message= "Do you want to draw a new card?"
        messageEl.textContent = message
    } else if (sum === 21) {
        let message = "Wohoo! You've got Blackjack!"
        messageEl.textContent = message
        hasBlackJack = true
    } else {
        let message = "You're out of the game!"
        messageEl.textContent = message
        isAlive = false
    }
    console.log(message)
}

function newCard() {
    console.log("Drawing a new card from the deck!")
}


