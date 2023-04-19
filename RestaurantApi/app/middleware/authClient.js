const clientModel = require("../../database/models/clientModel")
const Helper = require("../helper")
const {verify} = require("jsonwebtoken")

const authClient = async(req,res,next)=>{
    try{
        
        const token =req.header("Authorization").replace("bearer ","")
        const decodedToken = verify(token,process.env.JWTKEY)
        const clientData = await clientModel.findOne({
            _id: decodedToken._id,
            "tokens.token":token
        })
        if(!clientData) throw new Error("unautherized")
        req.client= clientData
        req.token = token
        next()
    }
    catch(e){
        Helper.resHandler(res,500,false,e,"unauthorized")
    }
}






module.exports=authClient