export class Person {
  constructor(age, life) {
    this.age = age,
    this.life = life,
    this.earth = 0,
    this.mercury = 0,
    this.venus = 0,
    this.mars = 0,
    this.jupiter = 0
  }

  earthAge() {
    this.earth = this.age;
    const earth = this.earth;
    return earth;
  }

  mercuryAge() {
    this.mercury = this.age * .24;
    const mercury = this.mercury;
    return mercury;
  }

  venusAge() {
    this.venus = this.age * .62;
    const venus = this.venus;
    return venus;
  }



 //  checkType() {
 //    let result = "";
 //    if (this.age === this.life) {
 //      this.earth = this.age;
 //      this.mercury = this.age * .24;
 //      this.venus = this.age * .62;
 //      this.mars = this.age * 1.88;
 //      this.jupiter = this.age * 11.86;
 //      result = "";
 //    }else if () {
 //
 //    }
 //
 //      return result;
 // }
}
