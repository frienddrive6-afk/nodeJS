import readlineSync from 'readline-sync';

//1
// const N = Number(readlineSync.question('Enter a number: '));
// for(let i = 0; i <= 10; i++)
// {
//     console.log(`${N} x ${i} = ${N * i}`);
// }

//2
// const numbers = [4, 8, 15, 16, 23, 42, 1, 7];
// let sum = 0;
// for(let num of numbers)
// {
//     sum += num;
// }
// console.log("Sum -> " +sum);
// console.log("Average -> " +(sum/numbers.length));

// let max = numbers[0];
// for(let num of numbers)
// {
//     if(num > max)
//     {
//         max = num;
//     }
// }
// console.log("Max -> " +max);

// let min = numbers[0];
// for(let num of numbers)
// {
//     if(num < min)
//     {
//         min = num;
//     }
// }
// console.log("Min -> " +min);


//3.1
// const glasn = "стрка с гласными буквами";
// let sum_glasn = 0;

// for(let g of glasn)
// {
//     if(g === "а" || g === "е" || g === "и" || g === "о" || g === "у" || g === "ы" || g === "э" || g === "ю" || g === "я")
//     {
//         sum_glasn++;
//     }
// }
// console.log("Sum of glasn -> " + sum_glasn);

//3.2
// const glasn = "стрка с гласными буквами";
// const glasn_array = ["а", "е", "и", "о", "у", "ы", "э", "ю", "я"];
// let sum_glasn = 0;

// for(let g of glasn)
// {
//     if(glasn_array.includes(g))
//     {
//         sum_glasn++;
//     }
// }
// console.log("Sum of glasn -> " + sum_glasn);



//4
// let name = readlineSync.question('Enter your name: ');
// let city = readlineSync.question('Enter your city: ');
// const qty = Number(readlineSync.question('Enter your colichestvo: '));

// if(name == "" || city == "")
// {
//     name = "гость";
//     city = "не известный город";
// }

// console.log(`Hello, ${name}! Welcome to ${city}!`);

// console.log(qty || 1);
// console.log(qty ?? 1);


//5
for(let i = 0; i < 30; i++)
{
    if(i % 3 === 0 && i % 5 === 0)
    {
        console.log("FizzBuzz");
    }else if(i % 3 === 0)
    {
        console.log("Fizz");
    }else if(i % 5 === 0)
    {
        console.log("Buzz");
    }
}