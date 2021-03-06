let express = require("express")
let fs = require("fs")
let layouts = require("express-ejs-layouts")
let methodOverride = require("method-override")
let app = express()
app.set("view engine", "ejs")
app.use(layouts)
app.use(express.urlencoded ({extended:false}))
app.use(methodOverride ("_method"))

app.use("/person", require("./controllers/person"))

app.get("/", (req,res) => {
    res.render("home")
})





app.listen(3000)