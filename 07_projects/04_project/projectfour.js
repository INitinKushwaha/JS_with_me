let randomNumber =  parseInt(Math.random() *100 + 1);

const  submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrhi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess=[]
let numGuess =1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess =parseInt(userInput.value)
        valideteGuess(guess)
    })
}

function valideteGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if( guess < 1){
        alert('Please enter a number greater than 1')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over! Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulations! You got it right`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Too low! Try again`)
    }else if(guess > randomNumber){
        displayMessage(`Too high! Try again`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} : `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrhi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value =''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h1 id='newGame'>Start new game</h1>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGamebutton = document.querySelector('#newGame')
    newGamebutton.addEventListener('click',function(e){
        randomNumber =  parseInt(Math.random() *100 + 1);
        numGuess = 1
        prevGuess = []
        lowOrhi.innerHTML = ''
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        p.parentNode.removeChild(p)
        playGame = true
    })
}






