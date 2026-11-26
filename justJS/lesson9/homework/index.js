// import readlineSync from 'readline-sync';



//Задание 1
// class Product
// {

//     constructor(name, price,quantity)
//     {
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }

//     showInfo()
//     {
//         console.log(`Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
//     }

//     increaseQuantity(amount)
//     {
//         this.quantity += amount;
//     }

//     decreaseQuantity(amount)
//     {
//         if(amount > this.quantity)
//         {
//             console.log('err');
//         }else
//         {
//             this.quantity -= amount;
//         }
//     }

// }

// const pr = new Product('apple', 10, 50);
// pr.showInfo();
// pr.increaseQuantity(10);
// pr.showInfo();
// pr.decreaseQuantity(20);
// pr.showInfo();




//Задание 2

class Employee
{
    constructor(name, salary)
    {
        this.name = name;
        this.salary = salary;
    }

    showInfo()
    {
       console.log(`Name: ${this.name}, Salary: ${this.salary}`); 
    }

}


class Manager extends Employee
{
    constructor(name, salary, department)
    {
        super(name, salary);
        this.department = department;
    }

    manageTeam()
    {
        console.log(`${this.name} is managing ${this.department}`);
    }
}


const mn = new Manager('Ivan', 10000, 'IT');
mn.showInfo();
mn.manageTeam();





