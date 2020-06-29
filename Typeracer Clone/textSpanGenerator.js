let maxPos;

window.onload = () => {
    document.querySelector('.textContent').innerHTML = htmlSeparator(document.querySelector('.textContent').innerText);
    document.querySelector(`#span${pos}`).style.backgroundColor = "gray";
}

document.querySelector('.textInput').addEventListener('load', () => {
    document.querySelector('.textContent').innerHTML = htmlSeparator(document.querySelector('.textContent').innerText);
});

function htmlSeparator(text) {
    let textSplitted = text.split(" ");
    let id = -1;
    let spanArray = textSplitted.map(arrayText => {
        id++;
        return `<span class="spanText" id="span${id}">${arrayText}</span>`;
    });
    maxPos = spanArray.length;
    return spanArray.join(" ");
}