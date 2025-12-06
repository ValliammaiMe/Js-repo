// String methods
console.log("ex23.js file execution started...");
//length
let str = 'MahaLakshmi';
console.log(str.length) //prints 11
console.log("Maha".length) //prints 4

//array position
let str2 = 'MahaLakshmi';
console.log(str2.indexOf('L')) 
console.log(str2.lastIndexOf('L'))
console.log(str2.charAt('5'))
console.log(str2['4']) 
console.log(str2.charCodeAt(2)) //unique code value of character
//case
console.log(str2.toLowerCase()) 
console.log(str2.toUpperCase()) 
//slice
//mahalakshmi
//012345678910
console.log(str2.slice(3,8)) 
console.log("abcdef".slice(1,-3)) 
//substring
console.log(str2.substring(3,8)) 
console.log("abcdef".substring(1,-3)) //-ve value not allowed, consider as 0 
//replace
console.log(str2.replace('Lakshmi', 'Lakshmi1'))
console.log(str2.replace('Lakshmi', 'Lakshmi1').replace('Maha', 'Maha1'))
//replaceall
console.log('12-12-2024'.replaceAll('-', '/')) //prints 12/12/2024
//concat
console.log(str2.concat('1000000'))
console.log("Jessi".concat("jane"))
//split
console.log("Maha Lakshmi".split("L")) //given string and returns array
console.log("Maha,Lakshmi".split(","))
//trim used to remove spaces from beginning and end
console.log("  Maha Lakshmi  ".trim()) 
//trimStart used to remove spaces from beginning
console.log("  Maha Lakshmi  ".trimStart())
//trimEnd used to remove spaces from end
console.log("  Maha Lakshmi  ".trimEnd())
//join
console.log(["Anna","Lakshmi"].join(" ")) //given array and returns string
//repeat
console.log("Maha".repeat(3)) //prints MahaMahaMaha
//Search-find the starting index (position) of the substring
console.log("Maha Lakshmi".search("Lakshmi")) //L starts at index 5
console.log("Maha Lakshmi".search("Lakshmi1")) //not found -1
//includes
console.log("Maha Lakshmi".includes("Lakshmi")) //true
console.log("Maha Lakshmi".includes("Lakshmi1")) //false
//startsWith
console.log("Maha Lakshmi".startsWith("Maha")) //true
console.log("Maha Lakshmi".startsWith("Lakshmi")) //false
//endsWith
console.log("Maha Lakshmi".endsWith("Lakshmi")) //true
console.log("Maha Lakshmi".endsWith("Maha")) //false
//padStart and padEnd
console.log("Maha".padStart(10, 'Lakshmi')) //prints LakshmMaha 6(Lakshm)+4(Maha)=10
console.log("Maha".padEnd(10, '*')) //prints Maha****** 6(Maha)+4(*)=10

console.log("ex23.js done");



