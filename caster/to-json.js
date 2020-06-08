const digitSeparator = '.';

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
  const str = String(value);
  // numbers
  let number;
  // check if the number contains the dot, that means it is a float-point
  if (str.includes(digitSeparator)) {
    // float
    number = Number.parseFloat(str, 10);
  } else {
    // int
    number = Number.parseInt(str, 10); 
  }
  // check if the number was parsed correctly
  if (Number.isNaN(number)) {
    return value;
  } else {
    return number;
  }
};
const convert = contents => {

};
module.exports = {
  parse, convert
};
