let http = require("http");

// req --> what we send to server(params,queryparams,body)
// res---> what server send us back

let server = http.createServer(function (req, res) {
  res.write("<h1> this is the first line in the server hello");
  res.end();
});
server.listen(7600);
