import {DATA_FILE, CATEGORIES, CategoryNames, PRIORITES, PrioritesNames} from "./constants.js"
import { ValidationError } from "./errors.js"


/*
    Валидирует заголовок задачи
    @raw        (string)    ---  Исходный заголовок задачи
    @returns    (string)    ---  Валидный заголовок задачи
*/
export function validateTitle(raw)
{
    if(!raw === true || typeof raw !==  "string")
    {
        throw new ValidationError("обязательное поле для заполнения");
    }

    const trimed = raw.trim();

    if(trimed.length < 2)
    {
        throw new ValidationError("минимальная длина 2 символа");
    }

    if(trimed > 100)
    {
        throw new ValidationError("Максимальная длина не может привышать 100 символов");
    }

    return trimed;
}

/*
    Валидирует категорию задачи
    @raw            (string)    ---  Исходная категория задачи
    @categories     (object)    ---  Объект категорий
    @returns        (number)    ---  Валидная категория задачи
*/
export function valideteCategory(raw, categories)
{
    const num = Number(raw);

    const arr = Object.values(categories);
    if(!raw || isNaN(num) || !arr.includes(num))
    {
        throw new ValidationError(`Допускаются только ${arr} категории`);
    }

    return num;
}