// Modal operations: Show and Close
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }
  
  // Quote Calculator logic
  document.getElementById("quoteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const service = document.getElementById("service").value;
    const quantity = document.getElementById("quantity").value;
    let price;
  
    // Set pricing based on selected service
    if (service === "Business Card") {
      price = 20;
    } else if (service === "Flyer") {
      price = 35;
    } else if (service === "Tarpaulin") {
      price = 50;
    } else if (service === "Brochure") {
      price = 50;
    }
  
    // Calculate total price
    const total = price * quantity;
    document.getElementById("quoteResult").textContent = `Your estimated total is: ₱${total}`;
  });
  
  // Example of additional JavaScript for interactions or data validation (if any)
  function validateForm() {
    // Example validation for the quote form
    const quantity = document.getElementById("quantity").value;
    if (quantity < 1) {
      alert("Quantity must be at least 1.");
      return false;
    }
    return true;
  }
  
  // Function for spotlight section hover (optional enhancement)
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('mouseover', function() {
      this.style.backgroundColor = '#e0e0e0'; // Change background on hover
    });
    
    card.addEventListener('mouseout', function() {
      this.style.backgroundColor = ''; // Reset background on mouse out
    });
  });
  
  // About Us: Owner and Staff modal logic
document.getElementById('ownerCard').addEventListener('click', () => {
  showModal('ownerModal');
});

document.getElementById('staffCard').addEventListener('click', () => {
  showModal('staffModal');
});

document.getElementById('closeOwner').addEventListener('click', () => {
  closeModal('ownerModal');
});

document.getElementById('closeStaff').addEventListener('click', () => {
  closeModal('staffModal');
});

// Optional: Close modal when clicking outside of modal content
window.addEventListener('click', (event) => {
  if (event.target === document.getElementById('ownerModal')) {
    closeModal('ownerModal');
  }
  if (event.target === document.getElementById('staffModal')) {
    closeModal('staffModal');
  }
});
