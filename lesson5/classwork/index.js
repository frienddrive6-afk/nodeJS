import readlineSync from 'readline-sync';

// function hellow() 
// {
//     console.log("hellow");
// }

// function doTwice(action) {
//     action();
//     action();    
// }

// doTwice(hellow);
// doTwice(() => console.log("Ura"));



// function eachItem(arr, action)
// {
//     for(const item of arr)
//     {
//         action(item);
//     }
// }
// // eachItem(["olena","Oleg"], (name) => console.log(`Привет ${name}`));
// eachItem([3,5,7], (num) => console.log(num * num) );


// const fruits = ["apple", "banana", "vishna"];

// fruits.forEach(function(fruit){
//     console.log(fruit);
// });

// fruits.forEach((fruit) => console.log(fruit));
// fruits.forEach((fruit, index) =>
// {
//     console.log(`${index + 1}.${fruit}`);
// });

// const fruits = ["apple", "banana", "vishna"];
// console.log(fruits.map(fr => fr + "_"));


// console.log([1,2,3].map(num => num * 2));

// function myMap(arr, fn)
// {
//     const result = [];
//     for(const item of arr)
//     {
//         result.push(fn(item));
//     }
//     return result;
// }
// console.log(myMap([1,2,3], (num) => num * 2));


// console.log([1,2,3].map(x => x * 2));


// const names = ["олена", "максим", "ірина"];
// names.forEach((name, index) => console.log(`${index + 1}.${name}`));

// const prisec = [100, 250, 80];
// console.log(prisec.map((price) => price * 0.9));


// const animalse = ["кіт", "собака", "миша"];
// console.log(animalse.map((animal) => `${animal} -> ${animal.length}`));


// console.log([1, 2, 3].map(x =>  {return x * 2 }));


function myForEach(arr, fn) 
{
    for (let i = 0; i < arr.length; i++) 
    {
        fn(arr[i], i, arr); 
    }
}

myForEach(["олена", "максим", "ірина"], (name, index) => console.log(`${index + 1}.${name}`));
