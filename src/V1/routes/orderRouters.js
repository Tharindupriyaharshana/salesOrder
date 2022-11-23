// In src/v1/routes/workoutRoutes.js
const express = require("express");
const orderController = require("../../controllers/orderController");

const router = express.Router();


/**
 * @openapi
 * /api/v1/orders:
 *   get:
 *     tags:
 *       - Orders
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */               




router.get("/", orderController.getAllorders);

router.get("/:orderId",orderController.getOneOrder);

router.post("/", orderController.createNeworder);

router.patch("/:orderId",orderController.updateOneOrder);

router.delete("/:orderId",orderController.deleteOneOrder);

module.exports = router;