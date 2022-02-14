// Инкременты и декременты
// let num = 1;
// let num2 = 1;
// console.log(num++); // 1 //Постфиксный инкремент
// console.log(num++); // 2
// console.log(num++); // 3
//
// console.log(++num2); // 2 Префиксный инкремент
// console.log(++num2); // 3

// let num = 1;
// let num2 = 1;
// console.log(num--); // 1 //Постфиксный декремент
// console.log(num--); // 0
// console.log(num--); // -1
//
// console.log(--num2); // 0 Префиксный декремент
// console.log(--num2); // -1
//

// Циклы
// let i = 0; // старт
// while(i < 5){ // условие продолжительности цикла - пока старт меньше чем 5
//     i++; // шаг
//     console.log(i); // вывод моего значения
// };

// let i = 0;
// do {
//     i++; // шаг
//     console.log(i); // вывод моего значения
// } while(i < 5);

//старт     условие шаг
// for (let i = 0; i < 5; i++){
//     console.log(i);
// }



// цикл от 0 до 15
// for(let i = 0; i < 15; i++){
//     console.log(i)
// }

// for(let i = 2; i <= 20; i+=2){
//     console.log(i);
// }
//
// let result = 0;
// for (let i = 0; i <= 10; i++){
//     result+=i;
// }
// console.log(result);

// let str = 'qwerty';
// for(let i = 0; i < str.length; i++){
//     console.log(str[i])
// }

// for (let i = 0; i < 10; i++){
//     if(i === 5){
//         continue;
//     }
//     console.log(i)
// }

// let str = 'abracadabra';
// for(let i = 0; i < str.length; i+=2){
//     console.log(str[i])
// }

// let str = 'qweqweqwe';
// for(let i = 0; i < str.length; i++) {
//     if (str[i] === 'q') {
//         console.log(str[i])
//     }
// }

// let str = '456788123';
// for(let i = 0; i < str.length; i++){
//     if(+str[i] > 5){
//         console.log(str[i]);
//     }
//
// }

// let arr = [3, 3, 4, 4, 5];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         console.log(arr[i]);
//     }
// }

// let arr = [3, 3, 4, 4, 5];
// for(let i = 0; i < arr.length; i++){
//     arr[i]+=2;
// }
// console.log(arr);

// let arr = [1,2,3, 'Ivan', true];
// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] !== 'number'){
//         console.log(arr[i]);
//     }
// }

let arr = ['Hello', 'Hello world', 'Hi', 'Hellooooo', 'Thank'];
for(let i = 0; i < arr.length; i++){
    if(arr[i].includes('Hello')){
        console.log(arr[i]);
    }
}