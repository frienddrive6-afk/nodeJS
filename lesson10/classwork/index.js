// import readlineSync from 'readline-sync';

// const user = 
// {
//     name: "Alex",
//     age: 20,
//     city: "Odesa",

//     sayHellow: function()
//     {
//         console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
//     }
// };

// const jsonUser = JSON.stringify(user,null, 2);
// console.log(jsonUser);
// console.log(typeof jsonUser);



// const fruitsArray = ["apple", "banana", "orange", "kiwi", "grape"];

// const jsonFruits = JSON.stringify(fruitsArray);
// console.log(jsonFruits);
// console.log(typeof jsonFruits);


//Задание 1
// const product = 
// {
//     name: "Laptop",
//     price: 1200,
//     category: "Electronics",
//     inStock: true
// };

// const jsonProduct = JSON.stringify(product, null, 2);
// console.log(jsonProduct);
// console.log(typeof jsonProduct);





// const jsonUser = '{"name":"Alex","age":20,"city":"Odesa"}';

// const user = JSON.parse(jsonUser);

// console.log(user);

// console.log(user.name);
// console.log(user.age);

// console.log(typeof user);




// //Задание 2
// const jsonStudent = '{"name":"Марія","age":20,"group":"JS-01","isActive":true}';

// const student = JSON.parse(jsonStudent);

// console.log(student);

// console.log(student.name);
// console.log(student.age);
// console.log(student.group);

// console.log(typeof jsonStudent);
// console.log(typeof student);



// const user = 
// {
//     name: "Alex",
//     age: 20,
//     city: "Odesa",
// };

// const jsonUser = JSON.stringify(user);
// console.log(jsonUser);
// const restoredUser = JSON.parse(jsonUser);
// console.log(restoredUser);



//Задание 3
const game = 
{
    title: "Minecraft",
    genre: "Sandbox",
    level: 5,
    score: 1000,
};

const jsonGame = JSON.stringify(game);
console.log(jsonGame);
const restoredGame = JSON.parse(jsonGame);
console.log(restoredGame);

restoredGame.level++;
restoredGame.score += 100;

console.log(restoredGame);
