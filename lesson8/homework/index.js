// import readlineSync from 'readline-sync';



//1
const product = {};

product.name = "PC";
product.price = 1000;
console.log(product);

product.price = 1200;
console.log(product);

product.category = "Electronics";
console.log(product);

product.discount = 10;
console.log(product);

delete product.category;
console.log(product);

product.showInfo = () => 
{
    console.log(`Product Name: ${product.name} Price: ${product.price}`);
}
product.showInfo();

for(pr in product)
{
    console.log(`${product[pr]} - ${pe}`);
}

