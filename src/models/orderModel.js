const mongoose = require("mongoose");


const OrderSchema = mongoose.Schema({
  
    OrderId: { type: Number },
    UerId: { type: Number },
    DateTime: { type: String  },
    status: { type: String },
    AsinedTo: { type: Number },
 Note: { type: String  },
 TotalPrice: { type: Number }
    
}, { collection: 'Orders' });



module.exports = mongoose.model('Orders', OrderSchema);