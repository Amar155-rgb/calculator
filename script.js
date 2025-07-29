let display = document.getElementById('display');
let currentInput = '';
let resetNext = false;

function appendNumber(number) {
  if (resetNext) {
    currentInput = '';
    resetNext = false;
  }
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === '') return;
  const lastChar = currentInput[currentInput.length - 1];
  if ('+-*/'.includes(lastChar)) {
    currentInput = currentInput.slice(0, -1);
  }
  currentInput += operator;
  resetNext = false;
  updateDisplay();
}

function appendDot() {
  const parts = currentInput.split(/[\+\-\*\/]/);
  const lastPart = parts[parts.length - 1];
  if (!lastPart.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch (error) {
    currentInput = 'Error';
  }
  updateDisplay();
  resetNext = true;
}

function updateDisplay() {
  display.innerText = currentInput || '0';
}
