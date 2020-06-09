# CsvJson Caster
This Node library allows converting the data from CSV (*Comma Separated Value*) to JSON (*JavaScript Object Notation*) and vice-versa.

It **does not** convert JSON arrays and object. The main reason is that CSV is the data format that was primarily made to be used with spreadsheet software so that only types like **string**, **number**, **bool** etc. can be used. 

## Converting from CSV to JSON
1. Create or load the strings array with the file contents.
The first item of the array should be the string with column definitions delimited by a separator (comma or semicolon).

2. Use the `CsvJsonCaster.JSON.convert(contents, separator)`function to start the conversion. As the first parameter provide the strings array you wish to convert. The second parameter is optional and it allows changing the separator used in imported data - it defaults to *comma*.
3. Assign the output value of the function. It's your JSON object.

## Converting from JSON to CSV

1. Use the `CsvJsonCaster.CSV.convert(contents, separator)`function to start the conversion. The first parameter is the JSON object you wish to process. The second parameter is optional and it allows changing the separator used in imported data - it defaults to *comma*
2. Assign the output value of the function. It's the array with CSV-formatted data. First item contains the column definitions. The rest of the items are your records.

## Demo example
The attached demo allows the developer to test this library. It loads the JSON or CSV file, processes it and outputs the processed contents to another file. The demo also contains the example files to test it without using your own data.
To use it, go to the */demo/to-file* directory and run:

    node ./index.js INPUT_FILE OUTPUT_FILE MODE DELIMITER
 - **INPUT_FILE** - file path you wish to process
 - **OUTPUT_FILE** - file path that is created after the coversion ends
 - **MODE** - data conversion mode, allowed values: **csv**, **json**
 - **DELIMITER** - CSV file delimiter
  
   
