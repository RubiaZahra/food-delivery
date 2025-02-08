const mongoose = require ('mongoose');

//  make a function to connect db:
 const connectDB = async()=>{
    await mongoose.connect(process.env.Mongo_url)

    console.log(mongoose.connection.host.blue);
 }







 module.exports = connectDB;