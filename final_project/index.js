import readlineSync from 'readline-sync';
import { loadFromJson, saveToJson } from './storage.js';
import {ValidationError, NotFoundError} from "./errors.js"
import {createIdCounter} from "./classes.js"
import {addTask, showAllTasks, searchByTitle, topByPriority, showReportByCategory, reportByCategory,markDone,deleteTask} from "./actions.js"



function showMenu() 
{
    console.log("\n=== Список дел ===");
    console.log("1 - Добавить план");
    console.log("2 - Показать все");
    console.log("3 - Поиск по названию");
    console.log("4 - Топ 3 за приоритетом");
    console.log("5 - Отчет по категориям");
    console.log("6 - Пометить выполненым");
    console.log("7 - Удалить");
    console.log("0 - Выйти");
}

function main() 
{
    const tasks = loadFromJson();
    const nextId = createIdCounter(tasks);

    while (true) 
    {
        showMenu();
        const choice = readlineSync.question("Ваш выбор: ").trim();

        if (choice === "0") 
        {
            console.log("досвидания");
            break;                  
        }

        try {
            if (choice === "1") 
            {
                addTask(tasks, nextId);         
            } else if (choice === "2") 
            {
                showAllTasks(tasks);
            } else if (choice === "3") 
            {
                const found = searchByTitle(tasks);
                if (found.length > 0) showAllTasks(found);
            } else if (choice === "4") 
            {
                showAllTasks(topByPriority(tasks));
            } else if (choice === "5") 
            {
                showReportByCategory(reportByCategory(tasks));
            } else if (choice === "6") 
            {
                markDone(tasks);
                saveToJson(tasks);
            } else if (choice === "7") 
            {
                deleteTask(tasks);              
            } else {
                console.log("Неизвесный пункт");
            }
        } catch (err)
        {
            if (err instanceof ValidationError) 
            {
                console.log("Ошибка ввода:", err.message);
            } else if (err instanceof NotFoundError) 
            {
                console.log("Не найдено:", err.message);
            } else 
            {
                console.log("Не предсказуемая ошибка:", err.message);
            }
        }
    }
}

main();


