
let express = require("express")
let app = express()
let mainctrl = require("./controllers/mainctrl.js")
app.use(express.static("public"))
app.set("view engine","ejs")
//路由表
app.get("/"         ,mainctrl.showIndex)
app.get("/:number"         ,mainctrl.showResult)
app.listen(5000)
