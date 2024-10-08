let randomno = Math.floor(Math.random() * 100) + 1;  // Generating random number between 1 and 100
 console.log(randomno); 
const submit = document.querySelector('#subt');  // Correct selector for submit button
const userinp = document.querySelector('#guessfield');
const guesses = document.querySelector('.guesses');
const lastres = document.querySelector('.lastresult');
const loworhi = document.querySelector('.loworHi');
const button = document.querySelector('.newgamee');  // Use the existing 'Start New Game' button

let prevguess = [];
let numguess = 0;  // Start at 0 so that the first guess counts properly
let playgame = true;

// Initially hide the 'Start New Game' button until the game ends
button.style.display = 'none';

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent form submission
        const guess = parseInt(userinp.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (guess < 1 || guess > 100 || isNaN(guess)) {
        alert('Please enter a valid number between 1 and 100.');
    } else {
        prevguess.push(guess);
        if (numguess === 9) {  // On the 10th attempt, the game ends
            displayguess(guess);
            displaymess(`GAME OVER! The random number was ${randomno}`);
            endgame();
        } else {
            displayguess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomno) {
        displaymess(`YOU GUESSED IT RIGHT!`);
        endgame();
    } else if (guess < randomno) {
        displaymess('TOO LOW');
    } else if (guess > randomno) {
        displaymess('TOO HIGH');
    }
}

function displaymess(message) {
    loworhi.innerHTML = `<h2>${message}</h2>`;
}

function displayguess(guess) {
    userinp.value = '';
    guesses.innerHTML += `${guess}; `;
    numguess++;
    lastres.innerHTML = `${10 - numguess}`;  // Update remaining guesses correctly
}

function endgame() {
    userinp.value = '';
    userinp.setAttribute('disabled', '');  // Disable the input field after the game ends
    button.style.display = 'inline-block';  // Show the 'Start New Game' button
    playgame = false;
    newGame();
}

function newGame() {
    button.addEventListener('click', function () {
        randomno = Math.floor(Math.random() * 100) + 1;  // Reset the random number
        prevguess = [];
        numguess = 0;  // Reset guess count
        guesses.innerHTML = '';
        lastres.innerHTML = `10`;  // Reset remaining guesses to 10
        loworhi.innerHTML = '';  // Clear the message
        userinp.removeAttribute('disabled');  // Re-enable the input field
        button.style.display = 'none';  // Hide the 'Start New Game' button
        playgame = true;  // Restart the game
    });
}
