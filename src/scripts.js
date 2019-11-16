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
      lifeString = "Wow your Life expectancy is perfect, good luck moving forward";
    }else if (this.age > this.life) {
      this.earthLife = this.age - this.life;
      this.mercuryLife = Math.floor(this.age * .24) - Math.floor(this.life * .24);
      this.venusLife = Math.floor(this.age * .62) - Math.floor(this.life * .62);
      this.marsLife = Math.floor(this.age * 1.88) - Math.floor(this.life * 1.88);
      this.jupiterLife = Math.floor(this.age * 11.86) - Math.floor(this.life * 11.86);
      lifeString = ("You have survived " + this.earthLife + " years longer than you should have on earth, " + this.mercuryLife + " years longer on Mercury, " + this.venusLife + " years longer on Venus, " + this.marsLife + " years longer on Mars and, " + this.jupiterLife + " years longer on Jupiter");
    }else if (this.age < this.life) {
      this.earthLife = this.life - this.age;
      this.mercuryLife = Math.floor(this.life * .24) - Math.floor(this.age * .24);
      this.venusLife = Math.floor(this.life * .62) - Math.floor(this.age * .62);
      this.marsLife = Math.floor(this.life * 1.88) - Math.floor(this.age * 1.88);
      this.jupiterLife = Math.floor(this.life * 11.86) - Math.floor(this.age * 11.86);
      lifeString = ("You have " + this.earthLife + " years on earth before you should die, " + this.mercuryLife + " years on Mercury, " + this.venusLife + " years on Venus, " + this.marsLife + " years on Mars and, " + this.jupiterLife + " years left on Jupiter");
    }else {
      lifeString = "You need to enter a life Expectancy in order for me to have this knowledge";
    }
    return lifeString;
  }

}
