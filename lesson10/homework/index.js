// import readlineSync from 'readline-sync';



//Задание 1
const user = 
{
    name: 'Ivan',
    age: 20,
    isAdmin: false,
    email: 'h9jW8@example.com',
    login: 'admin',
    password: '12345',
};


const usonUser = JSON.stringify(user);
console.log(usonUser);
console.log(typeof usonUser);


const parsUser = JSON.parse(usonUser);
console.log(parsUser);
console.log(typeof parsUser);

console.log(parsUser.name);
console.log(parsUser.age);
console.log(parsUser.isAdmin);
console.log(parsUser.email);
console.log(parsUser.login);
console.log(parsUser.password);