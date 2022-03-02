// Рекурсия

// Рекурсивная функция - это функция которая вызывает сама себя до окончания памяти
// В рекурсии есть главное условие -  это условие выхода из рекурсии
// Рекурсия работает намного быстрее чем цикл

// let i = 0;
// const task = () => {
//     if(i === 400){
//         return i;
//     }
//     i++;
//     console.log(i);
//     task();
// };
// task();


// Каррирование - это когда функция принимает более 1 параметра и которую мы делим на группу
// функции которые принимает по 1 параметру и каждая функция возвращает другую ввиде анонимной

// const task = (a, b, c) => {
//     return a + b + c;
// };
// console.log(task(5, 7, 10));

// const task = a => {
//     return b => {
//         return c => {
//             return a + b + c
//         }
//     }
// };
// console.log(task(5)(10)(7));

// const task2 = task(5);
// const task3 = task2(10);
// console.log(task3(7));


// Замыкание
// Замыкание - это функция(внутр) внутри другой функции(главная) и наша внутр функция получает доступ ко всем
// параметрам и переменным главной функции
//
// const task = (a) => {
//     let num = 5;
//     return (b) => {
//         return a + b + num
//     }
// };
// console.log(task(5));


// ES6 syntax

// Spread operator - замена concat [...arr, 1]
// Шаблоная строка - `${a}`
// Ленивая инициализация - когда я могу задать значения параметров функции сразу
// Short hand - работа с объектом, то есть ког
// const task = (a, b = 3 ) => {
//     return a + b
// };
// console.log(task(1));

// let name = 'Max';
// let obj = {
//     age : 23,
//     name,
//     react: true
// };
// console.log(obj);

// Деструктуризация - вывод отдельного ключа в объекте в отдельную переменную
// let obj = {
//     name : 'Max',
//     age : 23,
//     react : true
// };
//
// let {name, age, react} = obj;
// console.log(name);
// console.log(age);
// console.log(react);

// let arr = ['Ivan', 'Bolvan', 'Alex'];
// let [first, second, third] = arr;
//
// console.log(first);
// console.log(second);
// console.log(third);


// Rest operator - принимается в параметрах функции и всегда является последним , то есть - это означает, что это все остальное
// и это у нас массив

// const task = (a, b, ...other) => {
//     return other
// };
// console.log(task(1, 2, 6, 8, 11, 13, 24, 26));

