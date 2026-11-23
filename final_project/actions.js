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



/*
    Выводит список задач в консоль с возможностью фильтрации по активным
    @tasks          (Array)       ---  Массив задач для отображения
    @onlyActive     (boolean)     ---  Флаг: отображать только невыполненные задачи (по умолчанию false)
    @returns        (void)
*/
export function showAllTasks(tasks, onlyActive = false)
{

    for(let i = 0; i < tasks.length; i++)
    {
        if(onlyActive === true && tasks[i].isDone === true)
        {
            continue;
        }else
        {
            showTask(tasks[i]);
        }
        
    }   
}


/*
    Ищет задачи по ключевому слову в названии и выводит результаты
    @tasks      (Array)       ---  Массив задач для поиска
    @returns    (Array)       ---  Массив найденных задач
*/
export function searchByTitle(tasks)
{
    const findTitle = readlineSync.question("Слово из задачи: ").trim().toLocaleLowerCase();

    if(!findTitle === "")
    {
        console.log("Пустая строка не допускается");
        return [];
    }

    const res = tasks.filter(task => task.title.toLocaleLowerCase().includes(findTitle));

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


export function reportByCategory(tasks)
{
    const made = tasks.filter(task => task.isDone === true);
    const active = tasks.filter(task => task.isDone === false);

    return {made: made,active: active};
}

export function showReportByCategory(obj)
{
    console.log("Незавершоные задачи: ");
    showAllTasks(obj.active);

    console.log("--------------")

    console.log("Завершоные задачи");
    showAllTasks(obj.made);
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


export function delateTask(tasks)
{
    const UserInputId = Number(readlineSync.question("Введите id задачи котрую хотите удалить(enter/ -1 выход): ").trim());

    if((UserInputId === 0 || UserInputId === -1) && Number.isNaN(userInputId) !== true)
    {
        return;
    }

    const index = tasks.findIndex(t => t.id === UserInputId);

    if(task === -1)
    {
        console.log("Задача " + UserInputId +" не найдена");
    }

    tasks.splice(index, 1);
    console.log("Успешно");
}