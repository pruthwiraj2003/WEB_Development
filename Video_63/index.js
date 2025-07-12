let arr = [1 ,2 ,3 ,4, 5,7]
// Index   0,1, 2 , 3,4 ,5
// console.log(arr)
// console.log(arr.length)
arr[0]=5666
// console.log(arr[0])
console.log(arr.toString())
console.log(arr.join(" And "))
arr.pop()
console.log(arr)
console.log(arr.push("Abhisek"))
console.log(arr.toString())
arr.shift()
console.log(arr)
console.log(arr.unshift("Sachit"))
console.log(arr)
delete arr[4]
console.log(arr)
arr.concat(arr , arr)
console.log(arr)
console.log(arr.slice(2))
