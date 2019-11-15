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
  // test("Should be Equilateral", () => {
  //   var result = new MyTriangle(2,2,2);
  //   expect(result.checkType()).toEqual("You have an Equilateral triangle");
  // });
  // test("Should be Isosceles", () => {
  //   var result = new MyTriangle(2,2,3);
  //   expect(result.checkType()).toEqual("You have an Isosceles triangle");
  // });
  // test("Should be scalene", () => {
  //   var result = new MyTriangle(2,3,4);
  //   expect(result.checkType()).toEqual("You have an scalene triangle");
  // });
