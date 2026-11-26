// import readlineSync from 'readline-sync';


//1
// function getMessege()
// {
//     return new Promise((resolve, reject) => 
//         {
//             setTimeout(() => {
//                 resolve("Привіт, студенте!");
//             }, 2000);
//         });

// }


// async function showMessege() 
// {
//     const res = await getMessege();
//     console.log(res);   
// }

// showMessege();


//2
// const errorPromise = new Promise((resolve, reject) => 
// {  
//     setTimeout(() => 
//         {
//             reject("Не вдалося завантажити дані");
//         },1000);
// });

// async function showError()
// {
//     try
//     {
//         const res = await errorPromise;
//         console.log(res);
//     }catch(err)
//     {
//         console.log("Сталася помилка:",err);
//     }
// }

// showError();




//3
function getUser()
{
    return new Promise((resolve, reject) =>
    {
        const users = [ { name: "Анна", age: 20 }, { name: "Максим", age: 17 }, { name: "Олег", age: 22 }, { name: "Марія", age: 16 } ];
        setTimeout(() => 
            {
                resolve(users);
            }, 2000);
    });
}


async function main() 
{
    const allUsers = await getUser();
    
    const namesUsers = allUsers.map(user => user.name);
    console.log("Імена користувачів:", namesUsers);
    
    const allAgeUsers = allUsers.filter(user => user.age >= 18);
    console.log("Користувачі старше 18 років:", allAgeUsers);
    console.log(allAgeUsers.map(user => user.name));

}

main();


