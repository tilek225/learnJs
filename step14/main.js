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


// let list = document.querySelector('ul');
// let btn = document.querySelector('.btn');
// let form = document.querySelector('form');
// let h2 = document.querySelector('h2')


// btn.addEventListener('click', e => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => data.forEach((item, idx) => {
//             list.innerHTML += `
//                 <li>${idx + 1}) ${item.title}</li>
//             `
//         })).catch(err => alert('упс произошла ошибка'))
// })

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     fetch(`https://jsonplaceholder.typicode.com/posts/${e.target[0].value}`)
//         .then(res => res.json())
//         .then(data => {
//             h2.textContent = data.title
//         }).catch(err => alert('undefined'))
// });

fetch('http://localhost:8080/users')
    .then(res => res.json())
    .then(data => console.log(data))

let form = document.querySelector('.form');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: e.target[0].value,
            age: e.target[1].value
        })
    }).then(() => console.log('я отправил запрос'))
})



let input = document.querySelector('.number');
let btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
    fetch(`http://localhost:8080/users/${input.value}`, {
        method: 'DELETE'
    }).then(() => console.log('Я удалил успешно'))
        .catch(() => console.log('такого нет'))
})

let change = document.querySelector('.change');
change.addEventListener('click', () => {
    fetch('http://localhost:8080/users/4', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Alex'
        })
    }).then(() => console.log('успешно обновили'))
})