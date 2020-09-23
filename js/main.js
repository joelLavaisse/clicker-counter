// Clicker logic
const counterContainer = document.getElementById('counter-container');
const counter = document.getElementById('counter');

counterContainer.addEventListener('click', () => {
  const counterValue = parseInt(counter.innerHTML)
  counter.innerHTML = counterValue + 1;
})

// Reset button logic
const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
  const response = confirm('¿Reiniciar el contador?');
  if (response) {
    counter.innerHTML = 0;
  };
})

// Load service worker
window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js');
  }
}