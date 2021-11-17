import { example, anotherExample, directorFilter, producerFilter, moviesFilter, yearFilter } from '../src/data.js';



describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

describe('directorFilter', () => {
  it('is a function', () => {
    expect(typeof directorFilter).toBe('function');
  });

  it('returns `directorFilter`', () => {
    expect(directorFilter()).toBe('true');
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