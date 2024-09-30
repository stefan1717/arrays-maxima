console.log("task1")


let nums = [5, 2, 4];


nums.push(3);

let squares = [];

for (let i = 0; i < 4; i++) {
  squares.push(nums[i] ** 2); 
}

console.log(squares); 

console.log("task2")

let list = [
  { product: "Apple", price: 25 },
  { product: "Cherry", price: 32 },
  { product: "Strawberry", price: 45 }
];

let maxPriceProduct = list.reduce((maxProduct, currentProduct) => {
  return currentProduct.price > maxProduct.price ? currentProduct : maxProduct;
});


console.log(maxPriceProduct.product); 

console.log("task3")

let products = ["tomato", "apple", "salad", "banana", "bread", "milk", "cheese", "potato", "carrot", "onion"];
let basket = [];
let randomItemsCount = Math.floor(Math.random() * 21) + 10;

function getRandomPrice() {
  return Math.floor(Math.random() * 151) + 50;
}

for (let i = 0; i < randomItemsCount; i++) {
  let randomProduct = products[Math.floor(Math.random() * products.length)];
  let productInBasket = basket.find(item => item.product === randomProduct);
  
  if (productInBasket) {
    productInBasket.cnt++;
  } else {
    basket.push({ product: randomProduct, price: getRandomPrice(), cnt: 1 });
  }
}

let totalSum = basket.reduce((sum, item) => sum + (item.price * item.cnt), 0);

console.log("Корзина:", basket);
console.log("Общая сумма товаров:", totalSum);


