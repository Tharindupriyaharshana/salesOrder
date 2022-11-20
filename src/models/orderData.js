const mongoose = require("mongoose");


const OrdersDataSchema = mongoose.Schema({
  
    OrderId: { type: Number  },
    ItemId: { type: String  },
    UnitPrice: { type: Number  },
    Quntity: { type: Number },
    TotalPrice: { type: Number  },
    Note: { type: String  }
  
 

    
}, { collection: 'OrdersData' });



module.exports = mongoose.model('OrdersData', OrdersDataSchema);