const mealModel = require("../../database/models/mealModel")
const Helper = require("../helper")

class Meal {
    //add
    static addMeal = async(req,res)=>{
        try{
            const mealData = new mealModel(req.body)
            const ext = Helper.fileHandler(req)
            mealData.image = `${process.env.AppURL}${req.file.filename}.${ext}`
            await mealData.save()
            Helper.resHandler(res , 200 , true , mealData , "meal is Added")
        }
        catch(e){
            Helper.resHandler(res , 500 , false , e.message , "Error in Adding ")
        }
    }
    //showSingleMeal
    static showSingleMeals = async(req,res)=>{
        try{

            const mealData = await mealModel.findById(req.params.id)
            Helper.resHandler(res,200,true,mealData," Meals is Fetched")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
    //showAll
    static showAllMeals = async(req,res)=>{
        try{
            const mealData = await mealModel.find()
            Helper.resHandler(res,200,true,mealData," Meals are Fetched")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
    //edit
    static edit = async(req,res)=>{
        try{
            const mealData = await mealModel.findById(req.params.id)
            for(let key in req.body){
                mealData[key]= req.body[key]
            }
            await mealData.save()
            Helper.resHandler(res,200,true,mealData,"meal is edited ")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
    //delete
    static delete = async(req,res)=>{
        try{
            const mealData = await mealModel.findByIdAndDelete(req.params.id)
            Helper.resHandler(res,200,true,mealData,"meal is deleted ")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
    //order
    static order = async(req,res)=>{
        try{
            const mealData = await mealModel.findById(req.params.id)
            const isAvailable = mealData.isAvailable
            if(!isAvailable) throw new Error ("this Meal is not Available Now")
            Helper.resHandler(res,200,true,mealData.mealPrice," your order is done")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
    //showMeals(breakfast)
    static showMealsBreakfast = async(req,res)=>{
        try{
            const mealData = await mealModel.find({mealCategory:"breakfast"})
            Helper.resHandler(res,200,true,mealData," Breakfast Meals ")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
    //showMeals(lunch)
    static showMealsLunch= async(req,res)=>{
        try{
            const mealData = await mealModel.find({mealCategory:"lunch"})
            Helper.resHandler(res,200,true,mealData," lunch Meals ")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
    //showMeals(dinner)
    static showMealsDinner= async(req,res)=>{
        try{
            const mealData = await mealModel.find({mealCategory:"dinner"})
            Helper.resHandler(res,200,true,mealData," dinner Meals ")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
    //showMeals(dessert)
    static showMealsDesserts= async(req,res)=>{
        try{
            const mealData = await mealModel.find({mealCategory:"dessert"})
            Helper.resHandler(res,200,true,mealData," dessert Meals ")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
    //showMeals(drinks)
    static showMealsDrinks= async(req,res)=>{
        try{
            const mealData = await mealModel.find({mealCategory:"drinks"})
            Helper.resHandler(res,200,true,mealData,"drinks Meals ")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }
    }
    //unAvaliableMeal
    static unAvaliableMeal = async(req,res)=>{
        try{
            const mealData = await mealModel.findById(req.params.id)
            mealData.isAvailable= false
            await mealData.save()
            Helper.resHandler(res,200,true, mealData ,"this Meal is Not Avaliable now")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }

    }
    //checkAvailability
    static checkAvailability = async(req,res)=>{
        try{
            const mealData = await mealModel.findById(req.params.id)
            if(!mealData.isAvailable) throw new Error ("this meal is not avaliable now")
            Helper.resHandler(res,200,true, mealData ,"this Meal is Avaliable ")
        }
        catch(e){
            Helper.resHandler(res , 500 ,false,e.message,"Error on showing data")
        }

    }
    
    
}
module.exports = Meal