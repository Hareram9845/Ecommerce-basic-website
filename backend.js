// Visitor counter using localStorage
document.addEventListener("DOMContentLoaded", function () {
  let visitors = localStorage.getItem("visitors");
  visitors = visitors ? parseInt(visitors) + 1 : 1;
  localStorage.setItem("visitors", visitors);
  document.getElementById("visitor-count").innerText = `Visitors: ${visitors}`;
});

// Cart functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item) {
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(item + " added to cart.");
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  if (cart.length === 0) {
      cartItems.innerText = "Your cart is empty.";
  } else {
      cartItems.innerHTML = cart.map(item => `<p>${item}</p>`).join("");
  }
}

function checkout() {
  localStorage.removeItem("cart");
  document.getElementById("feedback-box").style.display = "block";
}

// Feedback classification (Mock OpenAI API)
function submitFeedback() {
  const feedback = document.getElementById("feedback").value;
  classifyFeedback(feedback);
}

function classifyFeedback(feedback) {
  // Simulating an OpenAI API call with hardcoded classification
  let feedbackClass = "Neutral";
  if (feedback.toLowerCase().includes("good") || feedback.toLowerCase().includes("love")) {
      feedbackClass = "Positive";
  } else if (feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("dislike")) {
      feedbackClass = "Negative";
  }

  document.getElementById("feedback-result").innerText = `Feedback classified as: ${feedbackClass}`;
}

// Initialize cart page if loaded
if (window.location.pathname.includes("cart.html")) {
  displayCart();
}
