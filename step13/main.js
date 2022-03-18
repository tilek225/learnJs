// setTimeout(() => {
//     console.log('hello')
// }, 5000);
//
// let i = 0;
// let timerId = setInterval(() => {
//     i++;
//     console.log('Hl');
//     if(i === 5){
//         clearInterval(timerId);
//     }
// }, 1000);

// let btn = document.querySelector('.btn');
// let count = document.querySelector('.count');
// let stop = document.querySelector('.stop');
// let reset = document.querySelector('.reset');
// let list = document.querySelector('.list');
// let interval = document.querySelector('.interval');
//
//
// let i = 0;
// let j = 0;
// btn.addEventListener('click', () => {
//     let timer = setInterval(() => {
//         i++;
//         count.textContent = `${j < 10 ? '0' + j: j} : ${i < 10 ? '0' + i: i}`;
//         if(i === 60){
//             j++;
//             count.textContent = `${j < 10 ? '0' + j: j} : ${i < 10 ? '0' + i: i}`;
//             i = 0;
//         };
//         stop.addEventListener('click', () => {
//             clearInterval(timer);
//         });
//         reset.addEventListener('click', () => {
//             clearInterval(timer);
//             i = 0;
//             j = 0;
//             count.textContent = '00 : 00';
//             list.textContent = '';
//         })
//     }, 100)
// });
// interval.addEventListener('click', () => {
//     list.innerHTML += `
//                 <li>${count.textContent}</li>
//             `
// });

// let now = new Date();
//
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());
// console.log(now.getMilliseconds());
// console.log(now.getTime());

// let birthday ='2007-10-19';
// let now = new Date();
// let different = now - Date.parse(birthday);
// console.log(different / 1000);
// console.log(different / 1000 / 60);
// console.log(different / 1000 / 60/ 60);
// console.log(different / 1000 / 60/ 60/ 24);
// console.log(different / 1000 / 60/ 60/ 24/ 365);
