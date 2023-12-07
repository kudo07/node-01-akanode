let http = http.createServer(function (req, res) {
  // read file with fs
  fs.readFile("location.json", "utf-8", function (err, data) {
    if ((err, data)) {
      res.write(data);
      res.end();
    }
  });
});
server.listen(1234);
