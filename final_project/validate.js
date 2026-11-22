import {DATA_FILE, CATEGORIES, CategoryNames, PRIORITIES, PRIORITIESNames} from "./constants.js"
import { ValidationError } from "./errors.js"
import { today } from "./base_functions.js";
import {dateRegex} from "./constants.js"

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

    const allowedIds = Object.values(type);
    if(!raw || Number.isNaN(num) || !allowedIds.includes(num))
    {
        throw new ValidationError(`Допускаются только ${allowedIds} значения`);
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

    if (!dateRegex.test(s)) {
        throw new ValidationError("Неверный формат даты! Введите дату в формате: ГГГГ-ММ-ДД (например, 2026-12-31)");
    }

    const [y, m, d] = s.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    if (
        date.getFullYear() !== y ||
        date.getMonth() !== m - 1 ||
        date.getDate() !== d
    ) {
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
    if (typeof raw === "boolean") {
        return raw;
    }

    const s = String(raw).trim().toLowerCase(); 

    if(raw === null || raw === undefined)
    {
        throw new ValidationError("Такой вариант не принимается");
    }

    const trueValues = ["да", "д", "yes", "y", "так", "т", "1", "+"];   //Варианты какие считаются за "ДА"

    const falseValues = ["нет", "н", "no", "n", "ні", "0", "-", ""];        //Варианты какие считаются за "НЕТ"

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