
// calling for table:
const userModel = require('../Models/userModel');
const UserModel = require ('../Models/userModel');
const bcrypt = require ('bcrypt');

// for exception handling:
const errHandler = require ('express-async-handler');


const registerUser =errHandler(async (req,res)=>{

//    take data from frontend in this form:
    const {name,email,password,phone} = req.body;
    if (!name || !email || !password || !phone){
        throw new Error ("Please enter all the fields");
    };

    try {
         
        // checking if email already exist:
        const findUser = await userModel.findOne({email})
        if (findUser){
            throw new Error ("Email already exsit");
        }
    // hash the password :
      const hashPassword = await bcrypt.hash (password,10);



        // send data into the tables/collection:
    const newUser = await userModel.create({
        name : name,
        email : email,
        password : hashPassword,
        phone : phone,

    });
    res.send (newUser);
        
    } catch (error) {
        throw new Error (error);
    }
});

// Login function:
 const loginUser = errHandler(async(req,res)=>{
     const {email,password} = req.body;
     if(!email || !password){
        throw new Error ("Please enter the required fields");
     }
    //  check from the db, if user exist:
    const findUser = await userModel.findOne({email});
    if(!findUser){
        res.status(404);
        throw new Error ("Invalid Email");
    }
    if (findUser && (await bcrypt.compare(password, findUser.password))){
        res.send(findUser);
    } else{
        res.status(401);
        throw new Error ("Invalid Password");
    }
 })







module.exports = {
    registerUser,
    loginUser
}