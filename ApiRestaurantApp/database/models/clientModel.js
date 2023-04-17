const mongoose = require("mongoose")
const validator =require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const clientSchema =mongoose.Schema(
    {
        fname:{
            type:String,
            trim:true,
            required:true,
            lowercase:true,
            minLength:3,
            maxLength:30
        },
        lname:{
            type:String,
            trim:true,
            required:true,
            lowercase:true,
            minLength:3,
            maxLength:30
        },
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
        gender:{
            type:String,
            trim:true,
            required:true,
            lowercase:true,
            enum:["male","female"]
        }, 
        phone:{
            type:String,
            trim:true,
            validator(value){
                if(!validator.isMobilePhone(value,'ar-EG'))
                throw new Error("invalid phone number")
                
            }
        },
         addresses:[
            {
                addrName:{
                    type:String,
                    trim:true,
                    required:true,
                    lowercase:true
                }, 
                addrDetails:{
                    type:String,
                    trim:true,
                    required:true,
                    lowercase:true
                }
            }
        ],
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
    clientSchema.pre("save" , async function(){
        if(this.isModified("password"))
        this.password = await bcrypt.hash(this.password , 15)
    })
    clientSchema.statics.loginMe = async function(email,password){
        const clientData = await clientModel.findOne({email})
        if(!clientData) throw new Error ("invalid email")
        const matched = await bcrypt.compare(password,  clientData.password)
        if(!matched) throw new Error ("invali password")
        return clientData
    }
    clientSchema.methods.generateToken = async function(){
        const token = jwt.sign({_id : this._id}, process.env.JWTKEY)
        this.tokens.push({token})
        // this.tokens = this.tokens.concat({token})
        await this.save()
        return token
    
    }


    const clientModel= mongoose.model("client" , clientSchema)
    module.exports = clientModel