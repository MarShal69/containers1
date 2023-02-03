export default class Team {
  // class Team {
  constructor() {
    this.members = new Set();
  }

  add(nameCharacter) {
    if (this.members.has(nameCharacter)) {
      throw new Error('Персонаж записан в Set - контейнер');
    }
    this.members.add(nameCharacter);
  }

  addAll(...nameCharacters) {
    for (const item of nameCharacters) {
      this.members.add(item);
    }
    // console.log(this.members);
  }

  toArray() {
    return [...this.members];
  }
}


// const characterSet = new Team();
// const bowman = {
//   name: 'Halk',
//   type: 'Bowman',
//   health: 100,
//   level: 1,
//   attack: 25,
//   defence: 25,
// };
// characterSet.add(bowman);

// const daemon = {
//   name: 'Jhon',
//   type: 'Daemon',
//   health: 100,
//   level: 1,
//   attack: 10,
//   defence: 40,
// };
// characterSet.add(daemon);

// const magican = {
//   name: 'Wind',
//   type: 'Magician',
//   health: 100,
//   level: 1,
//   attack: 10,
//   defence: 40,
// };
// characterSet.addAll(bowman, daemon, magican, bowman);
// characterSet.toArray(bowman, daemon, magican, bowman);


// characterSet.add(magican);


// const swordsman = {
//   name: 'Mag',
//   type: 'Swordsman',
//   health: 100,
//   level: 1,
//   attack: 40,
//   defence: 10,
// };
// const undead = {
//   name: 'Storm',
//   type: 'Undead',
//   health: 100,
//   level: 1,
//   attack: 25,
//   defence: 25,
// };
// const zombie = {
//   name: 'Jho',
//   type: 'Zombie',
//   health: 100,
//   level: 1,
//   attack: 40,
//   defence: 10,
// };


// for (const item of nameCharacters) {
//   this.members.add(item);
// }
// console.log(this.members);
// console.log([...this.members]);
