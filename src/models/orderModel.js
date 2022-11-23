const mongoose = require("mongoose");


const OrderSchema = mongoose.Schema({
  
    OrderIds: { type: String },
    UserId: { type: Number },
    DateTime: { type: String  },
    status: { type: String },
    AsinedTo: { type: Number },
 Note: { type: String  },
 TotalPrice: { type: Number },
 OrderItems:{type:Array}
    
}, { collection: 'Orders' });



module.exports = mongoose.model('Orders', OrderSchema);