import { Person } from './../src/scripts.js';

describe("class Person", () => {
  test('should record two numbers from the user', () => {
      var person = new Person(12, 45);
      expect(person.age).toEqual(12);
      expect(person.life).toEqual(45);
  });
});
describe("prototype Earth", () => {
  test('should record earth age', () => {
      var person = new Person(12, 45);
      expect(person.earthAge()).toEqual(12);
  });
});
describe("prototype Mercury", () => {
  test('should record Mercury age', () => {
      var person = new Person(12, 45);
      expect(person.mercuryAge()).toEqual(2);
  });
});

describe("prototype Venus", () => {

  test('should record Venus age', () => {
      var person = new Person(12, 45);
      expect(person.venusAge()).toEqual(7);
  });
});

describe("prototype Mars", () => {

  test('should record Mars age', () => {
      var person = new Person(12, 45);
      expect(person.marsAge()).toEqual(22);
  });
});

describe("prototype Jupiter", () => {

  test('should record Jupiter age', () => {
      var person = new Person(12, 45);
      expect(person.jupiterAge()).toEqual(142);
  });
});

describe("prototype Life Expectancy", () => {

  test('should record Life Expectancy', () => {
      var person = new Person(10, 5);
      expect(person.lifeExpectancy()).toEqual("You have survived 5 years longer than you should have on earth, 1 years longer on Mercury, 3 years longer on Venus, 9 years longer on Mars and, 59 years longer on Jupiter");
  });
});

describe("prototype Life Expectancy", () => {

  test('should record Life Expectancy', () => {
      var person = new Person(1, 1);
      expect(person.lifeExpectancy()).toEqual("Wow your Life expectancy is perfect, good luck moving forward");
  });
});

describe("prototype Life Expectancy 2", () => {

  test('should record Life Expectancy 2', () => {
      var person = new Person(5, 10);
      expect(person.lifeExpectancy()).toEqual("You have 5 years on earth before you should die, 1 years on Mercury, 3 years on Venus, 9 years on Mars and, 59 years left on Jupiter");
  });
});
