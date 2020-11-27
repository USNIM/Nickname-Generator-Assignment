// Nickname generator

// Variables for HTML Elements
let nicknameEl = document.getElementById("nickname");
let first = document.getElementById("name1");
let last = document.getElementById("name2");
let btn1El = document.getElementById("btn1");
let btn2El = document.getElementById("btn2");

// Event Listeners
btn1El.addEventListener("click", randNick);
btn2El.addEventListener("click", allNick);

// Array
let nickname = ['"Crusher"', '"the scientist"', '"Twinkle-toes"', '"the Coder"', '"the Jester"', '"the sloth"', '"Quick-Silver"']

function randNick () {
    nicknameEl.innerHTML = first.value + "  " + nickname[randomInt(0, 6)] + " " + last.value;
}

function allNick () {
    let divStr = "";
    for (let i = 0; i < nickname.length; i++) {
        divStr += first.value + "  " + nickname[i] + "  " + last.value + `<br />`;
    }
    nicknameEl.innerHTML = divStr;
}