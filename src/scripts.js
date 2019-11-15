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
    this.mercury = Math.floor(this.age * .24);
    const mercury = this.mercury;
    return mercury;
  }

  venusAge() {
    this.venus = Math.floor(this.age * .62);
    const venus = this.venus;
    return venus;
  }

  marsAge() {
    this.mars = Math.floor(this.age * 1.88);
    const mars = this.mars;
    return mars;
  }

  jupiterAge() {
    this.jupiter = Math.floor(this.age * 11.86);
    const jupiter = this.jupiter;
    return jupiter;
  }

  lifeExpectancy() {
    let lifeString = "";
    if (this.age === this.life) {
      lifeString = "Wow your Life expectancy is perfect, good luck moving forward"
    }else if (this.age > this.life) {
      this.earthLife = this.earth - this.life;
      this.mercuryLife = this.mercury - Math.floor(this.life * .24);
      this.venusLife = this.venus - Math.floor(this.life * .62);
      this.marsLife = this.mars - Math.floor(this.life * 1.88);
      this.jupiterLife = this.jupiter - Math.floor(this.life * 11.86);
      lifeString = (this.earthLife + ", " + this.mercuryLife + ", " + this.venusLife + ", " + this.marsLife + ", " + this.jupiterLife)
    }else if (this.age < this.life) {
      this.earthLife = this.life - this.earth;
      this.mercuryLife = Math.floor(this.life * .24) - this.mercury;
      this.venusLife = this.life - Math.floor(this.life * .62);
      this.marsLife = Math.floor(this.life * 1.88) - this.mars;
      this.jupiterLife = Math.floor(this.life * 11.86) - this.jupiter;
      lifeString = (this.earthLife + ", " + this.mercuryLife + ", " + this.venusLife + ", " + this.marsLife + ", " + this.jupiterLife)
    }
    return lifeString
  }

}
