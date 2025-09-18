// =======================
// Part 2: JavaScript Functions
// =======================

// Function to calculate sum of two numbers
function sumNumbers(a, b) {
  return a + b;
}

// Event listener for calculation
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const total = sumNumbers(num1, num2); // Using function with parameters and return
  result.textContent = `Sum: ${total}`;
});

// =======================
// Part 3: Combining CSS & JS Animations
// =======================

// Animate box dynamically
const animateBtn = document.getElementById('animateBtn');
const box = document.getElementById('box');

animateBtn.addEventListener('click', () => {
  box.classList.toggle('animate'); // Toggle CSS animation class
});

// Card Flip Animation
const card = document.getElementById('card');
card.addEventListener('click', () => {
  card.classList.toggle('flip');
  if (!card.querySelector('.card-inner')) {
    // Wrap front/back for 3D flip effect
    const inner = document.createElement('div');
    inner.classList.add('card-inner');
    while (card.firstChild) {
      inner.appendChild(card.firstChild);
    }
    card.appendChild(inner);
  }
});

// Modal Animation
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('show'), 10); // Trigger animation
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 500); // Wait for fade out
});

// Optional: close modal by clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 500);
  }
});
