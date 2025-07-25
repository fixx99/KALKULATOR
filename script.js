let realValue = '';
let displayValue = '';

function appendValue(val) {
  const display = document.getElementById("display");

  // Untuk perhitungan
  if (/[0-9]/.test(val)) {
    realValue += val;
    let tokens = realValue.split(/([\+\-\*\/])/);
    let last = tokens[tokens.length - 1];
    tokens[tokens.length - 1] = last;

    // Format ulang display
    displayValue = tokens.map(token => {
  if (/^[0-9]+$/.test(token)) {
    return formatNumberWithDots(token);
    } else if (token === '*') {
    return 'x';
    } else if (token === '/') {
    return '÷';
    } else {
    return token;
    }
  }).join('');
  } else {
    realValue += val;
    displayValue += (val === '*') ? 'x' : (val === '/' ? '÷' : val);
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
    const parsed = realValue.replace(/\./g,'');
    const result = eval(parsed);
    display.value = displayValue;
    realValue = result.toString();
    displayValue = formatNumberWithDots(realValue);
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

  setTimeout(() => {
    while (display.scrollWidth > display.clientWidth && fontSize > 10) {
      fontSize--;
      display.style.fontSize = fontSize + 'px';
    }
  }, 0);
}

function formatNumberWithDots(numberString) {
  // Hilangkan semua titik
  numberString = numberString.replace(/\./g, '');

  // Pisahkan angka desimal (jika ada)
  let [integer, decimal] = numberString.split(",");

  // Format angka ribuan (bagian sebelum koma)
  let formatted = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Kembalikan hasil
  return decimal ? `${formatted},${decimal}` : formatted;
}
