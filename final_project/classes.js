export class Task
{
  id;           //number, уникальный айди для каждой задачи
  title;        //string, название
  category;     //CATEGORIES, к какой категории принадлежит
  priority;     //PRIORITES, на сколько срочно его нужно сделать
  deadline;     //string, дата ко какой нужно сделать задачу
  isDone;       //bool, выполнено да/нет
  createdAt;    //string, дата создания
}

export function createIdCounter(tasks = [])
{
    let lastId = tasks.reduce((max, t) => t.id > max ? t.id : max,0);
    return () => ++lastId;
}