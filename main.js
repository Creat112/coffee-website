const container = document.getElementById("products-container");

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="images/products/${item.image}" alt="${item.name} loading="lazy">
        <h1>${item.name}</h1>
        <p>${item.price} EGP</p>
        <button class="order-btn">Order Now</button>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading products:", err));
