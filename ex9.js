//array examples set-2
console.log ("ex9.js file execution started...");
//shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
var x=[1,2,3]
let y=x.shift(); //removes first element 1 from array and returns it
console.log(y);//print the removed element
console.log(x); //print the array after removing first element

//splice() method removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
let italiancuisine = ['Pasta', 'Pizza', 'Risotto', 'Tiramisu'];
const $remove_add = italiancuisine.splice(1,2,'Lasagna'); //removes 2 element at index 1 and adds 'Lasagna' at index 1
console.log(italiancuisine); //prints ['Pasta', 'Lasagna', 'Risotto', 'Tiramisu']
console.log ($remove_add); //prints the removed element ['Pizza']

//slice method create new array without disturbing the original array but last index is not included
let indianCuisine = ['Biryani', 'Masal Dosa', 'Parotta', 'Kuzhipaniyaram', 'Appam'];
let newIndianCuisine = indianCuisine.slice(1,4); //creates new array from index 1 to 4 (4 not included)
console.log(newIndianCuisine); //prints ['Masal Dosa', 'Parotta', 'Kuzhipaniyaram']
console.log(indianCuisine); //original array remains unchanged

//indexof() method to find the index of an element in an array
let malayaliCuisine = ['Puttu', 'Appam', 'Idiyappam', 'Meenpozhichathu', 'Fishcurry', 'Puttu'];
console.log(malayaliCuisine.indexOf('Idiyappam')); //prints 2 // //finds the index of 'Idiyappam' in the array
console.log(malayaliCuisine.indexOf('Puttu',2)); //prints 5 //finds the index of 'Puttu' in the array starting from index 2

//includes() method to check if an element is present in an array
let chineseCuisine = ['Noodles', 'Dumplings', 'Sweet and Sour Juice', 'Spring Rolls'];
console.log(chineseCuisine.includes('Sweet and Sour Juice','mango')); //prints true //checks if 'Sweets and Sour Juice' is present in the array even 'mango' is not present since only first argument is considered
console.log(chineseCuisine.includes('Fried Rice')); //prints false //checks if 'Fried Rice' is present in the array

//forEach() method uses a callback function to iterate over each element in the array
let juices = ['Orange Juice', 'Apple Juice', 'Grape Juice']
juices.forEach(function(Juicename){ //Juicename is param in func //callback function to print each juice
    console.log(Juicename + " is a delicious juice");
});

//map() method creates a new array by applying a function to each element of the original array
let juicePrices = [100, 150, 200];
let Priceincrease = juicePrices.map((updatedprice)=>updatedprice + 20); //adds 20 to each price in the array    
console.log(Priceincrease); //prints [120,170,220]
console.log(juicePrices); //original array remains unchanged

//map() method example 2
let Veggies = ['Carrot', 'Broccoli', 'Spinach'];
let veggieLengths = Veggies.map((veggie)=> veggie.length); //Total chars of veggies //creates new array with length of each veggie name
console.log(veggieLengths); //prints [6,8,7]
let veggieUppercase = Veggies.map((veggiecase)=>veggiecase.toUpperCase()); //uppercase veggie names
console.log(veggieUppercase); //prints ['CARROT','BROCCOLI','SPINACH']

//filter() method mainly used to filter elements based on condition and creates a new array
let num=[1,2,3,4,5]
let evennum = num.filter((n)=> n%2==0); //filters even numbers from the array
console.log("Even num in the given array is: " + evennum); //prints [2,4]
let oddnum = num.filter((n)=> n%2!=0); //filters odd numbers from the array
console.log("Even num in the given array is: " + oddnum); //prints [1,3,5]

//using if to check even or odd number of 1 element in array but filter is to apply for whole elements in array
let a = [1, 2, 3, 4, 5];
let n=3
if (n%2==0){
console.log("Even number");     
} else {
    console.log("Odd number");  
}

//filter() method example 2
const chefs=[
    {name:"Ramaswamy", specialty:"South Indian", experience:10},
    {name:"Annapurni", specialty:"North Indian", experience:8},
    {name:"Jamenue", specialty:"French", experience:15},
    {name:"Beauno", specialty:"North Indian", experience:12}]

let availablechefs = chefs.filter((todaychef)=> {
  return todaychef.experience>=10 && todaychef.specialty=="North Indian"
})//callback function to filter chefs with given condn
console.log(availablechefs); //prints chefs with experience >=10 and speciality North Indian

