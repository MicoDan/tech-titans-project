const mongoose = require('mongoose');


const roomSchema = mongoose.Schema({
      roomType: {
        type: String,
        required: true
      },
      roomNumber:{
        type:Number,
        required: true,
        unique: true
      },
      pricing:{
        type: Number,
        required: true
      },
      description: {
        type:String,
        default:[]
      },
      bookingDates:[
        {
            checkInDate:{
                type:Date,
                required:true
            },
            checkOutDate:{
                type:Date,
                required:true
            },
        }
      ]


})

const Room =  mongoose.model("Room",roomSchema);
module.exports = Room