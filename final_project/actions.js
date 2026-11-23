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
    console.log(`     Статус: ${task.isDone ? "Сделано" : "В процессе"} | Категория: ${CategoryNames[task.category] ?? "Не указана"} | Приоритет: ${PRIORITIESNames[task.priority] ?? "—"} | Дедлайн: ${task.isOverdue() ? "Просрочена" : "Не просрочена"}`);
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
        console.log("список пустой");
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
    const findTitle = normalize(readlineSync.question("Слово из задачи: "));

    if(findTitle === "")
    {
        throw new ValidationError("Поисковый запрос не может быть пустым");
    }

    const res = tasks.filter(task => normalize(task.title).includes(findTitle));

    if(res.length === 0)
    {
        console.log("По вашему запросу ничего нинайдено");
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
        console.log("Пустой список");
        return;
    }
    Object.entries(report).forEach(([catId, stats]) => {
        console.log(`${CategoryNames[catId]}: всего ${stats.total}, сделано ${stats.done}, активно ${stats.active}`);
    });
}



export function markDone(tasks) {
    const rawInput = readlineSync
        .question("Введите id задачи, которую хотите пометить как выполненную (Enter / -1 — выход): ")
        .trim();

        if (rawInput === "" || rawInput === "-1") {
        return;
    }

    const userInputId = Number(rawInput);

    if (Number.isNaN(userInputId)) {
        console.log("Ошибка: ID должен быть числом.");
        return;
    }

    const task = tasks.find(t => t.id === userInputId);

    if (task === undefined) {
        console.log(`Задача ${userInputId} не найдена.`);
        return;
    }

    if (task.isDone === true) {
        console.log(`Задача ${userInputId} уже выполнена.`);
        return;
    }

    task.taskDone();
    console.log(`Задача ${userInputId} помечена как выполненная.`);
}


export function deleteTask(tasks)
{
    const rawInput = readlineSync
        .question("Введите id задачи, которую хотите удалить (Enter / -1 — выход): ")
        .trim();

        if (rawInput === "" || rawInput === "-1") {
        return;
    }

    const userInputId = Number(rawInput);

    if (Number.isNaN(userInputId)) {
        console.log("Ошибка: ID должен быть числом.");
        return;
    }

    const index = tasks.findIndex(t => t.id === userInputId);

    if(index === -1)
    {
        console.log("Задача " + userInputId +" не найдена");
        return;
    }

    tasks.splice(index, 1);
    saveToJson(tasks);
    console.log("Успешно");
}