const router = require("express").Router()
const clientController = require("../app/controller/clientController")
const authClient = require("../app/middleware/authClient")

router.post("/register",clientController.register)
router.post("/loginClient",clientController.LoginClient)
router.post("/logoutClient",authClient,clientController.logoutClient)


module.exports = router