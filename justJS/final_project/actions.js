import readlineSync from 'readline-sync';
import {Task} from "./classes.js"
import {validateTitle, validateIdFromObject, validateDeadline, validateIsDone} from "./validate.js"
import { CATEGORIES, CategoryNames, PRIORITIES, PRIORITIESNames} from "./constants.js"
import { normalize } from "./base_functions.js";
import { saveToJson } from './storage.js';
import { ValidationError } from "./errors.js";

/*
    Запрашивает и валидирует заголовок задачи
    @returns    (string)    ---  Валидный заголовок
*/
function getTitle()
{
    return validateTitle(readlineSync.question("Введіть завдання, яке потрібно виконати: "));
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
        readlineSync.question(`Категорія (1-${Object.keys(CATEGORIES).length}): `),
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
        readlineSync.question(`Пріоритет (1-${Object.keys(PRIORITIES).length}): `),
        PRIORITIES
    );
    
}

/*
    Запрашивает и валидирует дедлайн задачи
    @returns    (string|null) ---  Дата дедлайна или null
*/
function getDeadline()
{
    return validateDeadline(readlineSync.question("Введіть дату, до якої хочете виконати завдання (наприклад, 21.11.2026): "));
}

/*
    Запрашивает и валидирует статус выполнения задачи
    @returns    (boolean)   ---  Статус (true/false)
*/
function getIsDone()
{
    return validateIsDone(readlineSync.question("Ви вже виконали це завдання? (так/ні) Якщо натиснете Enter, відповідь буде зарахована як «ні»: "));
}

/*
    Собирает данные из вспомогательных функций, создает новую задачу и добавляет в массив
    @Tasks      (Array)       ---  Массив задач для добавления
    @newId      (Function)    ---  Функция-генератор уникального ID
    @returns    (void)
*/
export function addTask(tasks,newId)
{
    while(true)
    {
        try 
        {   
            tasks.push(new Task(newId(),getTitle(),getCategory(),getPriority(),getDeadline(),getIsDone()));
            saveToJson(tasks);
            break;
        } catch (error) 
        {
            console.log(error.message);
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
    console.log(`     Статус: ${task.isDone ? "Зроблено" : "У процесі"} | Категорія: ${CategoryNames[task.category] ?? "Не вказано"} | Пріоритет: ${PRIORITIESNames[task.priority] ?? "—"} | Кінцевий термін: ${task.isOverdue() ? "Прострочена" : "Не прострочена"}`);
}



/*
    Выводит список задач в консоль с возможностью фильтрации по активным
    @tasks          (Array)       ---  Массив задач для отображения
    @onlyActive     (boolean)     ---  Флаг: отображать только невыполненные задачи (по умолчанию false)
    @returns        (void)
*/
export function showAllTasks(tasks, onlyActive = false) 
{
    if (tasks.length === 0) 
    {
        console.log("список порожній");
        return;
    }
    tasks.forEach(task => 
    {
        if (onlyActive === true && task.isDone === true) 
        {
            return;
        }
        showTask(task);
    });
}


/*
    Ищет задачи по ключевому слову в названии и выводит результаты
    @tasks      (Array)       ---  Массив задач для поиска
    @returns    (Array)       ---  Массив найденных задач
*/
export function searchByTitle(tasks)
{
    const findTitle = normalize(readlineSync.question("Слово із задачі: "));

    if(findTitle === "")
    {
        throw new ValidationError("Пошуковий запит не може бути порожнім");
    }

    const res = tasks.filter(task => normalize(task.title).includes(findTitle));

    if(res.length === 0)
    {
        console.log("За вашим запитом нічого не знайдено");
    }

    return res;

}



/*
    Возвращает топ N невыполненных задач, отсортированных по приоритету и дедлайну
    @tasks      (Array)       ---  Массив задач
    @n          (number)      ---  Количество задач в топе (по умолчанию 3)
    @returns    (Array)       ---  Массив наиболее приоритетных задач
*/
export function topByPriority(tasks, n = 3)
{
    return tasks
        .filter(task => task.isDone === false)
        .slice() 
        .sort((a,b) => 
            {
                if(b.priority !== a.priority)
                {
                    return b.priority - a.priority;
                }

                if(!a.deadline && !b.deadline)
                {
                    return 0;
                }

                if(!a.deadline) return 1;
                if(!b.deadline) return -1;

                return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();

            })
        .slice(0, n);
}



export function reportByCategory(tasks) {
    return tasks.reduce((acc, task) => {
        if (!acc[task.category]) {
            acc[task.category] = { total: 0, done: 0, active: 0 };
        }
        acc[task.category].total += 1;
        if (task.isDone === true) {
            acc[task.category].done += 1;
        } else {
            acc[task.category].active += 1;
        }
        return acc;
    }, {});
}

export function showReportByCategory(report) {
    if (Object.keys(report).length === 0) {
        console.log("Порожній список");
        return;
    }
    Object.entries(report).forEach(([catId, stats]) => {
        console.log(`${CategoryNames[catId]}: всього ${stats.total}, зроблено ${stats.done}, активно ${stats.active}`);
    });
}



export function markDone(tasks) {
    const rawInput = readlineSync
        .question("Введіть id завдання, яке ви хочете позначити як виконане (Enter / -1 — вихід): ")
        .trim();

        if (rawInput === "" || rawInput === "-1") {
        return;
    }

    const userInputId = Number(rawInput);

    if (Number.isNaN(userInputId)) {
        console.log("Помилка: ID має бути числом.");
        return;
    }

    const task = tasks.find(t => t.id === userInputId);

    if (task === undefined) {
        console.log(`Завдання ${userInputId} не знайдено.`);
        return;
    }

    if (task.isDone === true) {
        console.log(`Завдання ${userInputId} вже виконано.`);
        return;
    }

    task.taskDone();
    console.log(`Завдання ${userInputId} позначена як виконана.`);
}


export function deleteTask(tasks)
{
    const rawInput = readlineSync
        .question("Введіть id завдання, яке ви хочете видалити (Enter / -1 — вихід): ")
        .trim();

        if (rawInput === "" || rawInput === "-1") {
        return;
    }

    const userInputId = Number(rawInput);

    if (Number.isNaN(userInputId)) {
        console.log("Помилка: ID має бути числом.");
        return;
    }

    const index = tasks.findIndex(t => t.id === userInputId);

    if(index === -1)
    {
        console.log("Завдання " + userInputId +" не знайдено");
        return;
    }

    tasks.splice(index, 1);
    saveToJson(tasks);
    console.log("Успішно");
}