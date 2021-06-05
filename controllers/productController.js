const { Router } = require("express");
const productServece = require("../services/productService");
const router = Router();
const { validateProduct } = require("./helpers/productHelpers");

router.get("/", (req, res) => {
  let products = productServece.getAll(req.query);
  res.render("home", { title: "Browse", products });
});

router.get("/create", (req, res) => {
  res.render("create", { title: "Create" });
});

router.post("/create", validateProduct, (req, res) => {
  //TODO: validate inputs!!!
  productServece.create(req.body, (err) => {
    if (err) {
      return res.status(500).end();
    }
    res.redirect("/products");
  });
});

router.get("/details/:productId", (req, res) => {
  let product = productServece.getOne(req.params.productId);
  res.render("details", { title: "Product Details", product });
});

module.exports = router;
