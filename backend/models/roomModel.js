const mongoose = require('mongoose');


const roomSchema = mongoose.Schema({
      roomType: {
        type: String
      },
      roomNumber:Number,
      pricing:{
        type: Number,
        required: true
      },


})

const Room =  mongoose.model("Room",roomSchema);
module.exports = Room