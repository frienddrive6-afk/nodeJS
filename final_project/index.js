import readlineSync from 'readline-sync';
import fs from 'fs';
import { loadFromJson, saveToJson } from './JSON.js';
import {ValidationError, NotFoundError} from "./errors.js"
import {today, normalize, formatTask} from "./base_funtions.js"
import {Task} from "./classes.js"
import {DATA_FILE, CATEGORIES, CategoryNames, PRIORITES, PrioritesNames} from "./constants.js"





console.log(loadFromJson(DATA_FILE));

