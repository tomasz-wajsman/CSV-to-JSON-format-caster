const digitSeparator = '.';
const defaultSeparator = ',';

const parse = value => {
  // check if not undefined
  if (value === undefined) {
    return "null";
  }
  return String(value);
};
const convert = (contents, separator = defaultSeparator) => {
  // get header
  const keys = [];
  const csv = [];
  if (contents) {
    contents.forEach(entry => {
      // add entries
      let line = '';
      Object.keys(entry).forEach(key => {
        keys.push(key);
        line += `${parse(entry[key])}${separator}`;
      });
      // remove the last character and push
      csv.push(line.substring(0, line.length - 1));
    });
    // make keys unique
    const keysUniq = new Set(keys);
    // add keys in front
    let keysLine = '';
    Array.from(keysUniq).forEach(key => {
      keysLine += `${key}${separator}`;
    });
    csv.unshift(keysLine.substring(0, keysLine.length - 1));
    return csv;
  } else {
    return false;
  }
};

module.exports = {
  parse, convert
};
