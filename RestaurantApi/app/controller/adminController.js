const adminModel = require("../../database/models/adminModel")
const Helper = require("../helper")


class Admin {
    //add 
    static addAdmin = async(req,res)=>{
        try{
            const adminData = new adminModel(req.body)
            await adminData.save()
            Helper.resHandler(res , 200 , true , adminData , "Admin is Added")
        }
        catch(e){
            Helper.resHandler(res , 500 , false , e.message , "Error in Adding Admin")
        }
    }
    //showSingleAdmin
    static showSingleAdmin = async(req,res)=>{
        try{

            const adminData = await adminModel.findById(req.params.id)
            Helper.resHandler(res,200,true,adminData," profile Admin")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
    //showAll
    static showAllAdmins = async(req,res)=>{
        try{
            const adminData = await adminModel.find()
            Helper.resHandler(res,200,true,adminData," Admins are Fetched")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
    //login 
    static LoginAdmin = async(req,res)=>{
        try{
            const adminData = await adminModel.loginMe(req.body.email , req.body.password , req.body.isAdmin)
            const token = await adminData.generateToken()
            if(adminData.isAdmin==true)
              
            Helper.resHandler(res , 200 ,true,{adminData , token},"u log in as admin")
        }
            
        
        catch(e){
            Helper.resHandler(res , 500 , false , e.message , "Error in login")
        }
    }
    //logout 
    static logoutAdmin = async (req,res) =>{
        try{
            req.admin.tokens = req.admin.tokens.filter(t =>  t.token != req.token)
            await req.admin.save()
            Helper.resHandler(res,200,true,{},"log out")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }

    //UploadImage
    static UploadImage = async(req,res)=>{
        try{
            const ext = Helper.fileHandler(req)
            req.admin.image = `${process.env.AppURL}${req.file.filename}.${ext}`
            await req.admin.save()
            Helper.resHandler(res, 200, true, req.admin, " done ...image is uploaded")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }
}

module.exports = Admin