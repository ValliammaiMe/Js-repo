//Array methods example set 1
console.log ("ex6.js file execution started...");
 var array = [1,2,3,4,5];
//var arr=array[0]
//console.log(arr);
console.log(array);
//console.log("2nd array is:"+" "+ array[2]);
//let last = array[array.length - 1];
//console.log("last array is:"+" "+ last);
array[10]=6; // 1st way to add element at end   
array.push(6);  // 2nd way to add element at end
array.unshift(0); // 3rd way to add element at beginning
array.splice(3,0,"a"); // 4th way to add element at specific index 
console.log(array); 

let birds2 = ['Parrot', 'Peacock', 'Eagle', 'Phoenix', 'Penguin'];
console.log(birds2);
birds2.pop(); // removes last element
console.log(birds2);
birds2.shift(); // removes first element
console.log(birds2);
birds2.splice(2, 1); // removes 1 element starting from index 2
console.log(birds2); 
let b=birds2.length;
console.log(b);
for (let b=0; b<birds2.length; b++){
    console.log(birds2[b]);
} 
let birds = ['parrot', 'peacock', 'eagle', 'phoenix', 'penguin'];
let animals = ['Dog', 'Cat', 'Elephant', 'Tiger', 'Lion'];
let combine = birds.concat(animals);
console.log("concatination done: "+ combine);
console.log(typeof birds);
console.log(birds);// prints as array
let stringchange = birds.toString();// converts array to string
//console.log(stringchange);// prints as string
console.log(birds.toString()); // (default separator)
console.log(birds.join(' | ')); // (custom separator) 

const mobiles = ["iPhone", "Samsung", "OnePlus", "Google Pixel", "Nokia"];
let pickspecific = mobiles.slice(2,4) // creates a new array from index 2 to 4 (4 not included)
console.log(pickspecific); // prints ["OnePlus", "Google Pixel"]
console.log(mobiles); // original array remains unchanged
let removesecond = mobiles.splice(2,1); // removes 1 element at index 1
//console.log(removesecond); // prints ["Samsung"]
console.log(mobiles); // prints ["iPhone", "OnePlus", "Google Pixel", "Nokia"] 

const BakeryItems = ["Cake", "Bread", "Cookies", "Croissant", "Muffin"];
//let B= BakeryItems.some((Bitems)=>Bitems="Bread") // checks if "Bread" is present in the array
//let b = BakeryItems.filter((Bitems)=> Bitems.startsWith('C')); // filters items starting with 'C'
console.log(b); 

let a = [1, 2, 3, 4, 5];
//a.reduce()
a.reverse();
console.log(typeof a);




console.log ("ex6.js Done");