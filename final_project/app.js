import readlineSync from 'readline-sync';
import { loadFromJson, saveToJson } from './storage.js';
import {ValidationError, NotFoundError} from "./errors.js"
import {createIdCounter} from "./classes.js"
import {addTask, showAllTasks, searchByTitle, topByPriority, showReportByCategory, reportByCategory,markDone,deleteTask} from "./actions.js"

export function showMenu() 
{
    console.log("\n=== Список справ ===");
    console.log("1 - Додати план");
    console.log("2 - Показати все");
    console.log("3 - Пошук за назвою");
    console.log("4 - Топ 3 за пріоритетом");
    console.log("5 - Звіт за категоріями");
    console.log("6 - Позначити виконаним");
    console.log("7 - Видалити");
    console.log("0 - Вийти");
}

export function main() 
{
    const tasks = loadFromJson();
    const nextId = createIdCounter(tasks);

    while (true) 
    {
        showMenu();
        const choice = readlineSync.question("Ваш вибір: ").trim();

        if (choice === "0") 
        {
            console.log("до побачення");
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
                console.log("Невідомий пункт");
            }
        } catch (err)
        {
            if (err instanceof ValidationError) 
            {
                console.log("Помилка введення:", err.message);
            } else if (err instanceof NotFoundError) 
            {
                console.log("Не знайдено:", err.message);
            } else 
            {
                console.log("Непередбачувана помилка:", err.message);
            }
        }
    }
}