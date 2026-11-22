import readlineSync from 'readline-sync';
import {Task, createIdCounter} from "./classes.js"
import {validateTitle, validateIdFromObject, validateDeadline, validateIsDone} from "./validate.js"
import {DATA_FILE, CATEGORIES, CategoryNames, PRIORITIES, PRIORITIESNames} from "./constants.js"
import { today } from "./base_functions.js";


/*
    Запрашивает и валидирует заголовок задачи
    @returns    (string)    ---  Валидный заголовок
*/
function getTitle()
{
    return validateTitle(readlineSync.question("Введите задачу которую нужно сделать: "));
}

/*
    Выводит категории, запрашивает и валидирует выбор пользователя
    @returns    (number)    ---  ID категории
*/
function getCategory()
{
    Object.entries(CategoryNames).forEach(([id, name]) => 
    {
        console.log(`${id} - ${name}`);
    }); 
        
    return validateIdFromObject
    (
        readlineSync.question(`Категория (1-${Object.keys(CATEGORIES).length}): `),
        CATEGORIES
    );
    
}

/*
    Выводит приоритеты, запрашивает и валидирует выбор пользователя
    @returns    (number)    ---  ID приоритета
*/
function getPriority()
{
    Object.entries(PRIORITIESNames).forEach(([id, name]) => 
    {
        console.log(`${id} - ${name}`);
    });
    
    return validateIdFromObject
    (
        readlineSync.question(`Приоритет (1-${Object.keys(PRIORITIES).length}): `),
        PRIORITIES
    );
    
}

/*
    Запрашивает и валидирует дедлайн задачи
    @returns    (string|null) ---  Дата дедлайна или null
*/
function getDeadline()
{
    return validateDeadline(readlineSync.question("Вевдите дату до которой хотите сделать задачу(пример 2026-11-21): "));
}

/*
    Запрашивает и валидирует статус выполнения задачи
    @returns    (boolean)   ---  Статус (true/false)
*/
function getIsDone()
{
    return validateIsDone(readlineSync.question("Вы уже сделали эту задачу? (да/нет) если нажмете enter зачистаентся как 'нет': "));
}

/*
    Собирает данные из вспомогательных функций, создает новую задачу и добавляет в массив
    @Tasks      (Array)       ---  Массив задач для добавления
    @newId      (Function)    ---  Функция-генератор уникального ID
    @returns    (void)
*/
export function addTask(Tasks,newId)
{
    while(true)
    {
        try 
        {   
            Tasks.push(new Task(newId(),getTitle(),getCategory(),getPriority(),getDeadline(),getIsDone()));
            break;
        } catch (error) 
        {
            console.log(error);
        }
        
    }

}


/*
    Красиво выводит одну задачу в консоль с форматированием и индикатором статуса
    @task       (Object)      ---  Объект задачи
    @returns    (void)
*/
export function showTask(task)
{
    console.log(`[ID: ${task.id}] ${task.title}`);
    console.log(`     Статус: ${task.isDone ? "Сделано" : "В процессе"} | Категория: ${CategoryNames[task.category] ?? "Не указана"} | Приоритет: ${PRIORITIESNames[task.priority] ?? "—"} | Дедлайн: ${task.isOverdue() ? "Просрочена" : "Не просрочена"}`);
}


export function showAllTasks(tasks, onlyActive = false)
{
    for(let i = 0; i < tasks.length; i++)
    {
        showTask(tasks[i]);
    }
}