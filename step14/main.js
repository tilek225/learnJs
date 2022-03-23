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
let btn = document.querySelector('.btn');
let form = document.querySelector('form');
let h2 = document.querySelector('h2')


btn.addEventListener('click', e => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => data.forEach((item, idx) => {
            list.innerHTML += `
                <li>${idx + 1}) ${item.title}</li>
            `
        })).catch(err => alert('упс произошла ошибка'))
})

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${e.target[0].value}`)
        .then(res => res.json())
        .then(data => {
            h2.textContent = data.title
        }).catch(err => alert('undefined'))
});