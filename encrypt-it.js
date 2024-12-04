
// Part I: Log a message when the window loads
window.addEventListener('load', () => {
    console.log("Window loaded!");
});

// Part II: Button click handler
function handleClick() {
    console.log("Button clicked!");
    let inputText = document.getElementById("inputText").value;
    let encryptedText = shiftCipher(inputText);
    document.getElementById("output").innerText = encryptedText; // Outputs to the page
}

function handleReset() {
    document.getElementById("inputText").value = ""; // Clears the input field
}

// Part IV: Shift Cipher Function
function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] < 'a' || text[i] > 'z') {
            result += text[i];
        } else if (text[i] == 'z') {
            result += 'a';
        } else {
            let letter = text.charCodeAt(i);
            let resultLetter = String.fromCharCode(letter + 1);
            result += resultLetter;
        }
    }
    return result;
}

document.getElementById("encryptButton").addEventListener("click", handleClick);
document.getElementById("resetButton").addEventListener("click", handleReset);
