import readlineSync from 'readline-sync';
import fs from 'fs';
import { loadFromJson, saveToJson } from './storage.js';
import {ValidationError, NotFoundError} from "./errors.js"
import {today, normalize, formatTask} from "./base_functions.js"
import {Task, createIdCounter} from "./classes.js"
import {DATA_FILE, CATEGORIES, CategoryNames, PRIORITIES, PRIORITIESNames} from "./constants.js"
import {validateTitle, validateIdFromObject, validateDeadline, validateIsDone} from "./validate.js"
import {addTask} from "./actions.js"



const tasks = loadFromJson(DATA_FILE);
const nextId = createIdCounter(tasks)

addTask(tasks,nextId);

console.log(tasks);
console.log(tasks[0]);


