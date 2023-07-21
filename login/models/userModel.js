 const mongoose = require('mongoose')
 const validator = require('validator')
 const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please tell us your name!']
    },
    email:{
        type:String,
        required:[true,"please tell us your email!"],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'Please provide a valid email']
    },
    photo:String,
    password :{
    type:String,
    required:[true,'Please provide a password'],
    minlength:8,
    select: false
    },
    passwordConfirm:{
        type:String,
        required:[true,'please confirm your password'],
        validate:{
            validator: function(el){
                return el === this.password;
                
            }
        }
    },

})

userSchema.pre('save',async function(next) {
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,12);
    this.passwordConfirm = undefined;

    next()
    
})

userSchema.methods.correctPassword = async function(
    candidatePassword ,
    userPassword
    ){
 return  await bcrypt.compare(candidatePassword,userPassword);

}

const user = mongoose.model('User', userSchema)
module.exports = user
