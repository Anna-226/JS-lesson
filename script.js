"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

if (numberOfFilms < 10) {
    alert('Мало фильмов');
} else if (numberOfFilms<30) {
    alert('Вы классический зритель');
} else if (numberOfFilms>30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка")
}
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};

for (let i = 0; i<2 ; i++) {
    let a, b;
    do {a = prompt("Один из последний просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "")}
    while (a == "" || a == null || b == "" || b == null || a.length > 50 );
    personalMovieDB[a] = b;
}

/* for (let i = 0; i<2 ; i++) {
    let a = prompt("Один из последний просмотренных фильмов?", "");
    while (a == "" || a == null || a.length > 50) {
       a = prompt("Один из последний просмотренных фильмов?", ""); 
    }
    let b = prompt("На сколько оцените его?", "");
    while (b == "" || b == null) {
       b = prompt("На сколько оцените его?", ""); 
    }
    personalMovieDB.movies[a] = b;
} */

/* for (let i = 0; i<2 ; i++) {
    let a = prompt("Один из последний просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");
    if (a != "" && b != "" && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
} */

/* let a = prompt("Один из последний просмотренных фильмов?", ""),      
    b = prompt("На сколько оцените его?", ""),
    c = prompt("Один из последний просмотренных фильмов?", ""),  
    d = prompt("На сколько оцените его?", "");
 */
/* personalMovieDB.movies[a] = b; 
personalMovieDB.movies[c] = d;  */

console.log(personalMovieDB);