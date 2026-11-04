import readlineSync from 'readline-sync';




// function sayHellow(userName)
// {
//     return `Hello, ${userName}!`;
// }

// console.log(sayHellow("Jastin"));


// const sayHello1 = (userName) => 
// {
//     return `Hello, ${userName}!`;
// }

// console.log(sayHello1("Jastin"));




// function add(a, b) {
//     return a + b;
// }

// const fn = (a, b) => a + b;



// const piseCalculate = (startPrice, sale) => { return startPrice - (startPrice * sale / 100) };
// console.log(piseCalculate(100, 20));
// console.log(piseCalculate(3600, 5));




// Метод        Callback отримує    Callback має повернути    Метод повертає
// -------------------------------------------------------------------------------
// forEach      елемент             (нічого не потрібно)      undefined
// map          елемент             нове значення             новий масив тієї ж довжини
// filter       елемент             true / false              новий масив (може бути коротшим)
// find         елемент             true / false              ПЕРШИЙ підходящий елемент (або undefined)
// some         елемент             true / false              true / false ("чи є хоч один")
// every        елемент             true / false              true / false ("чи всі")
// sort         два елементи a, b   число (< 0, 0, > 0)       той самий масив, відсортований
// reduce       acc і елемент       нове значення acc         одне підсумкове значення




// const res = [5,12,8,23].filter((n) => { return n > 10 });
// console.log(res)

// console.log(["кот", "собака", "папуга"].filter((n) => { return n.length > 3 }));

// console.log([100, 50, 23, 30, 33, 3].filter((n) => { return n % 2 === 0 }));


// console.log([5, 12, 8, 23].find(n => n > 10));


// const ages = [5, 12, 8, 23];
// console.log(ages.some(n => n >= 18));
// console.log(ages.every(n => n >= 18));

// console.log(ages.sort((a, b) => a - b));
// console.log(ages.sort((a, b) => b - a));


// const num = [3, 1, 2];
// const sorted = num.sort();
// console.log(sorted);



// const total = [1,2,3,4].reduce((acc,n) => acc + n, 0);
// console.log(total);


// const price = [250, 1200, 80, 530, 15, 3000, 45];

// const expensive = price.filter(p => p > 100);
// const discount = expensive.map(p => p * 0.9);
// const total = discount.reduce((acc, p) => acc + p, 0);

// console.log(`Total price after discount: ${total}`);

// console.log(price.filter(p => p > 100).map(p => p * 0.9).reduce((acc, p) => acc + p, 0));


const products = [
  { name: "Ноутбук", price: 25000, inStock: true },
  { name: "Миша", price: 500, inStock: true },
  { name: "Монітор", price: 8000, inStock: false },
  { name: "Клавіатура", price: 1200, inStock: true }
];

console.log(products.filter(pr => pr.inStock === true));
console.log(products.filter(pr => pr.inStock === true).reduce((acc, pr) => acc + pr.price, 0));