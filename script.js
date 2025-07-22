let realValue = '';
let displayValue = '';

function appendValue(val) {
  const display = document.getElementById("display");

  // Untuk perhitungan
  realValue += val;

  // Untuk tampilan
  if (val === "*") {
    displayValue += "×";
  } else if (val === "/") {
    displayValue += "÷";
  } else {
    displayValue += val;
  }

  display.value = displayValue;
  adjustFontSize();
}

function clearDisplay() {
  realValue = "";
  displayValue = "";
  document.getElementById("display").value = "";
  adjustFontSize();
}

function calculate() {
  const display = document.getElementById("display");
  try {
    const result = eval(realValue);
    display.value = result;
    realValue = result.toString();
    displayValue = result.toString();
  } catch {
    display.value = "error";
    realValue = "";
    displayValue = "";
  }
  adjustFontSize();
}

function toggleSign() {
  const display = document.getElementById("display");
  if (realValue.startsWith("-")) {
    realValue = realValue.slice(1);
    displayValue = displayValue.slice(1);
  } else {
    realValue = "-" + realValue;
    displayValue = "-" + displayValue;
  }
  display.value = displayValue;
  adjustFontSize();
}

function percentage() {
  const display = document.getElementById("display");
  const num = parseFloat(realValue);
  if (!isNaN(num)) {
    realValue = (num / 100).toString();
    displayValue = realValue;
    display.value = displayValue;
    adjustFontSize();
  }
}

function adjustFontSize() {
  const display = document.getElementById("display");
  let fontSize = 48;
  const maxWidth = display.offsetWidth - 20;
  display.style.fontSize = fontSize + "px";

  while (display.scrollWidth > maxWidth && fontSize > 16) {
    fontSize--;
    display.style.fontSize = fontSize + "px";
  }
}
