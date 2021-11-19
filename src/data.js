// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

import data from './data/ghibli/ghibli.js';

const films = data.films;

export const directorFilter = (director) => {    
  return (films.filter((film) => {
    return film.director ===  director;
  }))
}
// ---genera un array con el detalle de la pelicula elegida----
export const moviesFilter = (movieId) => {    
    return films.filter((film) => {
      return film.id ===  movieId ;
  });
}

export const yearFilter = (release_date) => {
    return films.filter((film) => {
      return film.release_date === release_date;
      });
}

export const producerFilter = (producer) => {
    return films.filter((film) => {
      return film.producer ===  producer;
  });
}

