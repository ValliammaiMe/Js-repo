// If else and Switch and oprs
console.log ("ex7.js file execution started...");
// //1. Bad practice to use var keyword to declare variables since var will overwrite the value in global and local scop
// let b=7
// b=4
// var x = 10
// if(x>5){
// var x = 55
// let b = 5
// }
// console.log (b+x)
 var c=true
console.log (c)
console.log (typeof c)

let h
console.log (h)
//2. Nested if else example within methods //can add more else if conditions as needed
function Marriage(age){
    let Accept //declaring local variable which can define in multiple if else blocks
    if(age<18){
        console.log("Not Eligible for Marriage");
        Accept="Not accepted"
    }
    else if (age==undefined){
        console.log("Please provide valid age"); // Marriage() w/o parameter calls this part since age is undefined
            Accept="Cant Accept"

    }
    else{
        console.log("Eligible for Marriage");
                Accept="Widely Accepted"
    }
    console.log("Marriage Acceptance Status: "+Accept); // should be within function to access local variable Accept
}
Marriage() //calling function without parameter - else part will execute since age is undefined
Marriage(0) //calling function with parameter //can call method multiple times with different data parameters
Marriage(25) //calling function with parameter

//3. Switch case example
function Tv(brand){ //switch using function with parameter
    switch(brand){
        case "LG":
            console.log("No.1 TV Brand in India is " + brand);
            break;
        case "Samsung":
            console.log("Trusted Brand in Worldwide is " + brand);
            break;
        case "Sony":
            console.log("Good Picture Quality TV Brand is " + brand);
            break;
        case "TCL":
            console.log("Budget TV Brand is " + brand);
            break;
        default:
            console.log("Please provide valid TV Brand");
            
    }   
}
Tv("LG") //calling function with parameter outside of function
Tv("Samsung") 
Tv("Sony") 
Tv("TCL") 
Tv("Panasonic") //invalid brand to call default case

//4. Switch case example2
let day =3 //switch using variable
//switch(1+2){ //expression can be used instead of variable in switch case
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;      
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;          
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");     
}

//5. Pre and Post increment and decrement operators
var ae=5
--ae //pre decrement 1-5=4
console.log (ae)
var be =5
++be //pre increment 1+5=6
console.log (be)
var ce=5
ce++ //post increment 5+1=6
console.log (ce)
var de=5
de-- //post decrement 5-1=4
console.log (de) 


console.log ("ex7.js Done");
