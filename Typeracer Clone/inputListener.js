document.querySelector(".textInput").addEventListener('keyup', (e) => {
    let nowWord = document.querySelector(`#span${pos}`).innerHTML;
    let inputValue = e.target.value.trim();
    isCorrectUntil(inputValue, nowWord);
});

function isCorrectUntil(inputValue, nowWord) {//checks is everything if correct until whats already was wrote
    let writtenSize = inputValue.length;
    let wordCompatible = nowWord.substring(0, writtenSize);
    if (inputValue == wordCompatible) {
        document.querySelector(`#span${pos}`).style.backgroundColor = "gray";
    } else {
        document.querySelector(`#span${pos}`).style.backgroundColor = "red";
    }
}

function isCorrect(inputValue, nowWord) {
    if (inputValue == nowWord) {
        correctWords++;
        return true;
    } else {
        wrongWords++;
        return false;
    }
}
