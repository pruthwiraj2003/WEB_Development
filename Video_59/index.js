console.log("Faulty Calculator")
// Creat a fulty calculator using java script this faulty calculator 
/*
Thies calculator dose following :
1. It takes two number as input from the user 
2. It performs wrong operation as follows 
+ ----> -
* ----> +
- ---> /
/ --->**


it performs 10% of the time 
*/

let random = Math.random()
let a=prompt("Enter the first number :")
let b=prompt("Enter the second number :")
let c=prompt("operation")

let obj = {
    "+": "-",
    "*":"+",
    "-":"/",
    "/":"**"


}

console.log(random)
if(random > 0.1){
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);       
}else{
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);  

}
