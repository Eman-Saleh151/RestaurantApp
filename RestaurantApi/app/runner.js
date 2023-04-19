require("../database/connection")
const express= require("express")
const cors = require("cors")
const app = express()
const path = require("path")

//for images
app.use(express.static(path.join(__dirname , "../public")))
app.use(cors())

//
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routers
//AdminRouter
const adminRouter = require("../router/adminRouter")
app.use("/api/admin" ,adminRouter)
// //clientRouter
const clientRouter = require("../router/clientRouter")
app.use("/api/client" ,clientRouter)
// //mealRouter
const mealRouter = require("../router/mealRouter")
app.use("/api/meal" ,mealRouter)
// //tableRouter
const tableRouter = require("../router/tableRouter")
app.use("/api/table" ,tableRouter)



module.exports=app
