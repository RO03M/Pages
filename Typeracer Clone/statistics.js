let lettersTyped = 0;
let wordsTyped = 0;
let correctWords = 0;
let wrongWords = 0;

document.querySelector(".textInput").addEventListener('keyup', (e) => {
    lettersTyped++;
    if (e.keyCode == 32) {
        wordsTyped++;
    }
    document.querySelector(".lettersTyped").innerHTML = lettersTyped;
    document.querySelector(".wordsTyped").innerHTML = wordsTyped;
    document.querySelector(".correctTyped").innerHTML = correctWords;
    document.querySelector(".wrongTyped").innerHTML = wrongWords;
});

function time() {
    let date = new Date();
    return date.getTime();
}

function WPM(wordsTyped, timePassed) {
    timePassed = timePassed / 1000;//seconds transformation
    console.log(timePassed)
    return wordsTyped / timePassed;
}