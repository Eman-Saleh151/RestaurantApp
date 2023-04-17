const adminModel = require("../../database/models/adminModel")
const Helper = require("../helper")
const {verify} = require("jsonwebtoken")

const authAdmin = async(req,res,next)=>{
    try{
        
        const token =req.header("Authorization").replace("bearer ","")
        const decodedToken = verify(token,process.env.JWTKEY)
        const adminData = await adminModel.findOne({
            _id: decodedToken._id,
            "tokens.token":token,
            "isAdmin":true
        })
        console.log(adminData)
        if(!adminData) throw new Error("unautherized")
        req.admin= adminData
        req.token = token
        next()
    }
    catch(e){
        Helper.resHandler(res,500,false,e,"unauthorized")
    }
}






module.exports=authAdmin