//reduce() method to reduce the array to a single value by applying a function to each element
const orders = [100, 200, 300, 400];
let totalAmount = orders.reduce((total, orderAmount) => total + orderAmount, 1); // total=accumulater, orderAmount=current value, 0=initial value
console.log("Total amount of orders is: " + totalAmount); //prints 1000

//reduce() method example 2 - concatenating all words in an array to form a sentence
const words = ['Hello', 'Welcome', 'to', 'Nandhini 5 Star Hotel '];
let makesentence=words.reduce((fullsentence, word)=>fullsentence + ' ' + word); // concatenates all words in the array to form a sentence
console.log(makesentence); //prints "Hello Welcome to Nandhini 5 Star Hotel"

//reduce() method example 3 - finding maximum value in an array
const ratings = [4.5, 3.8, 4.9, 4.2, 5.0];
let maxRating = ratings.reduce((Max, num) => (num>Max ? num:Max), ratings[0]) // checks 4.5>4.5 , 4.5>3.8 ... & array index of 0 is initial value
console.log("Maximum rating is: " + maxRating); //prints 5.0

//reduce() method ex 4
let classifications = [
    {Combo:"Chat", Price:300},
    {Combo:"Veg snacks", Price: 400},
    {Combo:"Desserts", Price:500}
]

let totalcost= classifications.reduce((total, amount) => total + amount.Price, 0) //.Price added
console.log(totalcost) // o/p: 1200

//find() method used to find the 1st element unlike filter since that will all matching element
let Cuisine = ['North', 'South', 'West', 'East']
let Findcuisine = Cuisine.find(e => e =='West')
console.log(Findcuisine) //o/p: West

//find() method example 2
let nums = [1,2,3,4]
let firstEven = nums.find(n => n % 2 === 0); // find first even
console.log("First even number found :" + firstEven); // 2 

// Every() method returns true if all elements are true
let array = ['Maggie', 'Maggie', 'Maggie'];
let result = array.every((element) => element === 'Maggie');
console.log(result); // true    

// Every() example2
let orderprice = [100,200,300,400]
let orderresult = orderprice.every((e) => e<500)
console.log(orderresult) //true

//Some() method returns true if any (atleast 1) element is true
let orderprice1 = [100,200,300,600]
let orderresult1 = orderprice1.some((e) => e>=500) //true
let orderresult2=orderprice1.some((checkeven)=>checkeven%2==0) //true because 200 & 600 are even
let orderresult3=orderprice1.some((x)=>x<100) //false
console.log(orderresult1) //true
console.log(orderresult2) //true
console.log(orderresult3) //false

//Lastindexof() method returns the last index (occurance) of the element
let orderprice2 = [300,200,300,400]
let orderresult4 = orderprice2.lastIndexOf(300) //[300] last occurance is Array[2]
console.log(orderresult4) //2

//reverse() method used to reverse the array
let Tamilnaducuisine = ['Idly', 'Dosa', 'Uluntha Vada', 'Pongal', 'Poori']
Tamilnaducuisine.reverse()
console.log(Tamilnaducuisine) //['Poori', 'Pongal', 'Uluntha Vada', 'Dosa', 'Idly']

//sort() method used to sort the array
let Tamilnaducuisine1 = ['Idly', 'Dosa', 'Uluntha Vada', 'Pongal', 'Poori']
Tamilnaducuisine1.sort()
console.log(Tamilnaducuisine1) //['Dosa', 'Idly', 'Pongal', 'Poori', 'Uluntha Vada']

//sort() method example2
let TNcusinechefs = ['ramaswamy',"123-&&", 'annapurni','MAHALAXMI', 'Jamenue']
let justsort =TNcusinechefs.sort() //sorts the array in alphabetical order
console.log(justsort) //['123-&&','Jamenue', 'MAHALAXMI', 'annapurni','ramaswamy']
//Note: sort() takes Capital letters before small letters

let comparesort =TNcusinechefs.sort((e1, e2) => e1.localeCompare(e2)) //sorts every element by comparing with next element
console.log(comparesort)//['123-&&', 'annapurni', 'Jamenue', 'MAHALAXMI', 'ramaswamy'] //Perfect sorting
//Note: localeCompare() give accurate sorting


console.log ("ex9.js Done");
