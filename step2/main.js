//Числа

// let num = 10.25;
//
// console.log(num.toString()); //метод для преобразования числа в строку
// console.log(num + ''); // перевод через конкатенацию
// console.log(+num.toFixed(2)) // округление с переводом числа в строку, указываем количество символов после точки

// Библиотека внутри браузер Math

// let num2 = 5.5;
// console.log(Math.floor(num2)); // округление в меньшую сторону
// console.log(Math.ceil(num2)); // округление в большую сторону
// console.log(Math.round(num2)); // округление до ближайщего целого
// console.log(Math.trunc(num2)); // удаление значения после запятой

// console.log(Math.round(Math.random() * 10 + 10)); // получение случайного числа в диапозоне от 10 до 20
// console.log(Math.max(2, 3, 4, 5, 2)) // получение максимального числа
// console.log(Math.min(2, 3, 4,2 , 5)) // получешние минимального числа
// console.log(Math.pow(5, 2)) // возведение первого числа в степень значения второго числа

// Cтроки

// let name = 'Tilek';
// let name2 = "Tilek";
// let name3 = `Tilek`;
//
// console.log(`${name3} Alex`)//шаблоная строка - через деструктуризацию можем написать логику JS

// let num = '5';
// console.log(+num);
// console.log(Number(num));
// console.log(num * 0)
// console.log(parseFloat(num));
// console.log(parseInt(num))

// let name = 'Tilek';
// console.log(name.length); //кол-во символов в строке
// console.log(name[0]); //получение первого символа в строке
// console.log(name[name.length -1 ]);//получение последнего символа в строке

// let name = 'Машина';
// // name[name.length - 1] = 'o'; // не работает
// // console.log();

// let car = 'Lexus';
// console.log(car.toUpperCase());// перевод строки в верхний регистр
// console.log(car.toLowerCase());// перевод строки в нижний регистр
//
// console.log(car.repeat(2)); // повторение строки

// Поиск подстроки в строке
// let car = 'Lexuse';
// console.log(car.startsWith('Lex', 1)); //поиск подстроки в строке с начала строки
// console.log(car.endsWith('us')); //поиск подстроки в строке с конца строки
// console.log(car.includes('exu')); //поиск подстроки в строке в любом положении
//
// console.log(car.indexOf('ex')); //поиск подстроки с начала строки при совпадении выдает нам его индекс при неудаче -1
// console.log(car.lastIndexOf('e')); //поиск подстроки с конца строки при совпадении выдает нам его индекс при неудаче -1

// Получение подстроки
// let name = 'Maksat';
//
// console.log(name.slice(0, 4)); // получение подстроки в строке указывая параметры откуда до чего, минусовое значение не читает
// console.log(name.substring(-1, 3));//получение подстроки в строке указывая параметры откуда до чего, минусовое значение переводит в ноль
// console.log(name.substr(-1, 1)); //получение подстроки в строке указывая параметры откуда и сколько символов, минусовое значение обратный отсчет

//сравнение строк
// console.log('Яблоко' > 'Ананас');

//спец символы

// let name = 'Iv\nan';
// console.log(name);

//trim
let name = ' Tilek ';
console.log(name.trim());