"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
}; 

function rememberMyFilms() {
    for (let i = 0; i<2 ; i++) {
        let a = prompt("Один из последний просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");
        if (a != "" && b != "" && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert('Мало фильмов');
    } else if (numberOfFilms<30) {
        alert('Вы классический зритель');
    } else if (numberOfFilms>30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка")
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i=0; i<3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`);
    }
}

writeYourGenres();

//console.log(personalMovieDB);


/* for (let i = 0; i<2 ; i++) {
    let a, b;
    do {a = prompt("Один из последний просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "")}
    while (a == "" || a == null || b == "" || b == null || a.length > 50 );
    personalMovieDB[a] = b;
} 

for (let i = 0; i<2 ; i++) {
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


