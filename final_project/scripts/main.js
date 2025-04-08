// DOM Interactions, Conditional, Arrays, LocalStorage
document.addEventListener("DOMContentLoaded", () => {
    const quoteForm = document.getElementById("quoteForm");
    const result = document.getElementById("quoteResult");
  
    if (quoteForm) {
      quoteForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const service = document.getElementById("service").value;
        const quantity = parseInt(document.getElementById("quantity").value);
        const prices = {
          "Business Card": 3,
          Flyer: 5,
          Tarpaulin: 10,
          Brochure: 7,
        };
  
        if (!prices[service] || quantity <= 0) {
          result.textContent = "Please select a valid service and quantity.";
          return;
        }
  
        const estimate = prices[service] * quantity;
        result.textContent = `Estimated price for ${quantity} ${service}(s): ₱${estimate}.`;
  
        const history = JSON.parse(localStorage.getItem("quoteHistory")) || [];
        history.push({ service, quantity, estimate });
        localStorage.setItem("quoteHistory", JSON.stringify(history));
      });
    }
  });
  