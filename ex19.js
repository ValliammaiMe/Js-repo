//Promise all
console.log("ex19.js file execution started...");
function task1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           let num =10
           if (num>5){
            resolve(`Task1 resolved: ${num}`)
           }
           else {
            reject(new Error (`Task1 rejected: ${num}`))
           }
        },1000)
    })
}
function task2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           let num =6
           if (num>5){
            resolve(`Task2 resolved: ${num}`)
           }
           else {
            reject(new Error (`Task2 rejected: ${num}`))
           }
        },500)
    })
}          

// Promise.all([task1(),task2()]) //square brackets for array
// .then((result)=>{
//     console.log(`All Success: ${result}`)
// })
// .catch((error)=>{
//     console.error(`All Error: ${error}`)
// }
// )   

// Promise.allSettled([task1(),task2()]) //settled returns both resolved and rejected under resolved status
// .then((result)=>{
//     result.forEach((result)=>{
//         if (result.status=='fulfilled'){ //fulfilled or rejected is internal property of promise in js
//             console.log(result.value) //o/p: Task1 resolved:10 Task2 resolved:6
//         }
//         else {
//             console.error(result.reason)
//         }
//     }) //catch wont work for allsettled
// })
// Promise.allSettled([task1(),task2()]) 
// .then((result)=>{
// console.log("All Success:", JSON.stringify(result)); //o/p in json array format for better readable
// })


// //Promise race

// Promise.race([task1(),task2()]) //race returns first one alone which has fastest execution time of promise regardless of resolved or rejected
// .then((result)=>{
//     console.log(`Race Success: ${result}`)
// })
// .catch((error)=>{
//     console.error(`Race Error: ${error}`)
// }
// ) //catch can use in race

//Promise any

Promise.any([task1(),task2()]) //any returns first resolved promise which has fastest execution time
.then((result)=>{
    console.log(`Any Success: ${result}`)
})
.catch((error)=>{
    console.error(`Any Error: ${error}`)
}
)


console.log("ex19.js Done");