const assert = require('assert');
const Caster = require('../caster');

const mocks = [
  [
    'first_name,last_name',
    'John,Doe',
    'Jan,Kowalski',
    'Abc,Xyz'
  ]
];
const JSONs = [
  JSON.parse('[{"first_name": "John","last_name": "Doe"},{"first_name": "Jan","last_name": "Kowalski"},{"first_name": "Abc","last_name": "Xyz"}]')
];

describe('CSV to JSON converting', () => {
  test('Converts strings to JSON object', () => {
    mocks.forEach((mock, id) => {
      assert.equal(Caster.toJSON.convert(mock, ','), JSONs[id], `The ${id + 1} mock was not converted properly`)
    });
  });
});
