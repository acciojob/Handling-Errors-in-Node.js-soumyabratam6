const fs = require('fs');

function printFileContents(filePath) {
  if (!filePath) {
    console.error("Error:Please provide a valid file path as a command-line argument.");
    return
  }
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error("Error: File not found. Please provide a valid file path.");
      } else {
        console.error(`Error: Unable to read the file. Details: ${err.message}`);
      }
    } else {
      console.log(data);
    }
  });
}
const filePath = "./output.txt"
//const filePath = process.argv[2];
printFileContents(filePath);