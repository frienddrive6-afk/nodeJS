// import readlineSync from 'readline-sync';

//1
// console.log([5, 12, 8, 23].filter(n => n > 10));  // 12m23
// console.log([5, 12, 8, 23].find(n => n > 10)); //12
// console.log([1, 2].find(n => n > 10)); //undefined
// console.log([15, 22, 18].every(a => a >= 18)); //false
// console.log([10, 2, 33, 4].sort()); //10,2,33,4
// console.log([1, 2, 3, 4].reduce((acc, n) => acc + n, 0));//10


//2
// const arr = [4, 9, -2, 15, 7, 0];

// console.log(arr.filter(n => n > 0));
// console.log(arr.find(n => n < 0));
// console.log(arr.reduce((acc, n) => 
// {
//     acc.sum +=n;
//     if(n > acc.max)
//     {
//         acc.max = n;
//     }

//     return acc;
// }, {sum: 0, max: -10000000000}));
// const arr2 = [];
// for(const el of arr)
// {
//     arr2.push(el);
// }
// console.log(arr2);
// console.log(arr2.sort((a, b) => b - a));



//3
// const arr = ["кіт", "собака", "миша", "лев"];
// console.log(arr.filter(el => el.length > 3).map(el => el.toUpperCase()).sort());

//4 
// const arr = [250, 1200, 80, 530, 15, 2000, 45];
// console.log(arr.filter(n => n > 100).map(el => el * 0.9).reduce((acc, n) => acc + n, 0));

//5
const products = [
  { name: 'Ноутбук', price: 25000, inStock: true },
  { name: 'Смартфон', price: 12000, inStock: false },
  { name: 'Навушники', price: 1500, inStock: true },
  { name: 'Клавіатура', price: 850, inStock: true },
  { name: 'Монітор', price: 7200, inStock: false }
];

console.log(products.filter(pr => pr.inStock === true));
console.log(products.reduce((acc, pr) => acc + Number(pr.price), 0));
console.log(products.reduce((acc, pr) => acc + Number(pr.price), 0) / products.length);
const names = [];
products.forEach(pr => names.push(pr.name));
console.log(names);




