import readlineSync from 'readline-sync';

//1
// const t = [10, 20, 30, 40];

// console.log(t.push(50));  // t = [10, 20, 30, 40, 50]
// console.log(t.shift());  // t = [20, 30, 40, 50]
// console.log(t.slice(1, 3));     // t = [30, 40]
// console.log(t.splice(1, 1));    // t = [30]
// console.log(t);                 // t = [20, 40, 50]
// console.log(t.indexOf(40), t.includes(20)); // 1 true

//2
// const grades = [8, 9, 10, 5, 7, 6];
// grades.push(11)
// grades.push(2);
// grades.pop();
// console.log(grades);

// let sum = 0;
// let max = grades[0];
// let min = grades[0];

// for(let g of grades)
// {
//     sum += g;
//     if(g > max)
//     {
//         max = g;
//     }
//     if(g < min)
//     {
//         min = g;
//     }
// }
// console.log(sum);
// console.log(sum/grades.length);
// console.log(max);
// console.log(min);

// console.log(grades.includes(100));
// console.log(grades.indexOf(5));

//3
// const arr = [5, 3, 5, 1, 3, 9, 1];
// const arr2 = [];

// for(let a of arr)
// {
//     if(arr2.includes(a))
//     {
//         continue;
//     }else
//     {
//         arr2.push(a);
//     }
// }

// console.log(arr2);


//4
const arr = [5, 3, 5, 1, 3, 9, 1];
const arr2 = arr;

console.log(arr);
console.log(arr2);

arr.push(10);

console.log(arr);
console.log(arr2);

const arr3 = arr.slice();

console.log(arr);
console.log(arr3);

arr.push(51);

console.log(arr);
console.log(arr3);

/*
Обьяснение роботы:
первый случай копироование ССЫЛКИ на масив а не самого масива изза этого при изменении одного
изменения видны и на другом масиве

второй случай это выдиление дополнительно памяти и создание в ней точной копии масивва изза 
этого в памяти находится дубликат масива и они никак не связаны друг с другом по этому
при изменении одного изменения не видны и на другом масиве
*/
