// Part 1.1 Movie Genres to DOM
const movieGenresToDOM = async () => {
  const movieGenresList = document.getElementById("movieGenresList");
  const data = await getMovieGenres();

  data.genres.forEach(element => {
    const newLi = document.createElement("li");
    const newText = document.createTextNode(`genre naam: ${element.name}, id: ${element.id}`);
    newLi.appendChild(newText);
    movieGenresList.appendChild(newLi);
  });
};

movieGenresToDOM();

//  Part 1.2 My Top Movie
const myTopMovie = async () => {
  const data = await getOneMovie();
  const myTopMovie = document.getElementById("topMovie");
  const movieTitle = data.movie_results[0];
  myTopMovie.appendChild(document.createTextNode(movieTitle.title));
};

myTopMovie();

// Part 1.3 Top Rated Movies
const topRatedMovies = async () => {
  const data = await getTopRatedMovies();
  const topRatedMovies = document.getElementById("topRatedMovies");

  data.results.splice(0, 10).forEach(element => {
    const newLi = document.createElement("li");
    const newText = document.createTextNode(`${element.title}, rating: ${element.vote_average}`);
    newLi.appendChild(newText);
    topRatedMovies.appendChild(newLi);
  });
};

topRatedMovies();

// Part 1.4 Top Rated Action Movies
const topRatedActionMovies = async () => {
  const data = await getTopRatedActionMovies();
  const topRatedActionMovies = document.getElementById("topRatedActionMovies");

  data.results.splice(0, 10).forEach(element => {
    const newLi = document.createElement("li");
    const newText = document.createTextNode(`${element.title}, rating${element.vote_average}`);
    newLi.appendChild(newText);
    topRatedActionMovies.appendChild(newLi);
  });
};

topRatedActionMovies();

// Part 1.5 Top Rated Movies by Year
const myYear = async () => {
  const year = await document.getElementById("mySelect").value;
  console.log(Number(year));
};

const topRatedMoviesByYear = async () => {
  const data = await getTopRatedMoviesByYear();
  const topRatedMoviesByYear = document.getElementById("topRatedMoviesByYear");

  data.results.splice(0, 10).forEach(element => {
    const newLi = document.createElement("li");
    const newText = document.createTextNode(`${element.title}, rating${element.vote_average}`);
    newLi.appendChild(newText);
    topRatedMoviesByYear.appendChild(newLi);
  });
};

topRatedMoviesByYear();


