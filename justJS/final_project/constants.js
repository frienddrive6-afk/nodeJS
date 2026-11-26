export const DATA_FILE = "tasks.json"; // Тут будут сохранятся задачи пользователя что бы не потерять их после закрытия программы

export const dateRegex = new RegExp("^\\d{4}-\\d{2}-\\d{2}$");

// этот константный обьект нужен для того что бы описать существующие категории и удобо работать с ними
export const CATEGORIES = Object.freeze
({
    WORK : 1,               //Работа
    STUDY : 2,              //Учеба
    HOME : 3,               //Дом
    PERSONAL: 4             //персональный
});

// этот константный обьект разшифровка для класса, который описывает категории пользователя
export const CategoryNames = Object.freeze
({
    [CATEGORIES.WORK] : "Работа",
    [CATEGORIES.STUDY] : "Навчання",
    [CATEGORIES.HOME] : "Дом",
    [CATEGORIES.PERSONAL] : "Особисте"
});

// константный Объект для хранения и управления приоритетами задач, позволяющий удобно работать с ними в коде
export const PRIORITIES = Object.freeze
({
    LOW : 1,               // Не важно
    MEDIUM : 2,            // и не важно но счрочнее не важно
    HIGH : 3               // важно/срочно
});

// этот константный обьект разшифровка для класса, который описывает приоритеты пользователя
export const PRIORITIESNames = Object.freeze
({
    [PRIORITIES.LOW] : "Низький",
    [PRIORITIES.MEDIUM] : "Середній",
    [PRIORITIES.HIGH] : "Високий"
});