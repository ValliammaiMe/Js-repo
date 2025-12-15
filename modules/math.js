import subtract from './core.js'; //default import
//import * as time from './time.js'; //default import
import { add,name as modulename, mul, divide } from './core.js'; //named import-multiple

console.info(modulename)
console.log(add(5,3))
console.log(subtract(5,3))
console.log(mul(5,3))
console.log(divide(6,3))
// console.log(time.currentday(), time.currentTime())
// console.log(import.meta.url)
// console.log(import.meta)
const time = true;
if (time==true){
let timemodule =await import('./time.js'); //dynamic import
console.log(timemodule.currentday(), timemodule.currentTime())
}
else {
    console.log("No time module")
}