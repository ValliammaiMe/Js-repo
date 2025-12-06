// while loop example
console.log ("ex8.js file execution started...");
let count = 2; // initialize count to 2
while (count < 5) {
    console.log("Count is: " + count); 
    //count++; // increment count by 1
    count=count+2; // increment count by 2
}
// do while loop example
    var h=1 //initialize h to 1
    do { //execute the loop first
        console.log("h is: " + h);
        ++h; //1+1=2,2+1=3,3+1=4,4+1=5,5+1=6
    } while (h <= 5); //check the condition after executing the body
    if (h>=6){
        console.log("h is equal to 6 now.not less that 5");
    }   

    // while with break statement
    var n=14; //initialize n to 10
    while (n<=100){ //check the condition first 
        console.log("n is: " + n);
        if(n%10==0){ //check if n is a multiple of 10 -> 14%10=4 not multiple,...20%10=0 multiple
            console.log("n is a multiple of 10,breaking the loop now.");
           break; //exit the loop if n is a multiple of 10 
        }
        n++; //increment n by 1 //without this n will be always 14 and infinite loop
    }

   // while with continue statement
   var m=11; //initialize m to 11
   while (m<=15){ //check the condition first 
       console.log("m is: " + m);    
         if(m%2==0){ //check if m is even number -> 8%2=0 even,...9%2=1 odd
                console.log("m is even number,skipping the print statement for even numbers.");
                m++; //increment m by 1
                continue; //skip the print statement for even numbers
            }
        console.log("Printing odd number: " + m); //print only odd numbers
        m++; //increment m by 1
   }        

// while with continue statement example 2
    for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  console.log(i);
}
// nested while loop example
    var p=1;        //initialize p to 1
    while (p<=3){  //outer loop condition
        console.log("Outer while loop p is: " + p);
        var q=1;

        while (q<=2){ //inner loop condition
            console.log( "Inner while loop q is: " + q);
            q++; //increment q by 1
        }
        p++; //increment p by 1
    }

    
    console.log ("ex8.js Done");
