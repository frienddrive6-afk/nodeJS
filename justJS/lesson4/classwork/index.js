// const f = ["Яблоко", "банан", "малина", "вишня", "банан"];
// if(!f.includes("малина"))
// {
//     f.push("малина");
// }
// console.log(f);

// console.log(f.slice(1, 3));

// f.splice(2, 2);
// console.log(f);



//Практика
import readlineSync from 'readline-sync';

const tasks = [];

while(true)
{
    console.log("Что вы хотите сделать?\n1)Показать все планы\n2)Добавить план\n3)Удалить первую задачу\n4)Удалить задачу\n5)Найти задачу\n6)Выйти");
    const input = Number(readlineSync.question('Ваш выбор: '));

    switch(input)
    {
        case 1:
        {
            console.log("Задачи:");
            for(let i = 0; i < tasks.length; i++)
            {
                console.log(`Задача ${i+1}) ${tasks[i]}`);
            }
            console.log("");
            break;
        }
        case 2:
        {
            const plan_add = readlineSync.question('Введите название плана: ');
            if(plan_add.trim() !== '' && tasks.includes(plan_add) === false)
            {
                tasks.push(plan_add);
            }
            break;
        }
        case 3:
        {
            tasks.shift();
            break;
        }
        case 4:
        {
            const task_del = Number(readlineSync.question('Введите номер задачи для удаления: '));
            if(task_del > 0 && task_del <= tasks.length)
            {
                tasks.splice(task_del - 1, 1);
            }
            break;
        }
        case 5:
        {
            const task_find = readlineSync.question('Введите название задачи для поиска: ');
            if(tasks.includes(task_find))
            {
                console.log(`Задача ${tasks.indexOf(task_find) + 1}) ${task_find}`);
            }else
            {
                console.log("Задача не найдена");
            }
        }
        case 6:
        {
            console.log("Выходим");
            break;
        }
        default:
        {
            console.log("Неверный ввод");
        }
    }

}