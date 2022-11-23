
const orderService = require("../service/orderService");

const getAllorders = async (req, res) => {
  try {
    const allOrders =  await orderService.getAllOrders();
    res.send({ status: "OK", data: allOrders });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
  };
  
  const getOneOrder = (req, res) => {
    res.send("Get an existing order");
  };


 //Create New Order


 const createNeworder= (req, res) => {
   const { body } = req;

   if ( 
     !body.UserId ||
     !body.Note ||
     !body.TotalPrice ||
     !body.OrderItems
   ) {
     res
       .status(400)
       .send({
         status: "FAILED",
         data: {
           error:
             "One of the following keys is missing or is empty in request body:'UserId', 'Note', 'TotalPrice', 'OrderItems'",
         },
       });
     return;
   }
   const newOrder = {

    OrderIds: body.name,
    UserId: body.UserId,
    status: "pending",
    AsinedTo: 0,
    Note: body.trainerTips,
    TotalPrice:body.TotalPrice,
    OrderItems:body.OrderItems
    
   };
   try{
   const createdOrder = orderService.createNewOrder(newOrder);
   res.status(201).send({ status: "OK", data: createdOrder });
 
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
 };
 


  

  
  const updateOneOrder = (req, res) => {
    res.send("Update an existing order");
  };
  
  const deleteOneOrder = (req, res) => {
    res.send("Delete an existing order");
  };
  
  module.exports = {
    getAllorders,
    getOneOrder,
    createNeworder,
    updateOneOrder,
    deleteOneOrder,

  };