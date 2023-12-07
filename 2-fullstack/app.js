// let express = require("express");
// let app = express();
// let fs = require("fs");
// let dotenv = require("dotenv");
// dotenv.config();
// let morgan = require("morgan");
// const { dbConnect } = require("./src/controller/dbcontroller");
// let port = process.env.PORT || 9101;
// let menu = [
//   { link: "/", name: "Home" },
//   { link: "/category", name: "Category" },
//   { link: "/products", name: "Products" },
// ];

// let categoryRouter = require("./src/controller/categoryRouter")(menu);
// let productRouter = require("./src/controller/productRouter")(menu);

//middleware
// app.use(morgan("dev", { stream: fs.createWriteStream("./app.log") }));
// static file path
// app.use(express.static(__dirname + "/public"));

// html file path
// app.set("views", "./src/views");
// view engine
// app.set("view engine", "ejs");

let express = require("express");
let app = express();
let fs = require("fs");
let dotenv = require("dotenv");
dotenv.config();
let morgan = require("morgan");
const { dbConnect } = require("/src/controller/dbcontroller");

let port = process.env.PORT || 9101;

let menu = [
  { link: "/", name: "Home" },
  { link: "/category", name: "Category" },
  { link: "/products", name: "Products" },
];

let categoryRouter = require("/src/controller/categoryRouter")(menu);
let productRouter = require("/src/controller/productRouter")(menu);

// middleware
app.use(morgan("dev", { stream: fs.createWriteStream("./app.log") }));

//static file path
app.use(express.static(__dirname + "/public"));

// html file path
app.set("views", "./src/views");

// view engine

app.set("view engine", "ejs");

//default route
app.get("/", function (req, res) {
  //res.send("Hii From express");
  res.render("index", { title: "Home Page", menu });
});

app.use("/category", categoryRouter);
app.use("/products", productRouter);

//create server
app.listen(port, function (err) {
  dbConnect();
  if (err) throw err;
  console.log("server listening to port " + port);
});
