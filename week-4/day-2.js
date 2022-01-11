// challenge 1

// const simpleFunc = () => {
//   return ("Hello Code Nation!")
// }

// const highOrder = (arg) => {
//   for (i = 0; i < 5; i++) {
//       console.log(arg)
//   }
// }

// highOrder(simpleFunc());

// challenge 2

// const sum = (num1, num2) => {
//   return num1 + num2;
// };

// const highOrder = (num1, num2, fn) => {

//   let total = 0;
//   for (i = 0; i < 5; i++) {
//    total += fn(num1, num2)
//     console.log(total)
//   }
// }

// highOrder(2, 3, sum);

// challenge 3

// const numberArr = [1, 2, 3, 4, 5];

// const newArr = numberArr.map(item => item * 3);

// console.log(newArr);

// challenge 4

// const multiply = (a, b) => {
//   return a * b
// };

// const add = (a, b) => {
//   return a + b
// };

// const divide = (a, b) => {
//   return a / b
// };

// const subtract = (a, b) => {
//   return a - b
// };

// const doMath = (num1) => {
//   return (num2, fn) => {
//     return fn(num1, num2)
//   }
// };

// console.log(doMath(multiply(8, 3)))
