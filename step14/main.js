// // Promise

// const person = {
//     name: "Amir",
//     age: 15,
//     happy: true
// }

// const p = new Promise((resolve, reject) => {
//     if(person.happy){
//         resolve(`Мы получили ответ что ${person.name} счастлив`)
//     } else{
//         reject(`Увы ${person.name}`)
//     }
// }).then((res) => {
//     console.log(res);
//     console.log('hello')
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {s
//     console.log('Промис работает')
// })


let list = document.querySelector('ul');
let btn = document.querySelector('button');

btn.addEventListener('click', e => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => data.forEach((item, idx) => {
            list.innerHTML
        }))
})
