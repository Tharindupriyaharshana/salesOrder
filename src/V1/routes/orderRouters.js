// In src/v1/routes/workoutRoutes.js
const express = require("express");
const orderController = require("../../controllers/orderController");

const router = express.Router();

router.get("/", orderController.getAllorders);

router.get("/:orderId",orderController.getOneOrder);

router.post("/", orderController.createNewOrder);

router.patch("/:orderId",orderController.updateOneOrder);

router.delete("/:orderId",orderController.deleteOneOrder);

module.exports = router;