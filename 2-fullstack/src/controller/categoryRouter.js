// let express = require("express");
// let categoryRouter = express.Router();
// const { getData } = require("./dbcontroller");

// function router(menu) {
//   categoryRouter.route("/").get(async (req, res) => {
//     let query = {};
//     let data = await getData("category", query);
//     res.render("category", { title: "Category Page", data: data, menu });
//   });

//   categoryRouter.route("/details").get(function (req, res) {
//     res.send("This is category Details Route");
//   });

//   return categoryRouter;
// }

// module.exports = router;

let express = require("express");
let categoryRouter = express.Router();
const { getData } = require("./dbcontroller");
function router(menu) {
  categoryRouter.route("/").get(async (req, res) => {
    let query = {};
    let data = await getData("category", query);
    res.render("category", { title: "Category Page", data: data, menu });
    // this is passes in the ejs file render in the ejs
  });
  categoryRouter.route("/details").get(function (req, res) {
    res.send("this is category Details Route");
  });
  return categoryRouter;
}
module.exports = router;
