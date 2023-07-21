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
        // unique:true,
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
                // validator returns true or false and is used on save and create
            }
        }
    },

})
// checking if the password have been modyfing
userSchema.pre('save',async function(next) {
    // only this works when the  password was actually modified
    if(!this.isModified('password')) return next();
    // to encrypt using bcrypt we have  2 parameter password and cost ,actually the more the salt is increased , the more password is encrypted
    this.password = await bcrypt.hash(this.password,12);
    this.passwordConfirm = undefined;
    // undefined is used to delete anything we don't want it to go in the database
    next()
    
})
//let compare the password in database posted by user
userSchema.methods.correctPassword = async function(
    candidatePassword ,
    userPassword
    ){
  // this.password will not be used because it is not available because it was selected to false
 return  await bcrypt.compare(candidatePassword,userPassword);

}

const user = mongoose.model('User', userSchema)
module.exports = user
