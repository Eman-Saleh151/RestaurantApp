const mongoose = require("mongoose")
const mealSchema =mongoose.Schema(
    {
        mealName:{
            type:String,
            required:true
        },
        mealIngredients:{
            type:String,
            required:true
        },
        mealPrice:{
            type:String,
            required:true
        },
        mealCategory:{
            type:String,
            trim:true,
            required:true,
            lowercase:true,
            enum:["breakfast","lunch","dinner","dessert","drinks"]
        },
        isAvailable:{
            type:Boolean,
            required:true,
            default:true
        },
        image:{
            type:String
        }
    }
    ,
    {
        tiemestamps:true
    }
    )


    const mealModel= mongoose.model("meal" , mealSchema)
    module.exports = mealModel