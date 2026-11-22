export const DATA_FILE = "FOLDER_tasks/tasks.json"; // Тут будут сохранятся задачи пользователя что бы не потерять их после закрытия программы

// const CATEGORIES = ["Робота", "учеба", "дом", "личное"];

// этот класс нужен для того что бы описать существующие категории и удобо работать с ними
export const CATEGORIES = 
{
    WORK : 1,               //Работа
    STUDY : 2,              //Учеба
    HOME : 3,               //Дом
    PERSONAL: 4             //персональный
};

// этот класс разшифровка для класса, который описывает категории пользователя
export const CategoryNames = 
{
    [CATEGORIES.WORK] : "Робота",
    [CATEGORIES.STUDY] : "Учеба",
    [CATEGORIES.HOME] : "Дом",
    [CATEGORIES.PERSONAL] : "Личное"
};


// const PRIORITET = [1, 2, 3];

// Объект для хранения и управления приоритетами задач, позволяющий удобно работать с ними в коде
export const PRIORITES = 
{
    LOW : 1,               // Не важно
    MEDIUM : 2,            // и не важно но счрочнее не важно
    HIGH : 3               // важно/срочно
};

// этот класс разшифровка для класса, который описывает приоритеты пользователя
export const PrioritesNames =
{
    [PRIORITES.LOW] : "Низкий",
    [PRIORITES.MEDIUM] : "Средний",
    [PRIORITES.HIGH] : "Высокий"
};