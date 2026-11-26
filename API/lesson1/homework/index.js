import readlineSync from 'readline-sync';
import { readFile, writeFile } from "node:fs/promises";

const DATA_FILE = "notes.json";

let notesArray = [];

try {
    const raw = await readFile(DATA_FILE, "utf-8");
    if (raw.trim() !== "") {
        notesArray = JSON.parse(raw);
    }
} catch (err) {
    notesArray = [];
}

let lastId = 0;
if (notesArray.length > 0) {
    lastId = notesArray.reduce((max, t) => (t.id > max ? t.id : max), 0);

}

while (true) {
    console.log("\n=== Меню ===");
    console.log("1) Добавить заметку");
    console.log("2) Показать все заметки");
    console.log("3)Удалить по id")
    console.log("0) Выйти");

    const raw = readlineSync.question("Ваш выбор: ").trim();

    if (raw === "") {
        console.log("Пустой ввод");
        continue;
    }

    const answer = Number(raw);

    if (Number.isNaN(answer)) {
        console.log("Введите число.");
        continue;
    }

    if (answer === 0) {
        break;
    }

    if (answer === 1) {
        const text = readlineSync.question("Введите текст новой заметки: ").trim();

        if (text === "") {
            console.log("Заметка не может быть пустой");
            continue;
        }

        const note = {
            id: lastId + 1,
            text: text,
        };

        lastId = note.id;
        notesArray.push(note);

        await writeFile(DATA_FILE, JSON.stringify(notesArray, null, 2), "utf-8");
        console.log(`Заметка добавлена (id ${note.id}).`);

    } else if (answer === 2) {
        if (notesArray.length === 0) {
            console.log("Пусто");
        } else {
            notesArray.forEach(note => {
                console.log(`[id ${note.id}] ${note.text})`);
            });
        }

    }else if(answer === 3)
    {
        const oldLen = notesArray.length;

        let delId = readlineSync.question("Введите id который нужно удалить: ").trim();

        if(delId === "")
        {
            continue;
        }

        delId = Number(delId);

        if(Number.isNaN(delId) === true)
        {
            console.log("Не айди");
            continue;
        }


        notesArray = notesArray.filter(note => note.id !== delId);

        if(notesArray.length === oldLen)
        {
            console.log("заметка с таким айди не найдена");
        }else
        {
            await writeFile(DATA_FILE, JSON.stringify(notesArray,null,2), "utf-8");
            console.log(`Заметка ${delId} Удалена`);
        }
    } else {
        console.log("Такой вариант не известен");
    }
}