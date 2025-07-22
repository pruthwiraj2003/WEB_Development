console.log("Script.js Installing")
// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children
function grtRandomColor(){
    let val1 = 233;
    let  val2= 124;
    let val3 = 111;
    return `rgb(${val1}.$)`
}
Array.from(boxes).forEach(e=>{
    console.log(e)
})