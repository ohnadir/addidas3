const { mongoose } = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: [],
    shippingInfo: {},
    shippingAddress: {},
    paymentStatus : {},
    userName: String,
    userEmail: String,
    deliveryMethod : String,
    paymentMethod : String,
    shippingCost : Number,
    discount : String,
    total : String,
    paidAt: {
        type: Date,
        default: new Date(Date.now()).toLocaleString()
    },
    orderNumber:{
        type: Number,
        default: Math.floor(Math.random() * 1000000)
    },
    deliveryStatus: {
        type: String,
        required: true,
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
  },{ timestamps: true }
);


//If the User collection does not exist create a new one.
export default mongoose.model('Order', orderSchema);