import { directorFilter, moviesFilter,yearFilter,producerFilter } from '../src/data.js';
// import { example, anotherExample} from '../src/data.js';

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

describe('directorFilter', () => {
  it('deberia ser una funcion', () => {
    expect(typeof directorFilter).toBe('function');
  });

  it('Deberia retornar peliculas por director', () =>  { 
    let director = {director:'Hayao Miyazaki'}
    expect (directorFilter("Hayao Miyazaki")).toEqual( expect.arrayContainer([expect.objectContaining(director)]));
  });
});

describe('moviesFilter', () => {
  it('is a function', () => {
    expect(typeof moviesFilter).toBe('function');
  });

  it('returns `moviesFilter`', () => {
    expect(moviesFilter()).toBe('true');
  });
});

describe('yearFilter', () => {
  it('is a function', () => {
    expect(typeof yearFilter).toBe('function');
  });

  it('returns `yearFilter`', () => {
    expect(yearFilter()).toBe('true');
  });
});

describe('producerFilter', () => {
  it('is a function', () => {
    expect(typeof producerFilter).toBe('function');
  });

  it('returns `producerFilter`', () => {
    expect(producerFilter()).toBe('true');
  });
});

