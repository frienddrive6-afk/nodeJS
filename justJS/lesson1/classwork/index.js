import readleneSync from 'readline-sync';

const name = readleneSync.question('What is your name? ');

console.log(`Hello ${name}`);

