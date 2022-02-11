// let num = 5;
// num > 6 ? console.log('больше 6')
//     : num > 3 ? console.log('больше 3')
//     : console.log('больше или меньше 6');


// let num = 5;
// switch (num) {
//     case 5:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     default:
//         console.log('не попал')
// }
// switch (true) {
//     case num > 6:
//         console.log(1);
//         break;
//     default:
//         console.log(0);
//
// }

// простые методы массивов

// let fruits = ['Apple', 'Peach', 'Orange'];
//
// fruits.push('Cocos'); // create
// fruits.shift('Cocos'); // delete
// fruits[0] = 'Banana'; // update
// console.log(fruits); // get
//
// let fruits = ['Apple', 'Peach', 'Orange'];
// // console.log(fruits.slice(0, 1)); // вырезает значение из массива с заданием индесков
// fruits.splice(1, 2, 'cocos'); // удаляет эелемнты с массива по указаным индексом откуда и сколько
// // и имеет возможность добавить другие элементы в данную область
// console.log(fruits);
//
// let arr1 = [1, 2 ,3];
// let arr2 = [4, 5, 6];
//
// arr1 = arr1.concat(arr2, 'adda', 'adfda');
// console.log(arr1);
//
//
//
// let fruits = ['Apple', 'Peach', 'Orange', 'Apple'];
//
// console.log(fruits.indexOf('Peach', 1)); // поиск эл. с начала при совпадении индекс элемента
// console.log(fruits.lastIndexOf('Peach', 1)); // поиск эл. с конца при совпадении индекс элемента
// console.log(fruits.includes('Apple')); // поиск эл. при совпадении дает булинное знчение

// let arr = [2, 5, 1, 3, 8, 4, 11, 22];
// console.log(arr.sort((a, b) => a - b));

// let fruits = ['Apple', 'Peach', 'Orange', 'Apple'];
//
// console.log(fruits.reverse());

// let str = '29-02-2020';
// console.log(str.split('-', ));

// let fruits = ['Apple', 'Peach', 'Orange', 'Apple'];
// console.log(fruits.join('/ '))

// let cars = 'LEXUS';
// console.log(cars.split('').reverse().join(''));
// let arr =  [[1, 2], [3, 4], 5];
// console.log(arr.flat());

// const myAwesomeArray = [1, 2, 3, 4, 5];
// console.log(myAwesomeArray.fill('Amir', 1, 4));

// let obj = {
//     name:'Ivan',
//     surname:'Ivanov',
//     age: 15,
//     luffy: "Не моя группа",
//     gender: undefined
// };
//
// for(let key in obj){
//     console.log(obj[key]);
// }

// let fruits = ['Apple', 'Peach', 'Orange', 'Apple'];
//
// let i = 0;
// for(let item of fruits){
//     fruits[i] = item +1
// }
//
// console.log(fruits);



