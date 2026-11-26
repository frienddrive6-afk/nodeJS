//1
// let i = 1;

// while (i <= 20) { 
//   if (i % 3 === 0) { 
//     console.log(i); 
//   }
//   i++; 
// }


//2
// let j = 1;      
// let sum = 0;    

// while (j <= 100) {
//   sum = sum + j; 
//   j++;           
// }

// console.log(sum); 


//3
import readleneSync from 'readline-sync';
let N = readleneSync.question("Введите число N для таблицы умножения:");

let k = 1; 

while (k <= 10) {
  let result = N * k; 
  
  console.log(`${N} x ${k} = ${result}`); 
  
  k++; 
}

