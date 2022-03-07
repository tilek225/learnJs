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