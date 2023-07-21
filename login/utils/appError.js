class AppError extends Error {
  constructor(message,statusCode){
    super(message);
    // we didn't say this.message = message because we used the parent call (super) then whatever we can pass it will be the message property

    this.statusCode = statusCode;
    this.status = `${this.statusCode}`.startsWith('4') ? 'fail':'error';
    //all those we are creating are operational errors because can predicted
    this.isOperational = true;

    Error.captureStackTrace(this,this.constructor);
    //first parameter we specify the object its self then the constructor its self
    
  }
}
module.exports = AppError;