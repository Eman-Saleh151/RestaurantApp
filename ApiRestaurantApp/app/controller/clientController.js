const clientModel = require("../../database/models/clientModel")
const Helper = require("../helper")

class client {
    //add 
    static register = async(req,res)=>{
        try{
            const clientData = new clientModel(req.body)
            await clientData.save()
            Helper.resHandler(res , 200 , true , clientData , "client is Added")
        }
        catch(e){
            Helper.resHandler(res , 500 , false , e.message , "Error in Adding client")
        }
    }
    //login 
    static LoginClient = async(req,res)=>{
        try{
            const clientData = await clientModel.loginMe(req.body.email , req.body.password , req.body.isAdmin)
            const token = await clientData.generateToken()
            Helper.resHandler(res , 200 ,true,{clientData , token},"u log in ")
        }
        catch(e){
            Helper.resHandler(res , 500 , false , e.message , "Error in login")
        }
    }
    //logout 
    static logoutClient = async (req,res) =>{
        try{
            
            req.client.tokens = req.client.tokens.filter(t =>  t.token != req.token)
            await req.client.save()
            Helper.resHandler(res,200,true,{},"log out")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
}

module.exports = client 