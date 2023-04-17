const fs = require("fs")

class Helper {
    static resHandler = (res, satatusCode,apiStatus,data,message)=>{
        res.status(satatusCode).send({apiStatus,data,message})
    }
    static fileHandler = (req)=>{
        const ext = req.file.originalname.split(".").pop()
        const newName = req.file.path+"."+ext
        fs.renameSync(req.file.path, newName)
        return ext
    }
}

module.exports=Helper