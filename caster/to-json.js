const defaultSeparator = ',';

const parse = value => {
  // null, empty string, undefined, false and true
  switch (value) {
    case "null":
      return null;
    case "":
    case "undefined":
      return undefined;
    case "false":
      return false;
    case "true":
      return true;
  }
  // get string
  let number = Number(String(value));
  if (Number.isNaN(number)) {
    return value;
  } else {
    return number;
  }
};

const convert = (contents, separator = defaultSeparator) => {
  if (Array.isArray(contents)) {
    // get the definitions
    const json = [];
    const defTemp = String(contents[0]);
    const defSplit = defTemp.split(separator);
    // build keys
    const keys = [];
    defSplit.forEach(definition => keys.push(definition));
    // loop over every line of the contents
    for (let i = 1; i < contents.length; i++) {
      const obj = {};
      const values = String(contents[i]);
      const valTemp = values.split(separator);
      valTemp.forEach((value, position) => {
        const parsed = parse(value);
        // check if value is not undefined
        if (parsed !== undefined) {
          // the value is defined
          // check if the key can be split into parts
          const key = String(keys[position]);
          const keySplit = key.split('-');
          const levels = keySplit.length;
          obj[keys[position]] = parsed;
          /*
          if (levels > 1) {
            // add hierarchy
            let currentLevel = 1;
            obj[keys[position]] = parsed;
          } else {
            obj[keys[position]] = parsed;
          }
          */
        }
      });
      json.push(obj);
    }
    return json;
  } else {
    return false;
  }
};
module.exports = {
  parse, convert
};
