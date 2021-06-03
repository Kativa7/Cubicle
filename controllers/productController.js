const { Router } = require("express");
const productServece = require("../services/productService");
const router = Router();

router.get("/", (req, res) => {
  let products = productServece.getAll();
  res.render("home", { title: "Browse", products});
});

router.get("/create", (req, res) => {
  res.render("create", { title: "Create" });
});

router.post("/create", (req, res) => {
  //TODO: validate inputs!!!
  productServece.create(req.body);
  res.redirect("/products");
});

router.get("/details/:productId", (req, res) => {
  console.log(req.params.productId);
  res.render("details", { title: "Product Details" });
});

module.exports = router;
