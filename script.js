let realValue = "";
let displayValue = "";

function appendValue(value){
    const display = document.getElementById("display");
    // Untuk perhitungan
    realValue += value;
    
    // Untuk display
    if (value === "*") {
        displayValue += "×"; // tampilkan simbol kali
    } else {
        displayValue += value;
    }

    display.value = displayValue
    adjustFontSize();
}

function clearDisplay(){
    consy display = document.getElementById("display");
    display.value = "";
    realValue = "";
    displayValue = "";
    adjustFontSize();
}

function calculate(){
    const display = document.getElementById("display");
    try {
        const result = eval(realValue);
        display.value = result;
        displayValue = result.toString();
        realValue = result.toString();
    } catch {
        display.value = "error";
        displayValue = "";
        realValue = "";
    }
    adjustFontSize();
}

function toggleSign() {
    const display = document.getElementById("display");
    if (display.value.startsWith("-")) {
        display.value = display.value.substring(1);
    } else if (display.value !== "") {
        display.value = "-" + display.value;
    }
    adjustFontSize();
}

function percentage() {
    const display = document.getElementById("display");
    if (display.value !== "") {
        display.value = parseFloat(display.value) / 100;
    }
    adjustFontSize();
}

function adjustFontSize() {
    const display = document.getElementById("display");
    let fontSize = 48;
    const maxWidth = display.offsetWidth - 20; // padding consideration
    display.style.fontSize = fontSize + "px";

    while (display.scrollWidth > maxWidth && fontSize > 12) {
        fontSize--;
        display.style.fontSize = fontSize + "px";
    }
}
