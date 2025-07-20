function appendValue(value){
    document.getElementById("display").value += value;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function calculate(){
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch{
        display.value = "error";
    }
}

function toggleSign() {
    const display = document.getElementById("display");
    if (display.value.startsWith("-")) {
        display.value = display.value.substring(1);
    } else if (display.value !== "") {
        display.value = "-" + display.value;
    }
}

function percentage() {
    const display = document.getElementById("display");
    if (display.value !== "") {
        display.value = parseFloat(display.value) / 100;
    }
}