const { query } = require("express")
const tableModel = require("../../database/models/tableModel")
const Helper = require("../helper")

class Table {
    //add
    static addTable = async(req,res)=>{
        try{
            const tableData = new tableModel(req.body)
            await tableData.save()
            Helper.resHandler(res , 200 , true , tableData , "table is Added")
        }
        catch(e){
            Helper.resHandler(res , 500 , false , e.message , "Error in adding")
        }
    }
     //showAll
     static showAllTables = async(req,res)=>{
        try{
            const tableData = await tableModel.find()
            Helper.resHandler(res,200,true,tableData," tables are Fetched")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
    //edit
    static edit = async(req,res)=>{
        try{
            const tableData = await tableModel.findById(req.params.id)
            for(let key in req.body){
                tableData[key]= req.body[key]
            }
            await tableData.save()
            Helper.resHandler(res,200,true,tableData,"table is edited ")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
    //delete
    static delete = async(req,res)=>{
        try{
            const tableData = await tableModel.findByIdAndDelete(req.params.id)
            Helper.resHandler(res,200,true,{},"table is deleted ")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
    //bookTable
    static bookTable = async(req,res)=>{
        try{
            const tableData = await tableModel.findById(req.params.id)
            const isAvailable = tableData.isAvailable
            if(!isAvailable) throw new Error ("sorry this table is booked")
            Helper.resHandler(res,200,true,tableData.tableNumber," table is booked")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
    //unAvaliableTable
    static unAvaliableTable = async(req,res)=>{
        try{
            const tableData = await tableModel.findById(req.params.id)
            tableData.isAvailable= false
            await tableData.save()
            Helper.resHandler(res,200,true, tableData ,"this table is Not Avaliable now")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }

    }
    //checkAvailability
    static checkAvailability = async(req,res)=>{
        try{
            const tableData = await tableModel.findById(req.params.id)
            if(!tableData.isAvailable) throw new Error ("this table is not avaliable now")
            Helper.resHandler(res,200,true, tableData ,"this table is Avaliable ")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }

    }
    //makeResevation
    static makeResevation = async(req,res)=>{
        try{
            const tableData = await tableModel.find({isAvailable:true})
            if(tableData.length==0) throw new Error ("sorry All Table are resevated")
            Helper.resHandler(res,200,true, tableData ,"your reserviation done")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }

    }
    
}
module.exports = Table