import readlineSync from 'readline-sync';
import fs from 'fs';
import { loadFromJson, saveToJson } from './storage.js';
import {ValidationError, NotFoundError} from "./errors.js"
import {today, normalize, formatTask} from "./base_functions.js"
import {Task, createIdCounter} from "./classes.js"
import {DATA_FILE, CATEGORIES, CategoryNames, PRIORITIES, PRIORITIESNames} from "./constants.js"
import {validateTitle, validateIdFromObject, validateDeadline, validateIsDone} from "./validate.js"
import {addTask, showAllTasks, showTask} from "./actions.js"


const tasks = [
    new Task(1, "Подготовить отчет по проекту", CATEGORIES.WORK, PRIORITIES.HIGH, "2026-11-20", false),
    new Task(2, "Сдать лабораторную работу по Node.js", CATEGORIES.STUDY, PRIORITIES.HIGH, "2026-11-25", false),
    new Task(3, "Купить продукты на неделю", CATEGORIES.HOME, PRIORITIES.LOW, null, false),
    new Task(4, "Прочитать книгу по паттернам проектирования", CATEGORIES.PERSONAL, PRIORITIES.MEDIUM, "2026-12-15", false),
    new Task(5, "Починить кран на кухне", CATEGORIES.HOME, PRIORITIES.MEDIUM, "2026-11-18", true),
    new Task(6, "Пройти техническое собеседование", CATEGORIES.WORK, PRIORITIES.HIGH, "2026-11-21", true),
    new Task(7, "Сделать генеральную уборку", CATEGORIES.HOME, PRIORITIES.LOW, "2026-11-28", false),
    new Task(8, "Записаться на курс по базам данных", CATEGORIES.STUDY, PRIORITIES.MEDIUM, null, false),
    new Task(9, "Оплатить счета за коммунальные услуги", CATEGORIES.HOME, PRIORITIES.HIGH, "2026-11-15", false),
    new Task(10, "Сходить на вечернюю тренировку", CATEGORIES.PERSONAL, PRIORITIES.LOW, "2026-11-22", true)
];

console.log(tasks);
// console.log(tasks[0]);
console.log("------------");
// showTask(tasks[0]);
showAllTasks(tasks, true);


