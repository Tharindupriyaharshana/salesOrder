// In src/v1/routes/workoutRoutes.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all orders");
});

router.get("/:orderId", (req, res) => {
  res.send("Get an existing order");
});

router.post("/", (req, res) => {
  res.send("Create a new order");
});

router.patch("/:workoutId", (req, res) => {
  res.send("Update an existing order");
});

router.delete("/:workoutId", (req, res) => {
  res.send("Delete an existing order");
});

module.exports = router;