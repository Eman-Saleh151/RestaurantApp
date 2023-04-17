const mongoose = require("mongoose")
const validator =require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const adminSchema =mongoose.Schema(
    {
        email:{
            type:String,
            trim:true,
            required:true,
            lowercase:true,
            unique:true,
            validator(value){
                if(!validator.isEmail(value))
                throw new Error("invalid email format")
            }
        },
        password:{
            type:String,
            trim:true,
            required:true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: true
        },
        image:{
            type:String
        },
        tokens:[
            {
                token:{
                    type:String,
                    required:true
                }
            }
        ]
    }
    ,
    {
        tiemestamps:true
    }
    )

    ///
    adminSchema.pre("save" , async function(){
        if(this.isModified("password"))
        this.password = await bcrypt.hash(this.password , 15)
    })
    adminSchema.statics.loginMe = async function(email,password,isAdmin){
        const adminData = await adminModel.findOne({email})
        if(!adminData) throw new Error ("invalid email")
        const matched = await bcrypt.compare(password,  adminData.password)
        if(!matched) throw new Error ("invali password")
        isAdmin = adminData.isAdmin
        if(!isAdmin) throw new Error ("you are not a admin")
        return adminData
    }
    adminSchema.methods.generateToken = async function(){
        const token = jwt.sign({_id : this._id}, process.env.JWTKEY)
        this.tokens.push({token})
        // this.tokens = this.tokens.concat({token})
        await this.save()
        return token
    
    }

    const adminModel= mongoose.model("admin" , adminSchema)
    module.exports = adminModel