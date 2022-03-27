// отправить get запрос на получение всех задач и показать их в списке
// убрать текст "ваш список пуст " если есть задачи
// возможность добавить задачу с помощью post запроса и после запроса нужно вызвать получение еще раз
// посчитать количество задач

let list = document.querySelector('.todo__list');
let empty = document.querySelector('.todo__empty');
let form = document.querySelector('.todo__form');
let todoCount = document.querySelector('.todo__count-num');

form.addEventListener('submit', e => {
    e.preventDefault();
    let getTime = new Date();
    fetch('http://localhost:8080/tasks', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: e.target[0].value,
            time: getTime.toString().substr(16, 5),
            isImportant: false,
            isDone: false
        })
    }).then(() => {
        list.innerHTML = '';
        getAll();
    })
    e.target[0].value = '';

})

function getAll() {
    fetch('http://localhost:8080/tasks')
        .then(res => res.json())
        .then(data => {
            data.forEach((item, idx) => {
                list.innerHTML += `
                <li class="todo__item">
                    <div>
                        <span class="todo__item-time">${item.time}</span>
                        <span style="color: ${item.isImportant ? 'red' : ''}; text-decoration: ${item.isDone ? 'line-through' : ''} " class="todo__item-title">${item.title}</span>
                    </div>

                    <div class="todo__item-btns">
                        <button class="todo__item-btn done" data-id="${item.id}">Done</button>
                        <button class="todo__item-btn important" data-id="${item.id}">Important</button>
                        <button class="todo__item-btn delete" data-id="${item.id}">Delete</button>
                    </div>
                </li>
            `
            }
            )
            let deleteBtn = document.querySelector('.delete')
            deleteBtn.addEventListener('click', e => {
                let current = e.target;
                current = current.getAttribute('data-id')
                console.log(current);
                fetch(`http://localhost:8080/tasks/${current}`, {
                    method: 'DELETE',
                }).then(() => {
                    console.log('Sucsess')
                }).catch(() => console.log('такого нет'))

            })

            if (data.length) {
                empty.style.display = 'none'
            } else {
                empty.style.display = 'block';
                empty.textContent = 'Ваш список пуст'
            }
            todoCount.textContent = data.length;
        })

}
getAll();