const express= require ("express");
const { addFood , listFood, removeItem }= require ("../Controller/foodController");

const foodRouter = express.Router();


foodRouter.post ('/add',addFood);
foodRouter.get ('/list',listFood);
foodRouter.post('/remove',removeItem);






module.exports = foodRouter;