class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === number) {
    this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
    let index = substituteTeachers.length-1;
    const randomNumber = Math.floor(Math.random()*index);
    return substituteTeachers[randomNumber];
  }
}

class Primary extends School {
  constructor(name, pickupPolicy, numberOfStudents) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
  }
}

class High extends School {
  constructor(name, sportsTeam, numberOfStudents) {
    super(name, 'high', numberOfStudents);
    this._sportsTeam = sportsTeam;
   }
   get sportsTeam() {
     return this._sportsTeam;
   }
}

const lorraineHansbury = new Primary('Lorraine Hansbury', 'Students must be picked up by a parent, guardian, or a family member over the age of 13.', 514);

lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new High ('Al E. Smith', ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], 415)
console.log(alSmith.sportsTeam);
