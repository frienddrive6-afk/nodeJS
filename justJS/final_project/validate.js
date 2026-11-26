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
        throw new ValidationError("обов’язкове поле для заповнення");
    }

    const trimed = raw.trim();

    if(trimed.length < 2)
    {
        throw new ValidationError("мінімальна довжина  2 символи");
    }

    if(trimed.length > 100)
    {
        throw new ValidationError("Максимальна довжина не може перевищувати 100 символів");
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
        throw new ValidationError(`Допускаються лише ${allowedIds} значення`);
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
        throw new ValidationError("Неправильний формат дати! Введіть дату у форматі: РРРР-ММ-ДД (наприклад, 2026-12-31)");
    }

    const [y, m, d] = s.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    if (
        date.getFullYear() !== y ||
        date.getMonth() !== m - 1 ||
        date.getDate() !== d
    ) {
        throw new ValidationError("Вказано неправильну календарну дату");
    }

    if (s < today()) {
        throw new ValidationError("Термін не може бути в минулому!");
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
        throw new ValidationError("Такий варіант не приймається");
    }

    if (s === "") 
    {
        return false;
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
    
    throw new ValidationError("Неправильний ввід. Очікується: так/ні (yes/no, 1/0).");
    
}

//createdAt не валидируется то как он будет будет братся из системного времени с помощью метода today в файле "base_funtions.js" 
// по этому значение всегда будет валидно