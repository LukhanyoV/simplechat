const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const app = express()

app.engine("handlebars", exphbs.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const func = require("./app")()

app.get("/", (req, res) => {
    res.render("index", {
        messages: func.getMessages()
    })
})

app.post("/", (req, res) => {
    const {message} = req.body
    func.addMessages(message)
    res.redirect("/")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Running on port ${PORT}`))