// import readlineSync from 'readline-sync';

// console.log("start");
// setTimeout(() =>
// {
//     console.log("foto download");
// },2000);
// console.log("end");


// const myPromise = new Promise((resolve, reject) => 
// {
//     resolve("pizza is ready");

// });
// console.log(myPromise);



// const myPromise = new Promise((resolve, reject) => 
// {
//     setTimeout(() =>
//     {
//         resolve("pizza is ready");
//     }, 3000);

// });

// myPromise.then(res =>
// {
//     console.log(res);
// }
// );

// console.log(myPromise);


// const myPromise = new Promise((resolve, reject) =>
// {
//     setTimeout(() =>
//     {
//         reject("pech slomalas");
//     },2000);

// });

// myPromise
// .then((result) =>
//     {
//         console.log(result);
//     })
// .catch((err) => 
// {
//     console.log(err);
// })




// async function sayHallow()
// {
//     return "hallow";
// }

// console.log(sayHallow());


// function getPizza()
// {
//     return new Promise((resolve, reject) =>
//     {
//         setTimeout(() =>
//         {
//             resolve("pizza is ready");
//         }, 2000);
//     });
// }

// async function orderPizza()
// {
//     const res = await getPizza();

//     console.log(res);
// }
// orderPizza();



// getPizza().then((res) => 
// {
//     console.log(res);
// });

// orderPizza();




// function waitOneSecond()
// {
//     return new Promise((resolve, reject) =>
//     {
//         setTimeout(() =>
//         {
//             resolve("Done!");
//         },1000);
//     });
// }

// async function start() 
// {
//     console.log("start");
//     const first = await waitOneSecond();
//     console.log(first);
//     const second = await waitOneSecond();
//     console.log(second);
//     console.log("end");
// }

// start();





// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Користувача не знайдено"));
//     }, 2000);
//   });
// }

// async function showUser() {
//   try {
//     const user = await getUser();
    
//     console.log(user);
//   } catch (error) {
//     console.log("Помилка:", error.message);
//   }
// }

// showUser();





async function getPost() 
{
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const post = await res.json();
        const title = post.map(post => post.title);
        console.log(title);
    }
    catch(error)
    {
        console.log("Помилка:", error.message);
    }

    
}

getPost();










