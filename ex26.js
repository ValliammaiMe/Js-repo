let empdetails = {
    ename:"John",
    age:30,
    city:"New York",
    exp: 5,
    contact: 87879
}
//destructing
const {ename, age}= empdetails
console.log(ename, age) //instead of empdetails.name, empdetails.age

//destructing with renaming
const {city: location, exp: experience} = empdetails
console.log (location, experience)

//destructing with default value
const {contact, salary=50000} = empdetails
console.log (contact, salary)

//destructing with default value but value exists
const {ename: empname, age: empage=25} = empdetails
console.log (empname, empage) //empage should be 30 since age exists in empdetails

//destructing using rest operator
const {ename: ename1, ...restdetails} = empdetails
console.log (ename1, restdetails) //restdetails is a new object with remaining key-value pairs

//function param destructing
function printempdetails({ename, city, exp}){
    console.log (ename+" from "+city+" has "+exp+" years of experience.")
}
printempdetails(empdetails) 
//function param destructing with default new value
function printempdetails2({ename, salary=60000}){
    console.log (ename+" has "+salary+" salary.")
}
printempdetails2(empdetails)
//function param destructing with default new value but value exists
function printempdetails3({ename, age: empage=28}){
    console.log (ename+" is "+empage+" years old.")
}
printempdetails3(empdetails) //empage should be 30 since age exists in empdetails
//function param destructing with rest operator
function printempdetails4({ename, ...rest}){
    console.log (ename+" details: ", rest)
}
printempdetails4(empdetails)

console.info("destructing objects/functions are done")

//destructing arrays
const [physics, chemistry, maths] = [95, 90, 85]
console.log ("Physics: " + physics, "Chemistry: " + chemistry, "Maths: " + maths)

//destructing array with default value
const [english, biology, computer=80] = [88, 92]
console.log ("English: " + english, "Biology: " + biology, "Computer:" + computer) //computer should be 80 since not exists in array

//destructing array with rest operator
const [sub1, sub2, ...restsubs] = [75, 85, 95, 80, 70]
console.log (sub1, sub2, restsubs) //restsubs is a new array with remaining values

//destructing with empty slots
const [first, , third] = [10, 20, 30]
console.log (first, third) //skips 20 which is in empty slot
