let router = require("express").Router()

router.post("/", (req,res) => {
    console.log("poop", req)
    res.render("person/index", {
        personinfo: req.body
    })
})

module.exports = router