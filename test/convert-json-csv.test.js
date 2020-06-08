const assert = require('assert');
const Caster = require('../caster');

const mocks = [
  JSON.parse('[{"first_name": "John","last_name": "Doe"},{"first_name": "Jan","last_name": "Kowalski"},{"first_name": "Abc","last_name": "Xyz"}]'),
  JSON.parse('[{"data1": false,"data2": true},{"data1": "", "data2": null}]'),
  JSON.parse('[{"string": "Foo", "number": 123, "bool": false}, {"string": "Bar", "number": -1, "bool": true}, {"string": "Baz", "number": 1.23, "bool": false}]')
];
const CSVs = [
  [
    'first_name,last_name',
    'John,Doe',
    'Jan,Kowalski',
    'Abc,Xyz'
  ],
  [
    'data1,data2',
    'false,true',
    ',null'
  ],
  [
    'string,number,bool',
    'Foo,123,false',
    'Bar,-1,true',
    'Baz,1.23,false'
  ]
];

describe('CSV to JSON converting', () => {
  test('Converts strings to JSON object', () => {
    mocks.forEach((mock, id) => {
      assert.equal(JSON.stringify(Caster.toCSV.convert(mock, ',')), JSON.stringify(CSVs[id]), `The #${id + 1} mock was not converted properly`)
    });
  });
});
