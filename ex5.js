let cake = {name: "Chocolate Cake", category: "Dessert"}; // Object literal notation
console.log(Object.keys(cake).length); // to get number of keys in an object


let ice_cream={flavor:"Vanilla",scoop:2,price:5};
//let dessert={...cake,...ice_cream};
//let dessert=Object.assign({},cake,ice_cream);
//console.log(dessert);

cake.maker="Nandhini Bakery";
for (let key in cake){
    //console.log(key); // to access keys
    //console.log(cake[key]); // to access values using keys
    console.log(key+":"+ cake[key]) // to access key and value pairs
} 
//console.log("origin" in cake); // using 'in' operator to check property existence
//console.log(cake.hasOwnProperty("price")); // using hasOwnProperty method to check property existence
//console.log("name" in cake);
//delete cake.category && delete cake.price;
//console.log(cake);



/* let cake2= new Object(); // Object constructor notation
cake2.name="Strawberry cake";
cake2.origin="France";
console.log(cake2.origin); */

console.log ("ex5.js file executed");