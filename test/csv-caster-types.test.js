const assert = require('assert');
const Caster = require('../caster');

const values = {
  "null": null,
  "undefined": undefined,
  "": undefined,
  "false": false,
  "true": true,
  "0": 0,
  "69": 69,
  "3.14": 3.14
};

describe('CSV data convert tests', () => {
  it('Parses various value types to appropriate JSON types', () => {
    for (const [key, value] of Object.entries(values)) {
      assert.deepEqual(Caster.toJSON.parse(values[key]), value, `The value ${key} was not converted properly`);
    }
  });
});
