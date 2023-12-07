// // over writing the existing text
let fs = require("fs");
fs.writeFile("myText.txt", "This is the first thing in the file", function () {
  console.log("Task done");
});

// keep adding text in same file
fs.appendFile("myText.txt", "this is the second line\n", function () {
  console.log("Task Done");
});

// readfile
fs.readFileSync("location.json", "utf-8", function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
});
// Rename File
fs.rename("myText.txt", "myData.txt", function (err) {
  if (err) {
    throw err;
  }
  console.log("file Renamed");
});
// Delete File
fs.unlinkSync("myData.txt", function (err) {
  if (err) {
    throw err;
  }
  console.log("file deleted");
});
