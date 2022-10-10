// Part 1.1: GET different endpoints
const API_KEY = "d93969e3411e4ad337e46387470958bf";

const getMovieGenres = async () => {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
        const response = await fetch(apiUrl, { method: "GET" });
        const data = await response.json();
        console.log(data.genres);
        return data;
    }
    catch (error) {
        console.log(error);
    }
};

// Part 1.2 GET 1 movie
const oneMovie = "tt0088763";

const getOneMovie = async () => {
    const oneMovieAPIurl = `https://api.themoviedb.org/3/find/${oneMovie}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`;
    try {
        const response = await fetch(oneMovieAPIurl, { method: "GET" });
        const data = await response.json();
        console.log(data.movie_results[0].title);
        return data;

    }
    catch (error) {
        console.log(error);
    }
};


// Part 1.3 Make a new list of 10 Top Rated Movies
const getTopRatedMovies = async () => {
    const topRatedURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    try {
        const response = await fetch(topRatedURL, { method: "GET" });
        const data = await response.json();
        console.log(data.results);
        // console.log titles:
        // data.results.forEach(element => {
        //    console.log(`${element.title}`);
        // });
        return data;
    }
    catch (error) {
        console.log(error);
    }
};

// Part 1.4 Top Rated Action Movies
const getTopRatedActionMovies = async () => {
    const topActionMovieURL =
        `https://api.themoviedb.org/3/discover/movie?with_genres=28&sort_by=vote_average.desc&vote_count.gte=2000&api_key=${API_KEY}`;
    try {
        const response = await fetch(topActionMovieURL, { method: "GET" });
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
};


// Part 1.5 Top Rated Movies By Year
const getTopRatedMoviesByYear = async () => {
    const topRatedMoviesByYearURL =
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&vote_count.gte=2000&api_key=${API_KEY}`;

    console.log(topRatedMoviesByYearURL);
    try {
        const response = await fetch(topRatedMoviesByYearURL, { method: "GET" });
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
};

