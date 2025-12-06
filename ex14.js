// Find unique value from array
console.log ("ex14.js file execution started...");
//way1
let arr = [1, 2, 3, 4, 5, 5, 1,2];

let unique = arr.filter((value, index) => arr.indexOf(value) === index); //indexOf method returns the first occurrence of an element
console.log(unique);
//way2
let unique1 = [...new Set(arr)]; //Set returns unique value //spread operator
console.log('unique1 is:' + unique1);
//way3
let unique2 =[]
arr.forEach(element => {
    if (!unique2.includes(element)){
        unique2.push(element);
    }
});
console.log(`unique2 is:  ${unique2}`);

//int to string
let a=10;
let b=a.toString();
console.log(b+50); //10+50=1050 since concatinating string 10
//or
let strconvert = String(a);
console.log(strconvert+80);

//string to int
let c='10';
let d=parseInt(c);
console.log(d+50); //10+50=60 since adding int 10

//string to float
let e='10.5';
let f=parseFloat(e);
console.log(f+50); //10.5+50=60.5

//string to boolean
let g='true';
let h=Boolean(g);
console.log(h);

//float to int
let i=10.7;
let j=parseInt(i);
console.log(j);

//string to float
let k='6.5';
let l=parseInt(k); //returns 6
let m=parseFloat(k); //returns 6.5
console.log(l);
console.log(m);

//check if a var is number
const isNumber = (value) => typeof value === 'number'  //returns true or false
console.log(isNumber(10)); //true
console.log(isNumber('10')); //false

//or

const isNumber1 = '22';
if (typeof isNumber1 === 'number'){
    console.log('isNumber1 is a number'); 
}
else{
    console.log('isNumber1 is not a number');
}

//swap variable values
let a1 = 10;
let b1 = 5; 

[a1, b1] = [b1, a1]; //; is must when starts with [ or ( otherwise error occurs

console.log(a1, b1); //5 10

//check if object has property
let box = {pen: 'Cello', pencil: 'Apsara'};
if (box.hasOwnProperty('pencil')){
    console.log('property is present'); //print
}
else{
    console.log('property is not present');
}

//or
console.log('eraser' in box); //false
//or
if ('pen' in box){
    console.log('property is present'); //print
}
else{
    console.log('property is not present');
}

//remove falsy values from array
let arr1 = [1, 2, 3, 4, 0,'',"", false, null, undefined, NaN,5,6];
let removefalse = arr1.filter(Boolean); //returns the array by removing falsey values
console.log(removefalse); //prints [1,2,3,4,5,6]

//string to uppercase / lowercase
let textbook = "AlcHemISt"
var upper = textbook.toUpperCase();
console.log(upper);
var lower = textbook.toLowerCase();
console.log(lower);

//check if array is empty
let arr2 = [];
if (arr2.length === 0){ //length 0 checks ->not arr[0]
    console.log('array is empty'); //print
}
else{
    console.log('array is not empty');
}
//check array has specific length
let flower = ['jasmine','rose','lotus'];
if (flower.length === 3){
    console.log('array is not empty'); //print //length 3 checks
}
else{
    console.log('array is empty');
}

// check if array contains value

let flower2 = ['jasmine','rose','lotus'];
console.log(flower2.includes('december')); //false

//or
if (flower2.includes('rose')){
    console.log('Element found'); //print
}
else{
    console.log('Element not found');
}

//generate a random number
let min=100
let max=1000
let random = Math.random(); //returns a random floating number between 0 and 1, it wont go beyond 1
console.log(`just random floating nuber between 0 & 1 is : ${random}`)

let random1 = Math.floor(Math.random()*(max-min+1) + min); //1000-100+1=901, 100 min = 100-901 values it will provide
console.log(`whole random number between ${min} & ${max}-99 is : ${random1}`) //random number between 100 & 1000 is : random1);

//Join array elements in to string
const welcomemsg = ['hello','dude!!','welcome','to','Nandhini','5','star','hotel']; //array
const joinedmsg = console.log(welcomemsg.join(' ')); //prints hello dude!! welcome to nandhini 5 star hotel

//split string into array
const msg = 'hello world';
const splitmsg = console.log(msg.split(' ')); //prints ['hello','world']

//check if a var is string
const isString = (value) => typeof value === 'string'
console.log(isString('hello')); //true
console.log(isString(10)); //false

//clone array - Create a duplicate of an array
const arr3 = [1,2,3,4,5];
const arr4 = arr3.slice(); //clones the array by using slice
console.log(arr4); //prints [1,2,3,4,5]

//or
const arr5 = [...arr3] //Clone by using spread operator
console.log(arr5) //prints [1,2,3,4,5]

//clone objects
const obj1 ={name:'Manu', age:20};
const obj2 = Object.assign({},obj1); //clone by using Object.assign
console.log(obj2);

//or
const obj3 = { ...obj1} //clone by using spread operator
console.log(obj3);

//check if a element is array
const isArray = (value) => Array.isArray(value)  //returns boolean value
console.log(isArray([1,2,3])); //true
console.log(isArray(10)); //false

//or
const arr6 = [1,2,3];
if (Array.isArray(arr6)){
    console.log('array is present'); //print
}
else{
    console.log('array is not present');
}

//or
const arr7 = ([1,2,3]);
if (arr7 instanceof Array){
    console.log('arr7 is present'); //print
}

//Convert object to array
let emp = {Fname: "Maha", Lname: "Lakshmi"}
//Key array
let empkeys = Object.keys(emp);
console.log(empkeys); //prints ['Fname', 'Lname']
//Value array
let empvalues = Object.values(emp)
console.log(empvalues); //prints ['Maha', 'Lakshmi']
//Key value array
let converkeyvalues = Object.entries(emp);
console.log(converkeyvalues); //prints [['Fname', 'Maha'], ['Lname', 'Lakshmi']]

//convert array to object
let emp0 = [['Fname','Maha'],['Lname', 'Lakshmi']]; //key value array ['Maha','Lakshmi'];
let emp1 = Object.fromEntries(emp0);
console.log(emp1); //prints {Fname: 'Maha', Lname: 'Lakshmi'}

//get current date & time
let datetime = new Date()
console.log(datetime.toLocaleDateString(), datetime.toLocaleTimeString()); //11/22/2022, 9:56:30 PM

//Check var is defined
let var1;
if (typeof var1 !== 'undefined'){
    console.log('var1 is defined'); 
}
else{
    console.log('var1 is not defined'); //print
}

//truncate string
let str1 = 'hello world';
console.log(str1.slice(0,7)); //prints hello w //letter starts from 0 count

//or
let str2 = 'hello world';
console.log(str2.substring(0,7)); //prints hello w

//truncate array using slice - slice returns a copy of the array
let arr8 = [1,2,3,4,5];
console.log(arr8.slice(0,3)); //prints [1,2,3]

//or
arr8.length = 3;
console.log(arr8);

//or truncate array using splice removes/changes the original array.
let arr9 = [1,2,3,4,5,6];
console.log(arr9.splice(0,3)); //prints [1,2,3]
//now original array is changed and removed [1,2,3] and mutated array is [4,5,6]
//find first item in array
console.log(arr9.slice(0,1)); //prints [4]


//find last item in array

console.log(arr9.slice(-1)); //prints [6]

console.log ("ex14.js Done");