// import readlineSync from 'readline-sync';


//1
// const arr = ["прибрати", "помити посуд", "вивчити JS"];

// arr.forEach((el, index) => {
//     console.log(`${index + 1}. ${el}`);
// });


//2
// const arr = [0, 20, 100];

// const arr2 = arr.map(el => (el * 9 / 5 + 32));
// console.log(arr2);


//3
// const arr = ["трава", "дерево", "небо"];

// const arr2 = arr.map(el => el.toUpperCase());
// console.log(arr2);



//4
function eachItem(arr, action)
{
    for(const item of arr)
    {
        action(item);
    }
}
eachItem(["трава", "дерево", "небо"], (el) => console.log(`${el} -> ${el.length}`) );

function myMap(arr, fn)
{
    const result = [];
    for(const item of arr)
    {
        result.push(fn(item));
    }
    return result;
}
console.log(myMap(["трава", "дерево", "небо"], (str) => str.length));



//5
console.log();
console.log(myMap([1, 2, 3], x => x * 2));
console.log(myMap([100, 200], x => `${x} грн.`));

eachItem([34,56, 76], (el) => console.log(el * 2));
eachItem(["трава", "дерево", "небо"], (el) => console.log(el.toUpperCase()));


