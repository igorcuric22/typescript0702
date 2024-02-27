const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const index=1;

const citrus1=fruits.slice(0, index);
const citrus2=fruits.slice(index+1);

console.log(citrus1,citrus2);

const citrusx=[...citrus1,...citrus2];
console.log(citrusx);

fruits.splice(index,1);
console.log(fruits);

