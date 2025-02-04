export class God {
  static create() {
    return [new Man('Adam'), new Woman('Eve')];
  }
}

export class Human {
  constructor(sex) {
    this.sex = sex;
  }
}

export class Man extends Human {
  constructor(name) {
    super('male');
    this.name = name;
  }
}

export class Woman extends Human {
  constructor(name) {
    super('female');
    this.name = name;
  }
}
