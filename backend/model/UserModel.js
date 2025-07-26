const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        email :{
            type :'String',
            require : [true , "Email Address Is Required"],
            unique : true,
        },
        username :{
            type :'String',
            require : [true , "Username  Is Required"],
            unique : true,
        },
        password :{
            type :'String',
            require : [true , "Password Is Required"],
            unique : true,
        },
        createdAt : {
            type : Date,
            default : new Date(),
        },
    }
);

userSchema.pre('save' , async function () 
{
    this.password = await bcrypt.hash(this.password , 12);
    
});

module.exports = mongoose.model('user' ,userSchema);