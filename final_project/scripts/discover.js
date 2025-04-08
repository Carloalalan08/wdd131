// discover.js
document.addEventListener("DOMContentLoaded", function () {
    const discoverContainer = document.getElementById("discover-container");

    // Example of loading discoverable content
    const discoverItems = [
        { title: "Special Offer A", description: "Discounts on services.", link: "#offerA" },
        { title: "Special Offer B", description: "Free consultation for new members.", link: "#offerB" },
        // Add more items as needed
    ];

    discoverItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("discover-card");

        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a href="${item.link}" class="button">Learn More</a>
        `;
        
        discoverContainer.appendChild(card);
    });
});
