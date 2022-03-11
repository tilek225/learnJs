//console.log(document); // документ html
// Получение элементов
// let h1Id = document.getElementById('1'); // получение элемента по id
// console.log(h1Id);
//
// let h1Class = document.getElementsByClassName('title');
// // Получение элементов по классу - вывод в виде псевдвомассива
// // если даже один элемент
// console.log(Array.from((h1Class)));
// // перевод псевдомассива - в нормальный массив

// let h1Tag = document.getElementsByTagName('h1');
// // получение элементов по тего - вывод в псевдомассиве
// console.log(h1Tag);

// let h1Class = document.querySelectorAll('.title');
// console.log(h1Class);

// let h1Alone = document.querySelector('.title');
// console.log(h1Alone);


// Получение текста из документа
// let second = document.querySelector('#name');
//
// // console.log(second.textContent);
// // console.log(second.innerText);
// //
// //
// // console.log(second.innerHTML);
//
// second.innerHTML = 'Hello<span>!!</span>';

// Если мы используем textContent - то мы не можем прочитать теги
// поэтому если у нас в текстовом значении используются теги то
// будем работать с innerHtml - но в основном это textContent

// let text = document.querySelector('p');
// // console.log(text.className);
// // // при использовании className получаем текст
// // console.log(text.classList);
// // // при использовании classList получаем псевдомассив где наш класс разделен через пробел
//
// // text.className += ' red';
//
// // text.classList.add('red'); // Добавить класс
// // text.classList.remove('subtitles'); // Удалить класс
// // text.classList.toggle('black'); // Добавить если нет иначе удалить
// // text.classList.replace('text', 'title'); // заменить первый класс на второй
//
// console.log(text.classList.contains('text')); // Поиск класса - получаем ввиде булиного значения


// Добавление стилей через js

// let div = document.querySelector('.box');
// // div.style.borderRadius = '50%';
// // div.style.width = '300px';
// // div.style.width = '300px';
// // div.style.backgroundColor = 'green';
//
// div.style.cssText = 'width:200px; height : 200px; border-radius: 50%; background: green';


// Работа с атрибутами

// let p = document.querySelector('.text');
// // // console.log(p.attributes);
// // console.log(p.getAttribute('id'));
// // console.log(p.getAttribute('data-test-class'));
// // console.log(p.dataset.testClass);
//
// p.setAttribute('id', 'main');
// // Установить атрибут
// p.removeAttribute('class');
// // Удалить атрибут
// console.log(p.hasAttribute('id'));
// // Проверить на наличие
// console.log(p.getAttribute('id'));
// Получить атрибут

// let h3 = document.createElement('h3'); // Создание нового тега
// let title = document.querySelector('.title');
// let body = document.body;
//
// // title.after(h3); // Добавление элемента после
// // title.before(h3); // Добавление элемента до
//
// h3.textContent = 'Новый элемент';


// body.appendChild(h3);// Добавление элемента в конец
// body.append(h3);// Добавление элемента в конец ++ он принимает ввиде элементво обычные строки
// body.prepend(h3); // Добавление элемента в начале

// let box = document.querySelector('#box');
// let hello = document.querySelector('.hi');

// box.removeChild(hello); // Удалить ребенка обращаясь к родителю
// hello.remove(); // Удалить элемент

// console.log(box.children); // получение потомков
// console.log(box.childNodes); // получение потомков

// console.log(box.childElementCount); // получение количества потомков

// console.log(hello.parentElement); // получение родителя
// console.log(hello.parentNode);  // получение родителя

// console.log(hello.nextElementSibling);// получение соседа после тебя
// console.log(hello.previousElementSibling); // получение соседа до тебя


// console.log(input.value); // получение значения у поля ввода
// console.log(input.checked); // проверка на установку


// btn.onclick = () => {
//     alert('ihi')
// };

// btn.onmouseover = () => {
//    h1.style.background = 'red'
// };
//
// btn.onmouseleave = () => {
//     h1.style.background = 'transparent'
// };
//
// btn.ondblclick = () => {
//     alert('hlkj;lk');
// };
//
//
// let input = document.querySelector('input');
// let btn = document.querySelector('button');
// let agent = document.querySelector('#agent007');
// let agentSpan = document.querySelector('#agent007 span');
//
// btn.addEventListener('click', (event) => {
//     if(input.value.length > 0) {
//         agentSpan.textContent = input.value;
//         input.value = '';
//     }
// });
//
// input.addEventListener('change', (e) => {
//     agentSpan.textContent = input.value;
//
//     if(input.value.length < 1){
//         btn.disabled = true;
//     }else{
//         btn.disabled = false;
//     }
// });
//
// let form = document.querySelector('form');
// let inputText = document.querySelector('#input1');
// let checkBox = document.querySelector('#check1');
// let btnSub = document.querySelector('#sub');
//
// form.addEventListener('submit', (e) => {
//     e.preventDefault(); // функция для для запрета перезагрузки сайта
//     // console.log(e.target[0].value); // получение первого значения в форме
//     // console.log(e.target[1].checked); // получение второго значения в форме
//
//     if(e.target[1].checked) {
//         agentSpan.textContent = e.target[0].value;
//         e.target[0].value = '';
//         e.target[1].checked = false;
//     } else{
//         alert('поставьте галочку')
//     }
// });

let form = document.querySelector('form');
let listItem = document.querySelectorAll('li')
let list = document.querySelector('ul');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let li = document.createElement('li');
    li.textContent = e.target[0].value;
    list.append(li);
    e.target[0].value = ''
});

Array.from(listItem).forEach((item) => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', (e) => {
      item.style.color = `
        rgb(${Math.floor(Math.random() * 225)}, ${Math.floor(Math.random() * 225)}, ${Math.floor(Math.random() * 225)})
        `
    })
});
