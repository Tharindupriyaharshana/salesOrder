
const order = require("../models/orderModel");
const { v4: uuid } = require("uuid");
const express = require("express");
var path = require('path');


//express app declaration
const auth = express();


const getAllOrders =  async () => {
  try {
   
    let result=[];

    await order.aggregate([
    
       { $match: { "status":"pending" } }
           
    
    
        ]).then((documents => {
            result.push(documents);
     
    
        }));
    
    return result;
  
     
 
  } catch (error) {
    console.log(error);
        throw error;
  }
  };
  
  const getOneOrder = () => {
    return;
  };

 
  //create new order

  const createNewOrder= (newOrder) => {
    const orderToInsert=new order({
      ...newOrder,
      OrderIds: uuid(),
      DateTime: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
      
  });
  try {
    orderToInsert.save()
      return orderToInsert;
   
  
 

  } catch (error) {
    throw error;
  }

  };

 
  const updateOneOrder = () => {
    return;
  };
  
  const deleteOneOrder = () => {
    return;
  };
  
  module.exports = {
    getAllOrders,
    getOneOrder,
    updateOneOrder,
    deleteOneOrder,
    createNewOrder
  
  };