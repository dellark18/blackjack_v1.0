// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let player = {
//     name: "Bamidele",
//     chips: 150
// }  // I'll work on the money counter in V2.0

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
message = ""

let messageEl = document.getElementById("message-el")
let sumEl =document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) +1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] 
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
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
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card 
    cards.push(card)
    renderGame()
    }
    
}

