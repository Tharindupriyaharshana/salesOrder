const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
//Import routers
const V1orderRouter=require("./V1/routes/orderRouters");


  



const PORT = process.env.PORT || 3000; 
require('dotenv').config();

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
});



app.use("/api/v1/orders", V1orderRouter);


app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
    V1SwaggerDocs(app, PORT);
});