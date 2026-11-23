import fs from 'fs';
import { DATA_FILE } from "./constants.js";
import {Task} from "./classes.js"

export function loadFromJson()
{
    if(!fs.existsSync(DATA_FILE))
    {
        return [];
    }

    try 
    {
        const jsonString = fs.readFileSync(DATA_FILE, "utf-8");

        if (!jsonString.trim()) {
            return [];
        }

        const raw = JSON.parse(jsonString);

        return raw.map(obj => Object.assign(Object.create(Task.prototype), obj)); 
    } catch (error) 
    {
        console.error(error);
        return [];
    }
}

export function saveToJson(tasks)
{
    fs.writeFileSync(DATA_FILE,JSON.stringify(tasks, null,2));
}