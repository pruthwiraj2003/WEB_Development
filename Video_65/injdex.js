// write a program to calculate factorial of a number using reduce and using for  loops
// let number = 6
// let result = 1;
// for (let index = 1; index <=number; index++) {
//      result = result * index;
//     console.log(result)
    
// }

// function factorial(number){
//     let arr = Array.from(Array(number+1).keys())
//     console.log(arr.slice(1,))
//     let c = arr.slice(1,).reduce((a,b)=>{
//         return a*b
//     })
//     console.log(c)
// }
// factorial(number);
// factorial(10)

function forfact(number){
    if (number ==0 || number == 1){
        return 1

    }
    let res =1
    for (let index = 1; index <= number; index++) {
        res = res*index
        
    }
    return res
}
console.log(forfact(1))