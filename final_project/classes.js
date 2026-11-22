import {today} from "./base_functions.js"


export class Task
{
  id;           //number, уникальный айди для каждой задачи
  title;        //string, название
  category;     //CATEGORIES, к какой категории принадлежит
  priority;     //PRIORITES, на сколько срочно его нужно сделать
  deadline;     //string, дата ко какой нужно сделать задачу
  isDone;       //bool, выполнено да/нет
  createdAt;    //string, дата создания

    constructor(id,title,category, priority, deadline = null, isDone = false)
    {
        this.id = id,
        this.title = title,
        this.category = category,
        this.priority = priority,
        this.deadline = deadline,
        this.isDone = isDone,
        this.createdAt = today()
    }

    // метод переводящий обьект в статус выполенного
    taskDone()
    {
        this.isDone = true;
    }

    //метод проверяющий просочена задача или нет
    // @return (bool)   просочен/не просорочен
    isOverdue()
    {
        return this.deadline !== null && this.deadline < today();
    }
}

/*
    Создает счетчик уникальных ID для новых задач на основе существующих
    @tasks      (Array)       ---  Массив существующих задач
    @returns    (Function)    ---  Функция, возвращающая следующий уникальный ID
*/
export function createIdCounter(tasks = [])
{
    let lastId = tasks.reduce((max, t) => (typeof t.id === "number" && t.id > max) ? t.id : max,0);
    return () => ++lastId;
}