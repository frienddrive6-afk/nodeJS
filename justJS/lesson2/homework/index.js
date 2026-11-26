import readlineSync from 'readline-sync';


//1
const name = readlineSync.question('Как тебя зовут? ');
if(name === '')
{
    console.log('Имя не может быть пустым');
    process.exit(0);
}

const ageInput = readlineSync.question('Сколько вам лет? ');
if(ageInput === '')
{
    console.log('Возраст не может быть пустым');
    process.exit(0);
}

const age = Number(ageInput);

if(isNaN(age) || age < 0 || age > 120)
{
    console.log('Некорректный возраст');
    process.exit(0);
}

// console.log('Привет ' + name + ', ваш возраст - ' + age);

let childStatus = undefined;
if(age < 13)
{
    childStatus = "Ребенок";    
} else if(age >= 13  && age < 18)
{
    childStatus = "Подросток";
}else if(age >= 18 && age < 65)
{
    childStatus = "Взрослый";
}else if(age > 65)
{
    childStatus = "Пенсионер";
}

const access = (age >= 18) ? "Да" : "Нет";

switch(Number(readlineSync.question('Введите цифру от 1 до 3: ')))
{
    case 1:
    {
        console.log(`Привет ${name}, ваш возраст - ${age}, ваш статус - ${childStatus}, вы доступны к выходу - ${access}`);
        break;
    }
    case 2:
    {
        console.log(`Тип до Number(): ${typeof ageInput}`);
        console.log(`Тип после Number(): ${typeof age}`);
        break;
    }
    case 3:
    {
        console.log("До свидания");
        break;
    }

}
