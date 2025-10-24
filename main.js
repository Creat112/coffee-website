const container = document.getElementById("products-container");

// البيانات كانت في data.json — نقلناها هنا مباشرة
const data = [
  {
    "id": 1,
    "name": "Espresso",
    "price": 45,
    "image": "espresso.png"
  },
  {
    "id": 2,
    "name": "Cappuccino",
    "price": 55,
    "image": "cappuccino.jpg"
  },
  {
    "id": 3,
    "name": "Latte",
    "price": 60,
    "image": "latte.png"
  },
  {
    "id": 4,
    "name": "Mocha",
    "price": 65,
    "image": "mocha.png"
  },
  {
    "id": 5,
    "name": "Iced Coffee",
    "price": 50,
    "image": "iced-coffee.jpg"
  },
  {
    "id": 6,
    "name": "Cold Brew",
    "price": 70,
    "image": "cold-brew.jpg"
  },
  {
    "id": 7,
    "name": "Croissant",
    "price": 35,
    "image": "croissants.jpg"
  },
  {
    "id": 8,
    "name": "Blueberry Muffin",
    "price": 40,
    "image": "blueberry-muffin.jpg"
  },
  {
    "id": 9,
    "name": "Chocolate Cake",
    "price": 80,
    "image": "chocolate-cake.jpg"
  },
  {
    "id": 10,
    "name": "Matcha Latte",
    "price": 65,
    "image": "matcha-latte.jpg"
  }
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
