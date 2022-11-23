
const orderService = require("../service/orderService");

const getAllorders = (req, res) => {
  const allOrders = orderervice.getAllorders();
    res.send("Get all orders");
  };
  
  const getOneOrder = (req, res) => {
    res.send("Get an existing order");
  };
  
  const createNewOrder = (req, res) => {
    const createdOrder = orderService.createNewOrder(req).then(response=>{
      console.log(createdOrder);
      if(response==1){
        res.send("Done");
      }else{
        res.send("not Done");
      }

    });
   
    
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
    createNewOrder,
    updateOneOrder,
    deleteOneOrder,
  };