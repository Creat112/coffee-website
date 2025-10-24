const container = document.getElementById("products-container");

// البيانات كانت في data.json — نقلناها هنا مباشرة
const data = [

  {
    "id": 1,
    "name": "Mocha",
    "price": 65,
    "image": "mocha.png"
  },
  {
    "id": 2,
    "name": "Iced Coffee",
    "price": 50,
    "image": "iced-coffee.jpg"
  },
  {
    "id": 3,
    "name": "Croissant",
    "price": 35,
    "image": "croissants.jpg"
  },
  {
    "id": 4,
    "name": "Chocolate Cake",
    "price": 80,
    "image": "chocolate-cake.jpg"
  },
];

// نفس طريقة عرض الكروت
data.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="images/products/${item.image}" alt="${item.name}" loading="lazy">
    <h1>${item.name}</h1>
    <p>${item.price} EGP</p>
    <button class="order-btn">Order Now</button>
  `;

  container.appendChild(card);
});

