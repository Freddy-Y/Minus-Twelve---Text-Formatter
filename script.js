function toUpperCase() {
    let text = document.getElementById("inputText").value;
    document.getElementById("outputText").innerText = text.toUpperCase();
}

function toLowerCase() {
    let text = document.getElementById("inputText").value;
    document.getElementById("outputText").innerText = text.toLowerCase();
}

function toTitleCase() {
    let text = document.getElementById("inputText").value;
    let formattedText = text
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    document.getElementById("outputText").innerText = formattedText;
}

function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").innerText = "";
}
