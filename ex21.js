//async/await in API
console.log("ex21.js file execution started...");
async function fetchuserdata() {
const response = await fetch ('https://library-api.postmanlabs.com/books/29cd820f-82f9-4b45-a7f4-0924111b5b89')
if (!response.status === 200) {
    throw new Error('Network response was not successful')
}
const data = await response.json()
console.log(data)
}
fetchuserdata()

console.log("ex21.js Done");

