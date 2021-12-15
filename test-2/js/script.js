/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
movieDB.movies.sort();
const addBlock = document.querySelector('.promo__adv');
addBlock.remove();

const poster = document.querySelector('.promo__bg');
poster.firstElementChild.textContent = 'ДРАМА';
poster.style.backgroundImage = 'url("img/bg.jpg")';

const filmsList = document.querySelectorAll('.promo__interactive-item');
filmsList.forEach((film, index) => {
    film.textContent = `${index+1} - ${movieDB.movies[index]}`;
    console.log(movieDB.movies[index]);
});