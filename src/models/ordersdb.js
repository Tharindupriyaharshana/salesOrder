/**
 * @openapi
 * components:
 *   schemas:
 *     Orders:
 *       type: object
 *       properties:
 *         OrderIds: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         UserId: 
 *           type: string
 *           example: 1234 
 *         DateTime:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         status:
 *           type: string
 *           example: "pending"
 *         AsinedTo:
 *           type: number
 *           example: 12304
 *         TotalPrice:
 *           type: number
 *           example: 1200
 *         OrderItems:
 *           type: object
 *           items:
 *              type:any
 *           example: [{ItemId: VAG2144,UnitPrice: 50,Quntity: 1,TotalPrice: 50,Note: Need Fress}]
 */
