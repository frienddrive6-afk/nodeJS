// import readlineSync from 'readline-sync';

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age  = age;
//     };
//
//     sayHello() {
//         console.log(`${this.name} ${this.age}`);
//     };
//
//     birthday() {
//         this.age++;
//         console.log(`${this.name} ${this.age}`);
//     }
// }
//
// const user1 = new User("AA", 12);
// const user2 = new User("BB", 12);
//
// user1.sayHello();
// user1.birthday();
//
// console.log(user1);
// console.log(user2);
//



// class User {
//     constructor(name, email, age) {
//         this.name = name;
//         this.email = email;
//         this.age = age;
//     };

//     showInfo() {
//         console.log(`name: ${this.name}`);
//         console.log(`email: ${this.email}`);
//         console.log(`age: ${this.age}`);
//         console.log(this.isAdult());
//     };

//     changeEmail(email) {
//         this.email = email;
//     };

//     isAdult() {
//         return this.age >= 18;
//     };
// }

// const user1 = new User('John', 'aa@proton.me', 11);
// const user2 = new User('Capybara', 'capybara@proton.me', 21);

// user1.showInfo();
// user2.showInfo();

// user1.changeEmail('john@proton.me');
// user1.showInfo();






// class User
// {
//     constructor(name, age)
//     {
//         this.name = name;
//         this.age = age;
//     }

//     showInfo()
//     {
//         console.log(`${this.name}, ${this.age} лет`);
//     }
// }


// class Admin extends User
// {
//     deleteUser()
//     {
//         console.log('Пользователь удален');
//     }

//     constructor(name, age, accesLevel)
//     {
//         super(name, age);
//         this.accesLevel = accesLevel;
//     }
// }


// const admin = new Admin('Admin', 30, "Полный");
// console.log(admin);




// class BankAccount
// {
//     constructor(owner, balance)
//     {
//         this.owner = owner;
//         this.balance = balance;
//     }

//     deposit(amount)
//     {
//         this.balance += amount;
//     }

//     withdraw(amount)
//     {
//         if (amount > this.balance)
//         {
//             console.log('Недостаточно средств на счете');
//         }
//         else
//         {
//             this.balance -= amount;
//         }
//     }

//     showBalance()
//     {
//         console.log(`Баланс: ${this.balance}`);
//     }
// }


// const account = new BankAccount("Blad", 1000);
// account.showBalance();
// account.deposit(500);
// account.showBalance();
// account.withdraw(2000);
// account.withdraw(300);
// account.showBalance();







// class Animal
// {
//     constructor(name, age)
//     {
//         this.name = name;
//         this.age = age;
//     }


//     makeSound()
//     {
//         console.log(`Животное издало звук`);
//     }
// }


// class Dog extends Animal
// {
//     constructor(name, age,breed)
//     {
//         super(name, age);
//         this.breed = breed;
//     }

//     bark()
//     {
//         console.log('Гав-гав');
//     }
// }

// const dog = new Dog('Шарик', 3, 'Овчарка');
// dog.makeSound();
// dog.bark();
// console.log(dog);





class Character
{
    constructor(name, health, level)
    {
        this.name = name;
        this.health = health;
        this.level = level;
    }

    showInfo()
    {
        console.log(`Имя: ${this.name} Здоровье: ${this.health} Уровень: ${this.level}`);
    }

    takeDamage(damage)
    {
        this.health -= damage;
        if (this.health < 0)
        {
            this.health = 0;
        }
    }
}

class Warrior extends Character
{
    constructor(name, health, level, weapon)
    {
        super(name, health, level);
        this.weapon = weapon;
    }

    attack()
    {
        console.log(`Воин атакует с помощью ${this.weapon}`);
    }

}

class Mage extends Character
{
    constructor(name, health, level, mana)
    {
        super(name, health, level);
        this.mana = mana;
    }

    castSpell()
    {
        if (this.mana >= 20)
        {
            this.mana -= 20;
            console.log('Заклинание успешно применено');
        }else
        {
            console.log('Недостаточно маны для применения заклинания');
        }
    }
}

const warrior = new Warrior('Воин', 100, 1, 'Меч');
warrior.showInfo();
warrior.attack();
warrior.takeDamage(30);
warrior.showInfo();

const mage = new Mage('Маг', 80, 1, 50);
mage.showInfo();
mage.castSpell();
mage.showInfo();

















