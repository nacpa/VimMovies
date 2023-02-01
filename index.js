const express = require('express');
const app = express();
const port =3000;


//Parse Json Using Express
app.use(express.json());
app.use(express.urlencoded({extended:false}));
let movies = [
  {
    id: 1,
    name: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    imdbRating: 9.2,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
    id: 2,
    name: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    imdbRating: 9.2,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    id: 3,
    name: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    imdbRating: 9.0,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
  },
  {
    id: 4,
    name: "The Godfather: Part II",
    director: "Francis Ford Coppola",
    year: 1974,
    imdbRating: 9.0,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
  },
  {
    id: 5,
    name: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    imdbRating: 8.9,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    id: 6,
    name: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    year: 2003,
    imdbRating: 8.9,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"

  },
  {
    id: 7,
    name: "The Matrix",
    director: "The Wachowski Brothers",
    year: 1999,
    imdbRating: 8.7,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
  },
  {
    id: 8,
    name: "Goodfellas",
    director: "Martin Scorsese",
    year: 1990,
    imdbRating: 8.7,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    id: 9,
    name: "City of God",
    director: "Fernando Meirelles",
    year: 2002,
    imdbRating: 8.7,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_.jpg"
  },
  {
    id: 10,
    name: "Star Wars: Episode V - The Empire Strikes Back",
    director: "Irvin Kershner",
    year: 1980,
    imdbRating: 8.7,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    id: 12,
    name: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    year: 2003,
    imdbRating: 9.0,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    id: 13,
    name: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    imdbRating: 8.9,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  {
    id: 14,
    name: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    imdbRating: 9.0,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
  },
  {
    id: 15,
    name: "12 Angry Men",
    director: "Sidney Lumet",
    year: 1957,
    imdbRating: 8.9,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"
  },
  {
    id: 16,
    name: "The Lord of the Rings: The Two Towers",
    director: "Peter Jackson",
    year: 2002,
    imdbRating: 8.7,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  },
  

];


  //Get the movie list

  app.get('/movies',(req,res)=>{
    res.json(movies);
  })
  app.post('/movies',(req,res)=>{
    const movie=req.body;
    movies.push(movie);
    res.send("Movie uploaded Sucessfully");
  })

  //set the server

  app.listen(port);