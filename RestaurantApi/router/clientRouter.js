const router = require("express").Router()
const clientController = require("../app/controller/clientController")
const authClient = require("../app/middleware/authClient")

router.post("/register",clientController.register)
router.get("/showSinglecleint/:id",clientController.showSinglecleint)
router.get("/showAllCleints",authClient,clientController.showAllCleints)
router.post("/loginClient",clientController.LoginClient)
router.post("/logoutClient",authClient,clientController.logoutClient)


module.exports = router