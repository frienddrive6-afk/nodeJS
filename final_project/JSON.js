import fs from 'fs';

export function loadFromJson(DATA_FILE)
{
    if(!fs.existsSync(DATA_FILE))
    {
        return [];
    }

    try 
    {
        const raw = fs.readFileSync(DATA_FILE, "utf-8");
        return JSON.parse(raw);    
    } catch (error) 
    {
        console.error(error);
        return [];
    }
}

export function saveToJson(tasks,DATA_FILE)
{
    fs.writeFileSync(DATA_FILE,JSON.stringify(tasks, null,2));
}