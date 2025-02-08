const foodModel = require ('../Models/foodModel')

// add food item:
const addFood = async (req,res)=>{
 

    const foodItem = new foodModel({
        name : req.body.name,
        description : req.body.description,
        category : req.body.category,
        price : req.body.price,

    })
    try {
        await foodItem.save();
        res.json({ success: true, message: "Food item added successfully!" });
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to add food item." });

        
    }
}

// Add List Items:
const listFood = async (req,res)=>{
try {
    const foods = await foodModel.find({})
    res.json({ success: true, data:foods });

} catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
}
}

// Remove List Items:
const removeItem = async(req,res)=>{
 try {
    const Food = await foodModel.findById(req.body.id);
     await foodModel.findByIdAndDelete(req.body.id);
     res.json({ success: true, message: "Items Removed" });

 } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });

 }
}


module.exports = {
    addFood,
    listFood,
    removeItem,
};