const UserModel = require("../model/UserModel");
const userModel = require("../model/UserModel");
const {createSecretToken} = require("../util/SecretToken");
const bcrypt = require("bcryptjs");


module.exports.Signup = async (req , res , next)  => {
    try{
       
        const {email , username , password , createdAt} = req.body;
        const existingUser = await userModel.findOne({ email});
        if(existingUser){
            return res.json({message : "User Alrady Exist"});
        }
        const existingUsername = await userModel.findOne({ username});
        if(existingUsername){
            return res.json({message : "Username Alrady Exist"});
        }

        const user = await UserModel.create({email , username , password , createdAt});

        const token = createSecretToken(user._id);
        res.cookie("token" , token , {
            withCredentials : true,
            httpOnly :false,
        })
       res.status(201).json({
        message: "User Sign In Successfully !!",
        success: true,
        user
        });
        next();

    }catch(error){
        res.status(406).json({
        message: "Incorrect Input !!",
        success: false,
        user
        });
        console.error(error);
    }
}

module.exports.Login =  async (req , res , next) =>{
    try{

        const {email , password} =  req.body;
        if(!email || !password) {
            return res.json({message : 'All Fields  are required !'});
        }

        const user = await userModel.findOne({email});
        if(!user){
            return res.json({message : "Incorrect username & password !"});
        }
        const auth = await bcrypt.compare(password , user.password);
        if(!auth){
           return res.json({message : "Incorrect username & password !"});
        }

        const token = createSecretToken(user._id);
        res.cookie("token" , token, {
            withCredentials :'true',
            httpOnly : false,
        });
        res.status(201).json({message : "User Logged in Successfully !!" , success :true });
        next();

    }catch(error) {
        console.error(error);
    }
}