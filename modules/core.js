//named export - function
 export function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
export const name = "Math Module";
//default export
export default subtract;

function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
export { multiply as mul, divide }; //named export - multiple functions and renamed multiply as mul