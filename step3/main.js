// Объекты

// let person = { // начало блока кода
//     name: 'Maks', // ключ : значениеб - значением может быть любой тип данных
//     'first name' : 'Tilek' // если ключ состит из двух или более слов то пишем в кавычках ввиде строки
// }; // конец блока кода
//
// console.log(person);
// console.log(person.name) ;// для получения значения ключа
// console.log(person['first name']); // еслимой ключ состоит из двух и более значений, чтобы получить его пишем в квадратных скобках и в кавычках

// let car = {
//     model: "BMW",
//     year: 2020,
//     color: "Black",
//     price: 200,
//     wheels:{
//         left: true,
//         right: true
//     }
// };
// Object.freeze(car); // не позволяет объекту изменять свои данные
// Object.freeze(car.wheels);
// delete car.year; // для удаления ключа, но использовать не будем
// car.price += 400;
// car.wheels.right = !car.wheels.right;
//
// console.log(car);
//
// // let asd = {};
// // console.log(!!asd);// при написание !! перед каким либо значением получем его логическое значение
// // // если ! то получаем противоположное логическое значение

// const car = {
//     model: "BMW",
//     year: 2020,
//     color: "Black",
//     price: 200
// };
// car.price = 300;
// console.log(car);

// let car = {
//     model: "BMW",
//     year: 2020,
//     color: "Black",
//     price: 200,
//     wheels: {
//         right: false,
//         left: true
//     }
// };

// let car2 = {...car, engine: 2.5}; //spred operator - озночает все из car
//
// car2.wheels.right = !car2.wheels.right;
//
// console.log(car);
// console.log(car2);

// let car = {
//     model: "BMW",
//     year: 2020,
//     color: "Black",
//     price: 200,
//     wheels: {
//         right: false,
//         left: true
//     }
// };
// let car2 = Object.assign({engine:2.5}, car);
//
// car2.price = 500;
// car2.wheels.right = !car2.wheels.right;
//
// console.log(car);
// console.log(car2);


// JSON объекты
// let car = {
//     model: "BMW",
//     year: 2020,
//     color: "Black",
//     price: 200,
//     wheels: {
//         right: false,
//         left: true,
//     }
// };
// let car2 = JSON.parse(JSON.stringify());
//
// car2.price = 600;
//
// console.log(car);
// console.log(car2);

// console.log(car.toString());
// console.log(JSON.stringify(car)); // перевод объекта в JSON строк
//
// let str = '{"model":"BMW","year":2020,"color":"Black","price":200,"wheels":{"right":false,"left":true}}';
// console.log(JSON.parse(str));  // перевод строки в JSON  объект

// Массивы

// let fruits = [1, 2, 3, 4];

// console.log(Array.isArray(fruits));

// let obj = {};
// let obj2 = {};
// console.log(obj == obj2);

// let arr = [];
// // let arr2 = [];
// // console.log(arr !== arr2);

// let fruits = ['Orange', 'Lemon', 'Mango', 'Apple', 'Banana'];
//
// // console.log(fruits[Math.floor(fruits.length / 2 )]);
// // let fruit2 = ['Orange', 'Lemon', 'Mango'];
// // let fruits3 = [...fruits, ...fruit2];
// fruits = [...fruits, 'PineApple', 'Cocos', 'WaterMelon'];
// console.log(fruits3);

// let fruits = ['Orange', 'Lemon', 'Mango', 'Apple', 'Banana'];

// fruits.push('WaterMelon'); //добавить эл. в конец массива
// fruits.pop(); // удаляет последний  эл. в массиве
// fruits.shift(); // удаляет первый  эл. в массиве
// fruits.unshift('Apple'); //добавить эл. в начало массива

// console.log(fruits);

// let car = {
//      model: "BMW",
//      year: 2020,
//      color: "Black",
//      price: 200
// };

// console.log('Объект >>>', car);
//
// console.log(Object.keys(car)); // получаем массив из ключей объекта
// console.log(Object.values(car)); // получаем массив из значения ключа объекта
// console.log(Object.entries(car)); // получаем массив из массивов, которые хранят по два значения - это ключ и значение

