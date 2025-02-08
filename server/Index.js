const express = require ('express');
const connectDB = require('./config/ConnectDB');

// instance of express :
const app = express();
require ("dotenv").config();
require ('colors');

 const cors = require ('cors');
const errorHandler = require('./Middlewares/errorMiddleware');
 app.use(cors());

 connectDB();

// convert data into Json form:
 app.use(express.json());
app.use(express.urlencoded({extended:false}))

// api for users:
app.use ("/api/user",require('./Routes/userRoutes'));

// api for add food:
app.use ("/api/food",require('./Routes/foodRoutes'));

// run error handler function:
 app.use(errorHandler);


app.listen(process.env.PORT,()=>console.log(`server started on ${process.env.PORT.cyan}`))
 




