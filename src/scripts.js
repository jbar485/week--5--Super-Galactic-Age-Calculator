export class Person {
  constructor(age, life) {
    this.age = age,
    this.life = life,
    this.earth = 0,
    this.mercury = 0,
    this.venus = 0,
    this.mars = 0,
    this.jupiter = 0,
    this.earthLife = 0,
    this.mercuryLife = 0,
    this.venusLife = 0,
    this.marsLife = 0,
    this.jupiterLife = 0
  }

  earthAge() {
    this.earth = this.age;
    const earth = Math.floor(this.earth);
    return earth;
  }

  mercuryAge() {
    this.mercury = this.age * .24;
    const mercury = Math.floor(this.mercury);
    return mercury;
  }

  venusAge() {
    this.venus = this.age * .62;
    const venus = Math.floor(this.venus);
    return venus;
  }

  marsAge() {
    this.mars = this.age * 1.88;
    const mars = Math.floor(this.mars);
    return mars;
  }

  jupiterAge() {
    this.jupiter = this.age * 11.86;
    const jupiter = Math.floor(this.jupiter);
    return jupiter;
  }

  lifeExpectancy() {
    let lifeString = "";
    if (this.age === this.life) {
      lifeString = "Wow your Life expectancy is perfect, good luck moving forward"
    }else if (this.age > this.life) {
      this.earthLife = 0,
      this.mercuryLife = 0,
      this.venusLife = 0,
      this.marsLife = 0,
      this.jupiterLife = 0
      lifeString
    }else if (this.age < this.life) {
      this.earthLife = this.life - this.earth;
      this.mercuryLife = this.life - this.mercury;
      this.venusLife = this.life - this.life;
      this.marsLife = this.life - this.mars;
      this.jupiterLife = this.life - this.jupiter;
    }
    return lifeString
  }

}
