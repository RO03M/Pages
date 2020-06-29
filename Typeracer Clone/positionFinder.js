let pos = 0;//equals to id
let initialTime;
let finishTime;
let isFirstType = true;

document.querySelector('.textInput').addEventListener('keydown', (e) => {
    if (isFirstType) {
        isFirstType = false;
        initialTime = time();
        let wpmInterval = setInterval(() => {
            document.querySelector('.WPMTEXT').innerHTML = WPM(lettersTyped, time() - initialTime);
        }, 1000);
    }
    if (e.keyCode == 32) {//space keycode
        let nowWord = document.querySelector(`#span${pos}`).innerHTML;
        pos++;
        if (pos >= maxPos) {
            finishTime = time();
            return;
        }
        changeStyle(pos, isCorrect(e.target.value, nowWord));
    }
});

document.querySelector('.textInput').addEventListener('keyup', (e) => {
    if (e.keyCode == 32) {
        e.target.value = "";
    }
});

function changeStyle(id, status) {
    const whichOne = () => {
        if (status) return "green";
        else return "red";
    }
    let wroteColor = whichOne();
    document.querySelector(`#span${id - 1}`).style.backgroundColor = wroteColor;
    document.querySelector(`#span${id}`).style.backgroundColor = "gray";
}
