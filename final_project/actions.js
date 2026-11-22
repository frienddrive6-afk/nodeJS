import readlineSync from 'readline-sync';
import {Task, createIdCounter} from "./classes.js"
import {validateTitle, validateIdFromObject, validateDeadline, validateIsDone} from "./validate.js"
import {DATA_FILE, CATEGORIES, CategoryNames, PRIORITIES, PRIORITIESNames} from "./constants.js"

export function addTask(Tasks,newId)
{
    while(true)
    {
        try 
        {
            const id = newId();
            const title = validateTitle(readlineSync.question("Введите задачу которую нужно сделать: "));
            
            Object.entries(CategoryNames).forEach(([id, name]) => {
                console.log(`${id} - ${name}`);
            }); 
            
            const category = validateIdFromObject(
                readlineSync.question(`Категория (1-${Object.keys(CATEGORIES).length}): `),
                CATEGORIES
            );
            Object.entries(PRIORITIESNames).forEach(([id, name]) => {
                console.log(`${id} - ${name}`);
            }); 
            
            const priority = validateIdFromObject(
                readlineSync.question(`Приоритет (1-${Object.keys(PRIORITIES).length}): `),
                PRIORITIES
            );

            const deadline = validateDeadline(readlineSync.question("Вевдите дату до которой хотите сделать задачу(пример 2026-11-21): "));

            const isDone = validateIsDone(readlineSync.question("Вы уже сделали эту задачу? (да/нет) если нажмете enter зачистаентся как 'нет': "));
            
            Tasks.push(new Task(id,title,category,priority,deadline,isDone));
            // console.log(id,title,CategoryNames[category], PRIORITIESNames[priority], deadline, isDone);
            break;
        } catch (error) 
        {
            console.log(error);
        }
        
    }

}