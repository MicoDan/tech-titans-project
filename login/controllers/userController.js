const info = require("../models/userModel");
const bcrypt =require('bcrypt')
const catchAsync = require('../utils/catchAsync')

exports.getAllInfo = catchAsync(async(req,res,next) =>{
  const users = await info.find()

  res.status(200).json({
    status:'success',
    result:users.length,
    data:{
      users
    }
  })
})

exports.getInfo= async (req,res) =>{
    try{
    console.log(req.params)
    const id = req.params.id;
    const Info = await info.findById( id );

    res.status(200).json({
        status:'success',
        data:{
            Info
        }
    })
}catch(err){
 console.log(err.message);
}

}

exports.createInfo=catchAsync(async (req,res,next) =>{
  const newInfo = await info.create(req.body); 


   res.status(201).json({
    status:'success',
    data:{
        info:newInfo
    }
   })
  })

exports.updateInfo =async(req,res)=>{
    try{
       const Info = await info.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
    res.status(200).json({
        status:'success',
        data:{
            Info
        }
    })

}catch(err){
    res.status(400).json({
        status:'fail',
        message:err.message
    })
}
}

exports.deleteInfo = async (req, res) => {
    try {
      const credit = req.params.credit;
      const result = await Info.deleteOne({ credit: credit });
      if (result.deletedCount > 0) {
        res.status(204).json({
          status: 'success',
          data: null
        });
      } else {
        res.status(404).json({
          status: 'fail',
          message: 'Record not found'
        });
      }
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err.message
      });
    }
  };

  