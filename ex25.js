console.log ("ex25.js file execution started...");
//destructing
//destructing arrays
const numbers = [1,2,3,4,5]
const [a,b,c] = numbers //assign a=1,b=2,c=3 and doesnt care about 4,5 since we didnt give d,e
console.log(a,b,c)

//destructing array by using spread operator
const [d, e, ...rest] =
numbers //assign d=1,e=2 and rest=[3,4,5] - rest is a new array
console.log(d,e,rest)

//destructing objects
const person = {uname: 'Manu', age: 20}
const {uname,id ="123", age} = person 
console.log(person)
console.log(uname,id,age)

//function param without destructing
function printfullname(person2){
    console.log (person2.fname+" "+person2.lname)
}
const person2={
  fname: "Santhana",
  lname:"Lakshmi"
}
printfullname(person2)

//function param with destructing
function printfullname2({fname,lname}){
    console.log(fname+" "+lname)
}
let person3={fname:"Amudha", lname:"Lakshmi"}
printfullname2(person3)

//remove duplicates in array
let numarr = [0,1,2,3,3,2,5,1,0]
let stringarr = ['Ram', 'Shyam', 'Ram', 'Krishna', 'Krishna']

let uniquenum = [... new Set (numarr)] //spread operator within array
let uniquestring = [... new Set (stringarr)]

console.log(uniquenum)
console.log(uniquestring)

console.log ("ex25.js Done");