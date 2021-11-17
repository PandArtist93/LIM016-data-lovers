// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const directorFilter = (films, director) => {     
  return films.filter((film) => {
    return film.director ===  director;
  });    
};

export const producerFilter = (films, producer) => {
  return films.filter((film) => {
    return film.producer ===  producer;
  });
};

export const moviesFilter = (films, movieId) => {
  return films.filter((film) => {
    return film.id === movieId;
  });
};

export const  yearFilter = (films, release_date) => {
  return films.filter((film) => {
    return film.release_date === release_date;
  });
}

/* export const orderAz = (films) => {
  let peliculasOrdenadasPorTitulo = films.sort((a,b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  render (peliculasOrdenadasPorTitulo);     
    
} */

/* let d = document;

export default searchFilters = (input, selector) {
  d.addEventListener("keyup", e=> {
    if (e.target.matches(input)){
      console.log(e.key)
    }
  });
} */




