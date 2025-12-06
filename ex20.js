//async function without await -resolved promise
console.log("ex20.js file execution started...");
async function Art(){ //modern promise
    console.log("A wonderful Mana Lisa Painting is drawn by Leonardo da Vinci"); //sync step within asyn function
    return 'Always Art is a magic!' //sync step, no need await to print this
} //but it returns a resolved promise

Art()
.then((result)=>{
    console.log(result)
})

//async function without await - rejected promise
async function UnknownArt(){
    console.log("A good art by unknown artist")
    throw new Error('Artist name not found!')
}

UnknownArt()
.catch((error)=>{
    console.error(error)
})

//async function with resolved/reject promise
function Auditorium() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let audience = 100
        if (audience<1000){
            resolve('Auditorium have space')
        }
        else{
            reject (new Error('Auditorium is full'))
        }
        },2000)
    })
}

//calling Auditorium() with function2 with async/ await
async function getAuditoriuminfo(){
    try{
        let auditorium = await Auditorium()
        console.log('Resolved: ', auditorium) //handles many resolved promises
    }
    catch(error){
        console.error(error) // handles many rejected promises
    }
}
getAuditoriuminfo()


console.log("ex20.js Done");

