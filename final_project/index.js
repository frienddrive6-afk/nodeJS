import readlineSync from 'readline-sync';
import fs from 'fs';
import { loadFromJson, saveToJson } from './JSON.js';
import {ValidationError, NotFoundError} from "./errors.js"
import {today, normalize, formatTask} from "./base_functions.js"
import {Task} from "./classes.js"
import {DATA_FILE, CATEGORIES, CategoryNames, PRIORITES, PrioritesNames} from "./constants.js"
import {validateTitle, validateIdFromObject, validateDeadline, validateIsDone} from "./validate.js"




console.log(loadFromJson(DATA_FILE));

