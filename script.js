"use strict";

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
   },
   rememberMyFilms: function() {
    for (let i = 0; i<2 ; i++) {
        let a = prompt("Один из последний просмотренных фильмов?", ""),
            b = prompt("На сколько оцените его?", "");
        if (a != "" && b != "" && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
   },
   detectPersonalLevel: function() {
    if (numberOfFilms < 10) {
        alert('Мало фильмов');
    } else if (numberOfFilms<30) {
        alert('Вы классический зритель');
    } else if (numberOfFilms>30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
   },
   showMyDB: function(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
   }, 
   writeYourGenres: function() {
    for (let i=0; i<3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i+1}?`);
        if (genre == null || genre === "") {
            console.log("ошибка");
            i--;
        } else {
            personalMovieDB.genres[i] = genre;
        }
    }
    this.genres.forEach((item, i) => {
        console.log(`Любимый жанр №${i+1} - это ${item}`);
    });
   },
   toggleVisibleMyDB: function() {
    if (this.privat) {
        this.privat = false;
    } else {
        this.privat = true;
    }
   }
}; 


