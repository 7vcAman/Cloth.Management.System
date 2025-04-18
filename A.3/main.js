initFormValidation();
    initSearchToggle();      // Function 1
    initCartBadgeUpdate();   // Function 2
    initResponsiveMenu();    // Function 3
    initProductLike();       // Function 4
    initScrollReveal();      // Function 5
    initBackToTop();         // Function 6
    initImageZoom();         // Function 7
    initProductFilter();     // Function 8
    initQuantityCounter();   // Function 9

  // Sign-in Form Validation
  function initFormValidation() {
    const form = document.querySelector("form");
  
    if (!form) return;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector("input[type='email']")?.value.trim();
      const password = form.querySelector("input[type='password']")?.value.trim();
  
      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }
  
      alert(`Welcome back, ${email}!`);

      form.reset();
    });
  }
  
  // Placeholder Function 1: Search Toggle
  function initSearchToggle() {
    // Toggle a hidden search input
    console.log("Search toggle initialized");
  }
  
  // Placeholder Function 2: Update Cart Badge
  function initCartBadgeUpdate() {
    // Update cart count dynamically
    console.log("Cart badge update initialized");
  }
  
  // Placeholder Function 3: Responsive Menu Toggle
  function initResponsiveMenu() {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.querySelector(".navmenu");
  
    if (menuIcon && navMenu) {
      menuIcon.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
      });
    }
  }
  
  // Placeholder Function 4: Product Like (Heart Toggle)
  function initProductLike() {
    const hearts = document.querySelectorAll(".bx-heart");
  
    hearts.forEach((heart) => {
      heart.addEventListener("click", () => {
        heart.classList.toggle("bxs-heart");
        heart.classList.toggle("text-red-500");
      });
    });
  }
  
  // Placeholder Function 5: Scroll Reveal (Simple fade-in on scroll)
  function initScrollReveal() {
    // fade-in animation logic
    console.log("Scroll reveal animation setup");
  }
  
  // Placeholder Function 6: Back to Top Button
  function initBackToTop() {
    // Create or show a back-to-top button
    console.log("Back to top button initialized");
  }
  // Placeholder Function 7: Image Zoom

  function initImageZoom() {
    console.log("Image zoom initialized");
  }
  // Placeholder Function 8: Product Filter
  function initProductFilter() {
    // Logic for filtering products by category, price, etc.
    console.log("Product filtering initialized");
  }
  // Placeholder Function 9: Quantity Counter in Cart
  function initQuantityCounter() {
    // Quantity + / - logic
    console.log("Quantity counter initialized");
  }  
  // Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("navmenu");
  
    if (toggleBtn && navMenu) {
      toggleBtn.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
        toggleBtn.classList.toggle("bx-x");
        toggleBtn.classList.toggle("bx-menu");
      });
    }
  
    // Add to cart functionality
    const cart = [];
    const addToCartButtons = document.querySelectorAll("button");
  
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const card = button.closest(".relative");
        if (!card) return;
  
        const title = card.querySelector("h4")?.innerText || "Unnamed Product";
        const priceText = card.querySelector("p")?.innerText || "$0";
        const price = parseFloat(priceText.replace(/[^0-9.]/g, "")) || 0;
  
        const existingProduct = cart.find((item) => item.name === title);
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cart.push({ name: title, price, quantity: 1 });
        }
  
        console.log("Cart:", cart);
        updateCartCount();
      });
    });
  
    function updateCartCount() {
      const cartIcon = document.querySelector(".bx-cart");
      if (!cartIcon) return;
  
      let count = cart.reduce((total, item) => total + item.quantity, 0);
  
      let badge = document.querySelector("#cart-count");
      if (!badge) {
        badge = document.createElement("span");
        badge.id = "cart-count";
        badge.className =
          "absolute -top-1 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center";
        cartIcon.style.position = "relative";
        cartIcon.appendChild(badge);
      }
      badge.textContent = count;
    }
  });