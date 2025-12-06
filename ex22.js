//Diff types of console
console.log("ex22.js file execution started...");
console.log("abc")
console.error("xyz")
console.warn("pqr")
console.info("mno")
console.debug("jkl")
const obj = {name:"abc", age:20}
const obj2= {name:"efg", age:10}
console.table({obj, obj2})
console.group("Started")
console.log("abc")
console.log("xyz")
console.groupEnd()
console.groupCollapsed("Started")
console.log("abc")
console.log("xyz")
console.groupEnd()
console.time("Total time")
console.log("abc")
console.log("xyz")
console.timeEnd("Total time")
//console.clear()
console.count("apple")
console.count("apple")
console.count("mango")
console.assert(10>15, "Failer error")
let flag=false
console.assert(flag, "Failer error")
function abc()
{
    console.trace()
}
abc()
console.log("%c Hi Madam!", "font-size: 20px; color: blue; background-color: yellow;")
console.log("ex22.js Done");
