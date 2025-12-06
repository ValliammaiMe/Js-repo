//For loop examples
console.log ("ex4.js file execution started...");
for (count=2; count<=10;count=count+=2) // start from 1, count up to 10, increment by 1
    {
    console.log("This is count number " + count); // whatever we give in console.log, take it as input
} 

 for (count=5; count >=1;--count) // start from 10, count down to 1, decrement by 1
    {
    console.log("This is count number " + count); // whatever we give in console.log, take it as input
}   
for (count=1;count<=3;++count) 
{
    console.log("Maggie"); //print Maggie 3 times
} 
for (bucket=3; bucket<=6; bucket++)
{
    console.log(bucket)
} 

for (tables = 1; tables<=10; tables++) // start from 1, count up to 10, increment by 1
{
    console.log(tables+"X 2 = " + (tables*2)); // take tables value and multiply by 2
}
//1. for of for loop example
let colors = ["Red", "Green", "Blue", "Yellow"];
for(var c of colors) //for of loop which prints each value of array separately
{
    console.log(c);
}
console.log(colors); //1.1 prints entire array
//2. for in for loop example
for (var index in colors) //for in loop which prints index of each value of array separately
{
    console.log(index); //arr starts from index 0
}
for (let x=0; x<=colors.length; x++) //traditional for loop to print each value of array separately
{
    console.log(colors[x]);
}

//for in loop in object
    const person = {fname:"John", lname:"Doe", age:25};
    for(let x in person){ //key (fname,..), index is not used here
        console.log(x + ": " + person[x]);   //person[x] will give value of key stored in x
    }

//can use break in if else condition inside while/for loops
    const color = ["Green", "Blue", "Purple"];
    for (let appearance of color) { //for of loop to iterate through array
        console.log(appearance);
        if (appearance === "Blue") {
            console.log("Blue color found,breaking the loop now.");
            break; //exit the loop when appearance is "Blue" since if is inside for loop
        }   
    }


    
    console.log ("ex4.js Done");