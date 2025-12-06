// Various way of declaring function
console.log ("ex10.js file execution started...");

//1. Function declaration without parameter
function Phone()
{
    console.log("Welcome to Nokia phone");
}
Phone() // calling function without parameter

// Function declaration with parameter
function Phone1(brand)
{
    return("Welcome to " + brand + " phone"); //when return is used, can recall it many times
}
console.log((Phone1("Micromax"))) // calling function with parameter within console.log


//Function declaration in add operator
function Add(a,b,c)
{
    return(a+b+c);
}
let result= Add(15,10,5) // declare variable to store data instead of calling function directly
let result2= Add(115,10,5)
console.log(result); //print the returned value
console.log(result2);
// or simply
//console.log(Add(15,10,5)); //call the function with parameter data and print using console.log here 


// alternate way but fixed values so cant recall it many times
var a=10
let b=10
var c=a+b
console.log(c)

//2. Function expression
const Movie = function(movieName,actorName) //calling function by declaring variable
{
    console.log("My favorite movie is "+movieName)
    console.log("My favorite actor is "+actorName)
    console.log(`${movieName} is acted by ${actorName}`); //Modernjs - template literal string concatenation
}
Movie("Thillalangadi","JayamRavi") //return not used so console.log not required to recall the function

//Function expression example2
var MoviePrice = function(Amount)
{
return (Amount*2)
}
let SeasonPrice = MoviePrice(500)
console.log(SeasonPrice)

//3. Arrow function expression: anonymous function used to declare function simply
let Subraction = (ValueA,ValueB) => ValueA-ValueB //declaring variable to store function, parameter, => return
console.log(Subraction(10,5)) //or can store within var and then console log

//Arrow function expression example2
let Minnumber = (a,b,c,d,e) => Math.min(a,b,c,d,e)
let foundmin = Minnumber(1,2,3,4,5)
console.log(foundmin)

//Arrow function expression example3
let abc=(e) => console.log(e)
abc("Hello")    

//4. Function constructor
let Phone2 = new Function("brand","console.log('Welcome to ' + brand + ' phone')") //brand is parameter, console is return value (return is used as string modal)
Phone2("Lava")

//Function constructor example2
let Phone3 = new Function("brand","return('Welcome to ' + brand + ' phone')")
console.log(Phone3("Cellular"))

//Function constructor example3
let add = new Function("a","b","return(a+b)")
console.log(add(10,20))

//5. IIFE - Immediately invoked function expression
;(function(a, b) { //start with semicolon
    console.log(a + b);
})(50, 20);

//6. Generator function but not imp - uses function* & yield keyword 
function* fruitcount (){
    yield 100;
    yield 200;
}

const fruits = fruitcount();
console.log(fruits.next().value); //prints 100
console.log(fruits.next().value); //prints 200

//7.Anonymous function used to declare function simply
let squareroot = function(a){
    return Math.sqrt(a)
    // return a*a
}
console.log(squareroot(25))

//8. Recursive function
function Factorial (n) {
    if (n===1) return 1;
    return n * Factorial(n-1);
}
console.log(Factorial(5)) //prints 120

//9. Higher order function
//1. Callback function
//2. Higher order function



//different ways for Arrow function expression
//if have single parameter, can declare it without ()

let _newid = ni => ni*ni //ni withouth paranthesis () 
console.log(_newid(5)) //prints 25, calling function by using variable name

// without parameter
let Welcomemsg = () => 'hello all' //no parameter //can give 5*5
console.log(Welcomemsg()) //prints 'hello all'

// with parameter
let $add =(a,b)=>a+b //a and b are parameters =>a+b is return
console.log(`Addition value is: ` +$add(1000,5000)) //prints 6000

// with object
let emp = {Fname: "Maha", Lname: "Lakshmi"}
let fullname = emp =>(`${emp.Fname} ${emp.Lname}`)
console.log(fullname(emp))

// within object
let emp1 = {Fname: "Jaya", Lname: "Lakshmi", fullname: () =>(`${emp1.Fname} ${emp1.Lname}`)} //w/o parameter in function & return is within object
console.log(`My pet name is: `+emp1.fullname()) //calling var name.with key name in object

//default value in parameter but can overide if need to call agiain with different value
let _newid1 = (ni=10) => ni*ni //assigning default value as 10
console.log(_newid1()) //prints 100

console.log(_newid1(5)) //prints 25 // can overide the default value

//rest parameter
let _newid2 = (...ni) => ni.reduce((e,f) =>e+f) //2 =>  arrows //reduce for holding values in to 1
console.log(_newid2(5,6,7,100,80)) // prints 198 // can add 'n' number of values here to add

//spread operator
let arr = [1,2,3]
let arr1 = [4,5,6]
let arr2 =[...arr,...arr1] //2 arrays concatenates instead  arr.concat(arr1)
console.log(arr2)

//find max
let arr3 = [1,2,3,4,5,6]
console.log(Math.max(...arr3))

//or

let arr4 = (a,b,c) => Math.max(a,b,c)
console.log(arr4(1,8,1))


console.log ("ex10.js Done");