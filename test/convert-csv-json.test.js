const assert = require('assert');
const Caster = require('../caster');

const mocks = [
  [
    'first_name,last_name',
    'John,Doe',
    'Jan,Kowalski',
    'Abc,Xyz'
  ],
  [
    'data1,data2',
    'false,true',
    'undefined,null'
  ],
  [
    'string,number,bool',
    'Foo,123,false',
    'Bar,-1,true',
    'Baz,1.23,false'
  ],
  /*
  [
    'data-number,data-bool',
    '1,false',
    '0.1,true',
    '-1,false'
  ]
  */
];
const JSONs = [
  JSON.parse('[{"first_name": "John","last_name": "Doe"},{"first_name": "Jan","last_name": "Kowalski"},{"first_name": "Abc","last_name": "Xyz"}]'),
  JSON.parse('[{"data1": false,"data2": true},{"data2": null}]'),
  JSON.parse('[{"string": "Foo", "number": 123, "bool": false}, {"string": "Bar", "number": -1, "bool": true}, {"string": "Baz", "number": 1.23, "bool": false}]'),
  //JSON.parse('[{"data":[{"number":1,"bool":false},{"number":0.1,"bool":true},{"number":-1,"bool":false}]}]')
];

describe('CSV to JSON converting', () => {
  test('Converts strings to JSON object', () => {
    mocks.forEach((mock, id) => {
      assert.equal(JSON.stringify(Caster.toJSON.convert(mock, ',')), JSON.stringify(JSONs[id]), `The #${id + 1} mock was not converted properly`)
    });
  });
});
