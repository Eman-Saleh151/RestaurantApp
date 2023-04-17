const mongoose = require("mongoose")
const tableSchema =mongoose.Schema(
    {
        tableNumber:{
            type:Number,
            required:true,
            min:1,
            max:20
        },
        personTableNumber:{
            type:Number,
            required:true,
            min:1,
            max:15
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


    const tableModel= mongoose.model("table" , tableSchema)
    module.exports = tableModel