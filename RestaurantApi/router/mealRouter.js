const router = require("express").Router()
const mealController = require("../app/controller/mealController")
const authAdmin = require("../app/middleware/authAdmin")
const authClient = require("../app/middleware/authClient")
const upload = require("../app/middleware/uploadeimg")

router.post("/addMeal", authAdmin, upload.single("img") ,mealController.addMeal)
router.patch("/edit/:id", authAdmin ,mealController.edit)
router.delete("/delete/:id", authAdmin ,mealController.delete)
router.post("/order/:id", authClient ,mealController.order)
router.get("/showSingleMeals/:id",mealController.showSingleMeals)
router.get("/showAllMeals",mealController.showAllMeals)
router.get("/showMealsBreakfast",mealController.showMealsBreakfast)
router.get("/showMealsLunch",mealController.showMealsLunch)
router.get("/showMealsDinner",mealController.showMealsDinner)
router.get("/showMealsDesserts",mealController.showMealsDesserts)
router.get("/showMealsDrinks",mealController.showMealsDrinks)
router.patch("/unAvaliableMeal/:id" , authAdmin , mealController.unAvaliableMeal)
router.patch("/checkAvailability/:id" , mealController.checkAvailability)




module.exports=router