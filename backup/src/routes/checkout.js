const express = require("express");
const router = express.Router();

const checkoutController = require("../controllers/checkout");
router.get("/", checkoutController.findAll);
router.get("/:id", checkoutController.findById);
router.post("/", checkoutController.create);
router.put("/:id", checkoutController.updateById);
router.delete("/:id", checkoutController.deleteById);

module.exports = router;
