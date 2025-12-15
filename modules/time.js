//export default currentTime
function currentday(){
    let day = new Date()
    return day.toLocaleDateString();
}
function currentTime(){
    let date = new Date();
    return date.toLocaleTimeString();
}

export { currentday, currentTime }; //named export