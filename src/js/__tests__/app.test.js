import Team from '../app';

test(('добавление персонажа в команду-проверка метода  add'), () => {

    const bowman = {
        name: 'Halk',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    const characterSet = new Team();
    characterSet.add(bowman);

    const expected = Set(1) {
      {
        name: 'Halk',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
      }
    };
    expect(bowman).toEqual(expected);
});


test(('добавление персонажей в команду-проверка метода  addAll'), () => {

    const bowman = {
        name: 'Halk',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    const daemon = {
        name: 'Jhon',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    const magican = {
        name: 'Wind',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    const characterSet = new Team();
    characterSet.add(bowman, daemon, magican, bowman);

    const expected = Set(3) {
        {
          name: 'Halk',
          type: 'Bowman',
          health: 100,
          level: 1,
          attack: 25,
          defence: 25
        },
        {
          name: 'Jhon',
          type: 'Daemon',
          health: 100,
          level: 1,
          attack: 10,
          defence: 40
        },
        {
          name: 'Wind',
          type: 'Magician',
          health: 100,
          level: 1,
          attack: 10,
          defence: 40
        }
      };

    expect(bowman, daemon, magican, bowman).toEqual(expected);
});

test(('преобразование в массив-проверка метода toArray'), () => {
  const bowman = {
    name: 'Halk',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const daemon = {
    name: 'Jhon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const magican = {
    name: 'Wind',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const characterSet = new Team();
  characterSet.toArray(bowman, daemon, magican, bowman);

  const expected = [
    [ 'name', 'Halk' ],
    [ 'type', 'Bowman' ],
    [ 'health', 100 ],
    [ 'level', 1 ],
    [ 'attack', 25 ],
    [ 'defence', 25 ]
  ]
  [
    [ 'name', 'Jhon' ],
    [ 'type', 'Daemon' ],
    [ 'health', 100 ],
    [ 'level', 1 ],
    [ 'attack', 10 ],
    [ 'defence', 40 ]
  ]
  [
    [ 'name', 'Wind' ],
    [ 'type', 'Magician' ],
    [ 'health', 100 ],
    [ 'level', 1 ],
    [ 'attack', 10 ],
    [ 'defence', 40 ]
  ]

  expect(bowman, daemon, magican, bowman).toEqual(expected);
});
