const jwt = require('jsonwebtoken')
const User = require('./../models/userModel')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError');
const signToken = id =>{
    return jwt.sign({id} ,process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN
    
    }) 
}
exports.signup = catchAsync(async(req,res,next)=>{
const newUser = signToken(newUser._id)
await User.create(req.body);
res.status(201).json({
    status:'success',
    token,
    data:{
        user:newUser
    }
})


})



exports.login = catchAsync( async (req,res,next) =>{
    const {email , password} = req.body;
if(!email || !password){
 return next(new AppError('please provide email and the password',400));
    
}
const user = await User.findOne({email }).select('+password');
if(!user || !await user.correctPassword(password,user.password)){
    return next(new AppError('incorrect email or password',401))
}

const token = signToken(user._id);
res.status(200).json({
    status:'success',

    token
}); 
});

