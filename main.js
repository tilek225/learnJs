// Функции

// function callAlert(a, b){
// //     console.log(a + b);
// //     return a + b;
// // }
// //
// // let width = callAlert(5, 5);
// //
// // console.log('моя ширина', width);

//
// function sayHello(str) {
//     let num = 5;
//     return str + num
// }
//
// console.log(sayHello('Hello'));
// console.log(sayHello('Hi'));

// function compresstion(a, b) {
//     if(a > b){
//         return 'Больше'
//     }
//     return 'Меньше'
// }
//
// console.log(compresstion(5, 10))

// function cutFunc(str) {
//     let str2 = 'break'
//     return `${str.slice(1)} ${str2.slice(1)}`
// }
//
// console.log(cutFunc('word'))

// let users = [
//     {
//         id: 1,
//         name: 'Max',
//         age: 22
//     }
// ];
//
// function addUser(name, age) {
//     users = [...users, {
//         id: users.length + 1,
//         name: name,
//         age: age
//     }]
// }
//
// addUser('Nurs', 21);
// addUser('Amir', 55);
// console.log(users);

// function foo(str) {
//     return str
// }
//
// console.log(foo('Hello'));

// function multiply(a, b) {
//     return a * b
// }
//
// console.log(multiply(5, 5));

// function foo(a) {
//     if(a > 5){
//         return 'больше'
//     }
//     return 'меньше или равно'
// }
//
// console.log(foo(6));

// function foo(str) {
//     if(str.includes('hello')){
//         return true;
//     }
//     return false;
// }
//
// console.log(foo('hello world'));

// function arrChange(arr) {
//     for(let i = 0; i < arr.length; i++){
//         arr[i]*=2
//     }
//     return arr
// }
//
// console.log(arrChange([1, 2, 3, 4, 5]));

function foo(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result
}

console.log(foo([1, 2, 3, 4, 5]));