import { directorFilter, producerFilter } from '../src/data.js';


describe('directorFilter', () => {  
  it('is a function', () => {
    expect(typeof directorFilter).toBe('function');
  });

  it('filtrar las peliculas que tienen como director a Hayao Miyazaki`', () => {
    let result = { director: "Hayao Miyazaki" }
    expect(directorFilter("Hayao Miyazaki")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });
  
});

describe('producerFilter', () => {
  it('is a function', () => {
    expect(typeof producerFilter).toBe('function');
  });

  it('filtrar las peliculas que tienen como productor a Isao Takahata`', () => {
    let result = { producer: "Isao Takahata" }
    expect(producerFilter("Isao Takahata")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });
});

