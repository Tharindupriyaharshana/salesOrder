const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Basic Meta Informations about our API
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Sales Order Open API Documenttation", version: "1.0.0" },
  },
  apis: ["./src/v1/routes/orderRouters.js", "./src/models/ordersdb.js"],
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);


const swaggerDocs = (app, port) => {
  
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
  );
};

module.exports = { swaggerDocs };