//async/await in API
console.log("ex21.js file execution started...");
// async function fetchuserdata() {
// const response = await fetch ('https://library-api.postmanlabs.com/books/29cd820f-82f9-4b45-a7f4-0924111b5b89')
// if (!response.status === 200) {
//     throw new Error('Network response was not successful')
// }
// const data = await response.json()
// console.log(data)
// }
// fetchuserdata()


//POST Method to create book
let bookId = null
async function sendapi() {
  try {
    const response = await fetch("https://library-api.postmanlabs.com/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": "postmanrulz"
      },
      body: JSON.stringify({
        title: "Secret33",
        author: "Mars",
        genre: "fiction",
        yearPublished: 2000
      })
    });

    // --- Status Check ---
    if (!response.ok) {
      console.log("Request Failed, Status:", response.status);
      return;
    }

    const data = await response.json();
    console.log(`Created book with ID: ${data.id}`, data);
    bookId= data.id;
  } catch (err) {
    console.error(`Error message is: `, err);
  }
}

//GET Method to get the created book by id
async function getapi(){
    if(!bookId){
        console.log("bookId is not stored in a variable")
        return
    }
try{
    const response = await fetch(`https://library-api.postmanlabs.com/books/${bookId}`,{
        method: 'GET',
        headers:{
            "Content-Type": "application/json",
            "api-key": "postmanrulz"
        }
    })
    if (!response.status === 200) {
        throw new Error('Status is not 200')
    }
    const data = await response.json()
    console.log(`Got data: `,data)
}
catch(err){
    console.error(`Error message is: `, err);
}
}


//PATCH update partial resource data
async function updateapi(){
     if(!bookId){
        console.log("bookId is not stored in a variable")
        return
    }
    try{
        const response = await fetch(`https://library-api.postmanlabs.com/books/${bookId}`,{
            method: 'PATCH',
            headers:{
                "Content-Type": "application/json",
                "api-key": "postmanrulz"
            },
            body: JSON.stringify(
                {
             "checkedOut": true ,
             "yearPublished": 1944,
             "title": "Secret44"
                })
    });

    // --- Status Check ---
    if (!response.ok) {
      console.log("Request Failed, Status:", response.status);
      return;
    }

    const data = await response.json();
    console.log(`Updated data: `,data);
    }
    catch(err){
        console.error(`Error message is: `, err);
    }
}


//DELETE Method to delete book by id
async function deleteapi(){
    if(!bookId){
        console.log("bookId is not stored in a variable")
        return
    }
    try{
        const response = await fetch(`https://library-api.postmanlabs.com/books/${bookId}`,{
            method: 'DELETE',
            headers:{
                "Content-Type": "application/json",
                "api-key": "postmanrulz"
            }
        })
       // --- Status Check ---
    if (!response.ok) {
      console.log("Request Failed, Status:", response.status);
      return;
    }
    else if (response.status === 200 || response.status === 204) {
      console.log(`✅ Book with ID ${bookId} successfully deleted.`);
    } 
    }
        //const data = await response.json()
        //console.log(`Book ${bookId} deleted. Status:`, response.status);    

    catch(err){
        console.error(`Error message is: `, err);
    }
}

await sendapi()
await getapi()
await updateapi()
await deleteapi()
.finally(() => {
    console.log("ex21.js Done");
  });