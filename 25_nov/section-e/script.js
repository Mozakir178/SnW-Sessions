// //  const array = [1,2,3,4,5];
// //  console.log(array);

//  // push == apend
// //  array.push(6);
// //  console.log(array);
// //  let removedElement = array.pop();
// //  console.log(array);
// //  console.log(removedElement)

//  const array = [1,2,3,4,5];
//  console.log(array);

// //  array.unshift(5);
// //  console.log(array);

//  array.shift();
//  console.log(array);

// //  memory ->
// //  0*12b -> array
// //  push -> array -> modify 5 -> 6
// //  array -> 0*12b
// //  array = [1,2,3,4,5,6]
// //  array -> 0*12c

// const array = [1,2,3,4,5];
// for i in Range(0,5) :
// i -> start = 0
// i will be increase by 1 in each iteration
// loop will stop once value of i is 5
// const array = [1,2,3,4,5,6];
// for(let i=0;i <array.length  ;i = i+1){
//     //logic
//     console.log(array[i])
// }

// check if number is even or not

// let num = 20 ;
// if(num %2 == 0){
//     console.log("Even ")
// }
// else {
//     console.log("ODD")
// }

// let num3 = 30 ;
// if(num %2 == 0){
//     console.log("Even ")
// }
// else {
//     console.log("ODD")
// }

// let num1 = 25 ;
// if(num %2 == 0){
//     console.log("Even ")
// }
// else {
//     console.log("ODD")
// }

function checkEven(num) {
  if (num % 2 == 0) {
    return true ;
    console.log("Even ");
  } else {
    console.log("ODD"); 
    return false;
  }
}

let first = checkEven(20);
let second = checkEven(30);
let third = checkEven(25);

console.log(first)
