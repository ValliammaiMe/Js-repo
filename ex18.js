// // //Async simple example promise
console.log ("ex18.js file execution started...");
// const randomnumber = new Promise((resolve, reject) => { //start with “Promise object  instance”//can give any name to resolve and reject but commonly used resolve and reject
//     setTimeout(()=>{ //async call
//         let min = 1
//         let max = 10
//         const num = Math.floor(Math.random() * (max - min + 1)) + min //random number between 1 and 10
//         if (num>=5){
//             resolve(num)
//         }
//         else {
//             reject(new Error(`Number ${num} is less than 5`)) //rejects the promise with error message (num)
//         }
//     })
// })

// randomnumber 
// .then((result)=>{ //resolve runs here, can give any name in parameter since .then takes only resolve values
//     console.log('Promise resolved, random number is: ' , result)
// })
// .catch((err)=>{ //reject runs here, can give any name in parameter since .catch takes only reject values
//     console.error('Promise rejected ', err)
// })

console.log('------')

//Promise
function geteven(number,callback){ //start with function method with parameter as callback
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if (number%2==0){
            resolve(number)
        }
        else{
            reject(new Error(`Number ${number} is not even`))
        }
    },callback)    
    })
}

//Promise chaining
geteven(8,1000) //1000=1sec wait async //input for first promise resolve (function parameter inputs)
.then((result)=>{
    console.log('Step1: Promise resolved: ' , result) //if satiesfies,go to next return or go to catch error 
    return geteven(9898,2000) //2 sec wait //input for next promise resolve .then() //return is must for promise chaining
})
.then((result)=>{
    console.log('Step2: Promise resolved: ' , result)
})
.catch((err)=>{
    console.error('Promise rejected ', err)
})


console.log('ex18.js Done');