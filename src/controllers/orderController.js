const getAllorders = (req, res) => {
    res.send("Get all orders");
  };
  
  const getOneOrder = (req, res) => {
    res.send("Get an existing order");
  };
  
  const createNewOrder = (req, res) => {
    res.send("Create a new order");
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