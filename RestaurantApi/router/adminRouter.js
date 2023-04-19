const router = require("express").Router()
const adminController = require("../app/controller/adminController")
const authAdmin = require("../app/middleware/authAdmin")

router.post("/addAdmin",adminController.addAdmin)
router.get("/showSingleAdmin/:id",authAdmin,adminController.showSingleAdmin)
router.get("/showAllAdmins",authAdmin,adminController.showAllAdmins)
router.post("/loginAdmin",adminController.LoginAdmin)
router.post("/logoutAdmin",authAdmin,adminController.logoutAdmin)

//
// const upload = require("../app/middleware/uploadeimg")
// router.patch("/UploadImage", authAdmin, upload.single("img"), adminController.UploadImage)

module.exports = router