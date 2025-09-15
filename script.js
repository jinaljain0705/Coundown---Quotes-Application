let countdownDisplay = document.getElementById("countdown");
let toggleBtn = document.getElementById("toggleBtn");
let countdownInterval;
let isRunning = false;

// Set future date (New Year Example: Jan 1, 2026)
const eventDate = new Date("Jan 1, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance <= 0) {
    clearInterval(countdownInterval);
    countdownDisplay.innerHTML = "Time’s up! The event has started";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownDisplay.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

// Toggle Start / Pause
toggleBtn.addEventListener("click", () => {
  if (!isRunning) {
    countdownInterval = setInterval(updateCountdown, 1000);
    isRunning = true;
  } else {
    clearInterval(countdownInterval);
    isRunning = false;
  }
});

// ========== Quotes Slider ==========
const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Stay positive, work hard, make it happen.",
];

let quoteIndex = 0;
let quoteDisplay = document.getElementById("quote");
let quoteInterval;

function showQuote(index) {
  quoteDisplay.textContent = quotes[index];
}

function nextQuote() {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  showQuote(quoteIndex);
}

function prevQuote() {
  quoteIndex = (quoteIndex - 1 + quotes.length) % quotes.length;
  showQuote(quoteIndex);
}

document.getElementById("nextQuote").addEventListener("click", nextQuote);
document.getElementById("prevQuote").addEventListener("click", prevQuote);

// Auto change quotes every 4 seconds
quoteInterval = setInterval(nextQuote, 4000);
showQuote(quoteIndex);

// ========== Modal Popup ==========
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

setTimeout(() => {
  modal.style.display = "block";
}, 5000);

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
