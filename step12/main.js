let todoList = [
    {
        id: 1,
        title: 'Название задания',
        isDone: false,
        isImportant: false,
    },
    {
        id: 2,
        title: 'Название задания',
        isDone: false,
        isImportant: false,
    },
    {
        id: 3,
        title: 'Название задания',
        isDone: false,
        isImportant: false,
    }
];// Список дел и каждое дело является отдельно объектом

let list = document.querySelector('.todo__list'); // тег ul - для принятия списков
let form = document.querySelector('.todo__form'); // форма для добавления задач
let todoAllDelete = document.querySelector('.delete__btn');

const showList = (status = 'all') => { // главная функция выполняет добавление элементов в список

    todoList.filter((item, idx) => {
        if(status === 'done'){
            return item.isDone
        } else if(status === 'important'){
            return item.isImportant
        } else {
            return item;
        }
    }).forEach((item, idx) => { // перебор массива наших задач
        // для добавления в тег ul - наши задачи
        list.innerHTML += ` 
        <li class="todo__item">
            <span class="todo__item-title" style="color: ${item.isImportant ? 'red' : ''}; text-decoration: ${item.isDone ? 'line-through' : ''} ">${item.title}</span>
            <div class="todo__item-btns">
                <button class="todo__item-btn done" data-id="${item.id}">Done</button>
                <button class="todo__item-btn important" data-id="${item.id}">Important</button>
                <button class="todo__item-btn delete" data-id="${item.id}">Delete</button>
            </div>
        </li>
        `
    });

    let todoBtnDelete = document.querySelectorAll('.delete'); // получение псевдомассива кнопок удалить
    let todoImportant = document.querySelectorAll('.important'); // получение псевдомассива кнопок важных
    let todoDone = document.querySelectorAll('.done'); // получение псевдомассива кнопок выполненых
    let todoCount = document.querySelector('.todo__count-num'); // получение span
    let todoEmpty = document.querySelector('.todo__empty'); // получение тега h2 для отображения текста при пустоте


    todoBtnDelete.forEach((item) => { // перебор кнопок удалиеть
        item.addEventListener('click', e => {
            todoList = todoList.filter((el) => { // переопределяем список дел удаляем , на который нажали
                return item.dataset.id != el.id;
            });
            list.innerHTML = '';
            showList();
        })
    });

    todoImportant.forEach((item) => {
        item.addEventListener('click', e => {
            todoList = todoList.map((el ) => {
                if (item.dataset.id == el.id) {
                    return { ...el, isImportant: !el.isImportant }
                }
                return el
            });
            list.innerHTML = '';
            showList();
        })
    });

    todoDone.forEach((item) => { // перебор кнопок выполненых
        item.addEventListener('click', e => { // добавления события при нажалтии на кнопку
            todoList = todoList.map((el) => { // переопределение списка дел - где найдя по индексу изменяем значение ключа isDone на противоположный
                if (item.dataset.id == el.id) {
                    return { ...el, isDone: !el.isDone }
                }
                return el
            });
            list.innerHTML = ''; // обнуляем текст внутри ul
            showList(); // заново вызываем функцию
        })
    });
    todoCount.textContent = todoList.length; // записываем значение для количества - берем из длина списка
    todoEmpty.style.display = todoList.length ? 'none' : 'block'; // если список пуст, то задаем display block иначе none

};

form.addEventListener('submit', e => { // при отправку формы вызываем функцию
    e.preventDefault(); // функция для запрета обновления страницы

    todoList = [...todoList, {
        id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1, // устанавливаем значение , которое будет больше на 1 чем предыдущий
        title: e.target[0].value, // устанавливаем из данных , которые получили при отправке формы
        isDone: false,
        isImportant: false
    }]; // переопределяем список дел где говорим все что у тебя было и новый объект

    e.target[0].value = ''; // обнуляем значение поля ввода
    list.innerHTML = '';
    showList();
});
let all = document.querySelector('.status__all');
let important = document.querySelector('.status__important');
let done = document.querySelector('.status__done');
let todoStatus = document.querySelector('.todo__status')

all.addEventListener(('click'), () => {
    todoStatus.textContent = 'All';
    list.innerHTML = '';
    showList()
});

important.addEventListener('click', () => {
    todoStatus.textContent = 'Important';
    list.innerHTML = '';
    showList('important')
});

done.addEventListener('click',() => {
    todoStatus.textContent = 'Done';
    list.innerHTML = '';
    showList('done')
});
todoAllDelete.addEventListener('click', () => {
    list.innerHTML = '';
    todoList = [];
    showList();
});


showList();
