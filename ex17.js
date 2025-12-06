//Callback functions - a function that is passed as an argument to another function and is executed inside the outer function
//async call/task - once this task is done, then only callback function will be called

//1. basic callback synchronous (no wait)
console.log("ex17.js file execution started...");
function myFunction(name,callback,callback2) { //callback is name of callback function, can give any, passing 3 arguments
        callback(); //callback function excute first here
        console.log("Hello Professor! " + name); //within myFunction function
        callback2(); //callback2 function excute last here
    }
    
    function callbackFunction() { //can give any name in function name to callback
        console.log("Callback function executed!");
    }
    
    function callbackFunction2() {
        console.log("Callback function 2 executed!");
    }
  myFunction("Nandhini", callbackFunction, callbackFunction2); //giving 3 arguments data to myFunction
console.log('-----------------')  
    
//2. callback with parameters
    function myFunction2(name2,callback3) { 
        console.log("Hello Professor! " + name2); 
        callback3(name2);  //with parameter or give 'hi' string parameter
    }
    
    function callbackFunction3(name2) {  //with parameter must or throw error as name2 is not defined
        console.log("Callback function executed!"+ name2); // 'hi' can also give
    }
    myFunction2("Mekala", callbackFunction3); 

    console.log('-----------------')

//3. callback with asycronous function
function embroidary(empname,work){ //work=callback argument name here
    
        console.log(empname + ' continuously doing embroidary');
      setTimeout(function(){
        work('take rest...'); //callback function with parameter
    }, 2000) //'take rest...' will print after 20secs of printing embroidary console.log
}
function design(message){  //design is callback function name & message is parameter to print 'take rest...'
    console.log(message);
}

embroidary('Kalaivanan',design); //passing 2 arguments to embroidary function

console.log('-----------------')

//another example
function empstatus(empid, statusupdate){
    let emp = {
        1: {id: 1, name: "Nisha", status: "Absent"}, //object of objects 
        2: {id: 2, name: "Lakshmi", status: "Present"},
        
    }
    
    let employee = emp[empid]
//     setTimeout(function(){
//     if (employee){
//         statusupdate(null, employee);
//     }
//     else{
//         statusupdate("Employee not found", null);
//     }
//     }, 2000)
// }
// function statusupdate(error, employee){
//     if (error){
//         console.log(error);
//     }
//     else{
//         console.log(employee);
//     }
// alternate way using ternary operator instead if else above code
    setTimeout(() => {
        // one line instead of if-else
        statusupdate(employee ? null : "Employee not found", employee || null);
    }, 2000);
}

function statusupdate(error, employee){
    console.log(error || employee);
}


empstatus(2, statusupdate);
empstatus(3, statusupdate);



console.log('ex17.js Done');