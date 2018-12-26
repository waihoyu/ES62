

let express = require('express')
let app = express()

app.set("view engine","ejs")
app.get("/",function (request,respone) {
    respone.render("shouye",{})
})
app.listen(5000)
