/* function Samsung()
{
    console.log("welcome to Samsung");
}
function Motorola()
{
    console.log("welcome to Motorola");
}
function Iphone()
{
    console.log("welcome to Iphone");
}
 Samsung() //calling functions
 Motorola() 
 Iphone()
 Motorola()
module.exports={Samsung,Motorola,Iphone} 
var a=10
let b=10
function Add()
{
    console.log(a+b);
}
Add()
module.exports={Add} 

var FavActor = "Vijay"
var FavActress = "Anushka"
var FavDirector = "Atlee"
var FavMovie = "Thalapathy"
function fav()
{
console.log("My Favorite Actor is "+FavActor);
console.log("My Favorite Actress is "+FavActress);
console.log("My Favorite Director is "+FavDirector);
console.log("My Favorite Movie is "+FavMovie);  
}
fav()
module.exports={fav} 

function area(leghth, breadth)
{
    console.log("Area of Rectangle is: "+(leghth*breadth));
}
area(5,10)
module.exports={area} */

function Add(a,b)
{
    var add1 = a + b;
    return add1 //instead of console.log use return here
}
//let result= Add(15,10) // data for var instead of calling function directly
//console.log(result); //print the returned value
//or simply
console.log(Add(15,10)); //call the function with parameter data and print using console.log here
console.log ("ex2.js file executed");