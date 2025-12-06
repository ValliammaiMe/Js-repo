//Reverse number by converting to string
console.log ("ex24.js file execution started...");
function reverseNumber(num) {
        return Number(num.toString().split("").reverse().join(""));
        //step1: convert to string "12345" 
        //step2: split into array ["1","2","3","4","5"] 
        //step3: reverse ["5","4","3","2","1"] 
        //step4: join into string "54321"
    }
    
    console.log(reverseNumber(12345));

    //or
let num = 123;
let reversed = String(num).split("").reverse().join("");
console.log(reversed);  // 321

//Reverse number without converting to string
function reverseNumber(num) {
    let reversed = 0;
    while (num !== 0) {
      reversed = reversed * 10 + num % 10;
      num = Math.floor(num / 10);
    }
    return reversed;
  }
  
  console.log(reverseNumber(1234));

//explanation:
//1st iteration: reversed = 0 * 10 + 1234 % 10 = 0 + 4 = 4
//2nd iteration: reversed = 4 * 10 + 1234 % 10 = 40 + 3 = 43
//3rd iteration: reversed = 43 * 10 + 1234 % 10 = 430 + 2 = 432
//4th iteration: reversed = 432 * 10 + 1234 % 10 = 4320 + 1 = 4321
//Removing the last digit for each iteration: num = 1234 / 10 = 123.4 =>Math.floor=1123 (roundof)
//Repeating the process until num becomes 0

function abc(getnum){
    let rev = 0
    while(getnum!==0){
        rev = rev*10+getnum%10;
        getnum = Math.floor(getnum / 10);
    
    }
    return rev
}
console.log(abc(1234567))

console.log("ex24.js Done");