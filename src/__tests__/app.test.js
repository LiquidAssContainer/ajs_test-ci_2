import sortByHealth from '../js/app'; // здесь и в некоторых других местах исправил в угоду линтера (пока лень самому конфигурировать на свой вкус)

test.each([
  [
    'Case #1',
    [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
    [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ],
  ],
  [
    'Case #2',
    [
      { name: 'мечник', health: 1000 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
    [
      { name: 'мечник', health: 1000 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
  ],
  [
    'Case #3',
    [
      { name: 'мечник', health: 1 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 8000 },
    ],
    [
      { name: 'лучник', health: 8000 },
      { name: 'маг', health: 100 },
      { name: 'мечник', health: 1 },
    ],
  ],
])('%s', (title, charArray, expected) => {
  const result = sortByHealth(charArray);
  expect(result).toEqual(expected);
});
