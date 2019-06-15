//Generate an array with all alphabets on it

function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}

var uArr=genCharArray("a","z");
console.log(uArr);

/* var gArr=["r","p","s"];

var uChoice=prompt("What is it going to be?");
var cChoice= gArr[Math.floor(Math.random()*gArr.length)];
uC=uChoice+cChoice;
alert(uC);

if (uC==="rr" || uC==="ss" ||uC==="pp") {
    alert("It is a tie");
} else if (uC==="rs"||uC==="pr"||uC==="sp") {
    alert("You won the Duel");
} else if (uC==="ps"||uC==="rp"||uC==="sr") {
    alert("You lost to Computer");
} else {
    alert("I did not consider this scenario")
}

// Let's start by grabbing a reference to the <span> below.
var userText = document.getElementById("user-text");

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
userText.textContent = event.key;
}; */