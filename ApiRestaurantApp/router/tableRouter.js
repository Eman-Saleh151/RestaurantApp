const router = require("express").Router()
const tableController = require("../app/controller/tableController")
const authAdmin = require("../app/middleware/authAdmin")
const authClient = require("../app/middleware/authClient")

router.post("/addTable", authAdmin ,tableController.addTable)
router.get("/showAllTables",tableController.showAllTables)
router.patch("/edit/:id", authAdmin ,tableController.edit)
router.delete("/delete/:id", authAdmin ,tableController.delete)
router.post("/bookTable/:id", authClient ,tableController.bookTable)
router.post("/makeResevation", authClient ,tableController.makeResevation)
router.patch("/unAvaliableTable/:id" ,authAdmin, tableController.unAvaliableTable)
router.patch("/checkAvailability/:id" , tableController.checkAvailability)


module.exports=router