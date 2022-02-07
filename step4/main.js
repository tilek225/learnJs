// Условное ветвление
// let myStudy = 'good';
//
// if(myStudy === 'good'){
//     console.log("меня отчислят");
// }else {
//     console.log("То все будет хорошо");
// }
//
// let person = {
//     name: "Amir",
//     age:15
// };
// if(person.name.length > 5){
//     console.log("Слишком длинное")
// }else{
//     console.log("Подходит")
// }

// let person = {
//     name: "Amir",
//     age:15,
//     stack:{
//         react: true
//     }
// };
//
// if(person.stack.react){
//     console.log("Подходит");
// } else {
//     console.log("Не подходит");
// }

// let cars = ['BMW', "MERS", "LEXUS"];
// if(cars.length ){
//     console.log(true)
// }else{
//     console.log(false)
// }
//

// let number = 10;
// if(number % 2 === 0){
//     console.log('четный')
// }else {
//     console.log("нечетный")
// }

// let number = 5.6;
//
// if(Math.round(number) === 6){
//     console.log(true)
// }else{
//     console.log(false)
// }

// let car = 'Mercedes-Benz';
// if(car.includes('Benz')){
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// let arr = [1, 2, 3];
//
// if(Array.isArray(arr)){
//     console.log(true)
// }
// else{
//     console.log(false);
// }

// let number = 5;
// if(number >= 5){
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// let number = 9;
// // оператор и - && / оператор или - ||
//
// if(number > 5 || number < 10){
//     console.log(true)
// }else {
//     console.log(false)
// }

// true && true - true
// true && false - false
// false && false - false
// false && true - false

// true || true - true
// true || false - true
// false || false - false
// false || true - true

// console.log(0 && 1);
// console.log(2 && 1);
// console.log(1 && 0);
// console.log(0 && undefined);

// console.log(0 || 1); // 1
// console.log(2 || 1); // 2
// console.log(1 || 0); // 1
// console.log(0 || undefined); // undefined

// let name = 'Abracadbra';
// // if(name.length > 10 || name.includes('Abra')){
// //     console.log(true)
// // }
// // else{
// //     console.log(false)
// // }

// let nums = [10, 101, 102, 103];
// if(nums.length % 2 === 0 && nums[nums.length - 1] %  2 === 0 ){
//     console.log(true)
// } else{
//     console.log(false)
// }

// let go = 'left';
//
// if(go === 'left'){
//     console.log('Apple')
// } else if(go === ' midlle'){
//     console.log('Orange')
// } else if(go === 'right'){
//     console.log('Banana')
// } else {
//     console.log('Nothing')
// }

// let num = 5;
// if(num === 5){
//     console.log("пятерочка")
// } else if(num === 4){
//     console.log("четверочка")
// } else if(num === 3){
//     console.log("троечка")
// }else{
//     console.log("двойка")
// }

let day = "Вторник";
if(day)

    // если день недели равно с пн-пт вывести рабочий день
    // если суббота или воскресеньте выходной
