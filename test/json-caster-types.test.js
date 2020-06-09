const assert = require('assert');
const Caster = require('../');

const values = {
  "null": "null",
  "undefined": "",
  "": "",
  "false": "false",
  "true": "true",
  "0": "0",
  "69": "69",
  "3.14": "3.14"
};

describe('JSON data convert tests', () => {
  it('Parses various value types to appropriate CSV string types', () => {
    for (const [key, value] of Object.entries(values)) {
      assert.deepEqual(Caster.CSV.parse(values[key]), value, `The value ${key} was not converted properly`);
    }
  });
});
