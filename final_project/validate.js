import {DATA_FILE, CATEGORIES, CategoryNames, PRIORITES, PrioritesNames} from "./constants.js"
import { ValidationError } from "./errors.js"
import { today } from "./base_functions.js";


/*
    Валидирует заголовок задачи
    @raw        (string)    ---  Исходный заголовок задачи
    @returns    (string)    ---  Валидный заголовок задачи
*/
export function validateTitle(raw)
{
    if(!raw || typeof raw !==  "string")
    {
        throw new ValidationError("обязательное поле для заполнения");
    }

    const trimed = raw.trim();

    if(trimed.length < 2)
    {
        throw new ValidationError("минимальная длина 2 символа");
    }

    if(trimed.length > 100)
    {
        throw new ValidationError("Максимальная длина не может привышать 100 символов");
    }

    return trimed;
}

/*
    Валидирует категорию задачи
    @raw            (string)    ---  Исходная категория задачи
    @type           (object)    ---  Объект категорий
    @returns        (number)    ---  Валидная категория задачи
*/
export function validateIdFromObject(raw, type)
{
    const num = Number(raw);

    const arr = Object.values(type);
    if(!raw || Number.isNaN(num) || !arr.includes(num))
    {
        throw new ValidationError(`Допускаются только ${arr} значения`);
    }

    return num;
}


/*
    Валидирует дедлайн задачи
    @raw        (string|null|undefined)      Исходное значение от пользователя
    @returns    (string|null)                Строка с датой (YYYY-MM-DD) или null, если дедлайна нет
 */
export function validateDeadline(raw) {
    if (raw === null || raw === undefined || String(raw).trim() === "") {
        return null;
    }

    const s = String(raw).trim();

    const dateRegex = new RegExp("^\\d{4}-\\d{2}-\\d{2}$");

    if (!dateRegex.test(s)) {
        throw new ValidationError("Неверный формат даты! Введите дату в формате: ГГГГ-ММ-ДД (например, 2026-12-31)");
    }

    const date = new Date(s);
    if (Number.isNaN(date.getTime())) {
        throw new ValidationError("Указана некорректная календарная дата");
    }

    if (s < today()) {
        throw new ValidationError("Дедлайн не может быть в прошлом!");
    }

    return s;
}


/*
   Валидирует статус выполнения задачи (isDone)
   @raw        (string|boolean) --- Входное значение
   @returns    (boolean)        --- true или false
*/
export function validateIsDone(raw)
{
    const s = String(raw).trim().toLowerCase();

    if (typeof raw === "boolean") {
        return raw;
    }

    if(s === "" || raw === null || raw === undefined)
    {
        throw new ValidationError("Такой вариант не принимается");
    }

    const trueValues = ["да", "д", "yes", "y", "так", "т", "1", "+"];   //Варианты какие считаются за "ДА"

    const falseValues = ["нет", "н", "no", "n", "ні", "0", "-"];        //Варианты какие считаются за "НЕТ"

    if(trueValues.includes(s))
    {
        return true;
    }else if(falseValues.includes(s))
    {
        return false;
    }
    
    throw new ValidationError("Некорректный ввод. Ожидается: да/нет (yes/no, 1/0).");
    
}

//createdAt не валидируется то как он будет будет братся из системного времени с помощью метода today в файле "base_funtions.js" 
// по этому значение всегда будет валидно