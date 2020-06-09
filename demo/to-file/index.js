const CsvJsonCaster = require('../../');
const fs = require('fs');
const readline = require('readline');

const main = args => {
  const fileExistsSync = filename => fs.existsSync(filename);
  const readFileSync = filename => {
    let data;
    let contents;
    // read the file
    if (!fileExistsSync(filename)) {
      throw new Error(`File ${filename} does not exist`);
    }
    data = fs.readFileSync(filename, 'utf-8');
    contents = data.split(/\r?\n/);
    return contents;
  };
  const writeFileSync = (filename, contents) => {
    let status = true;
    let stream;
    // write the file
    if (fileExistsSync(filename)) {
      // file exists, abort
      throw new Error(`File ${filename} already exists`);
    }
    try {
      stream = fs.createWriteStream(filename, { flags: 'a' });
      contents.forEach(line => stream.write(line + "\n"));
    } catch (e) {
      status = false;
    } finally {
      stream.close();
    }
    return status;
  };
  const fileCheck = (input, output) => {
    if (!fileExistsSync(input)) {
      throw new Error('Input file does not exist');
    }
    if (fileExistsSync(output)) {
      throw new Error('Output file already exists');
    }
  };

  const inputFilename = String(args[2]);
  const outputFilename = String(args[3]);
  const operation = String(args[4]);
  const separator = String(args[5]) || ',';

  let input, output;
  try {
    // check if input file exists and output does not
    fileCheck(inputFilename, outputFilename);
    // read the file contents
    input = readFileSync(inputFilename);
    switch (operation) {
      default:
        // unknown operation
        return 1;
      case 'json':
        // CSV to JSON
        output = JSON.stringify(CsvJsonCaster.JSON.convert(input, separator));
        break;
      case 'csv':
        // JSON to CSV
        output = CsvJsonCaster.CSV.convert(JSON.parse(input), separator);
        break;
    }
    // write file contents
    writeFileSync(outputFilename, output);
  } catch (e) {
    console.error(e.message);
  } finally {
    console.info('Done');
  }
};

main(process.argv);
