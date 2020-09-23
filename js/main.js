// Get DOM elements
const counterContainer = document.getElementById('counter-container');
const counter = document.getElementById('counter');
const resetButton = document.getElementById('reset');

// Set value
function setValue(value) {
  localStorage.setItem('counter', value);
  counter.innerHTML = value;
}

// Clicker +1 logic
counterContainer.addEventListener('click', () => {
  const counterValue = parseInt(counter.innerHTML)
  const newCounterValue = counterValue + 1;
  setValue(newCounterValue);
})

// Reset button logic
resetButton.addEventListener('click', () => {
  const response = confirm('¿Reiniciar el contador?');
  if (response) {
    setValue(0);
  };
})


window.onload = () => {
  'use strict';

  // Load service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js');
  }

  // Load counter state
  if (!localStorage.getItem('counter')) {
    setValue(0);
  } else {
    const value = parseInt(localStorage.getItem('counter'));
    counter.innerHTML = value;
  }
}