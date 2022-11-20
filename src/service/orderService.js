
const orderdata = require("../models/orderData");
const order = require("../models/orderModel");

const express = require("express");
var path = require('path');


//express app declaration
const auth = express();


const getAllOrders = () => {
    return;
  };
  
  const getOneOrder = () => {
    return;
  };
  
  //create new order
  const createNewOrder = async(req) => {
 var state=0;

 console.log( req.body.order.orderData);
 console.log(req.body.order.orderItems);

 const orders= new order(
    req.body.order.orderData[0]
        
   
);
   
   await orders.save()
        .then(status=> {
            if(status){
                try {

                var orderItemsList=[];
                orderItemsList=req.body.order.orderItems
                orderItemsList.forEach(Item=> {
state=0;
                    const orderIems= new orderdata(
                        Item
                            
                       
                    );
                       
                     orderIems.save().then(status=>{
                        if(status){
                            state=1;
                        };
                    
                })
                return state;
                });
                   
                    
                } catch (error) {
                    return state;
                }
                
            }
});

   
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
    createNewOrder,
    updateOneOrder,
    deleteOneOrder,
  };