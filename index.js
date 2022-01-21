const express = require("express")
const fs = require('fs')

app = express()

app.get("/", (req, res) => {
    res.send(fs.readFileSync("./static/index.html").toString())
})
app.get("/repos", (req, res) => {
    res.send(fs.readFileSync("./static/repos.html").toString())
})
app.get("/bots/tictactoe", (req, res) => {
    res.send(fs.readFileSync("./static/bots/tictactoe.html").toString())
})
app.get("/bots/embetter", (req, res) => {
    res.send(fs.readFileSync("./static/bots/embetter.html").toString())
})
app.get("/bots/dictionary", (req, res) => {
    res.send(fs.readFileSync("./static/bots/dict.html").toString())
})
app.get("/bots/lastseen", (req, res) => {
    res.send(fs.readFileSync("./static/bots/lastseen.html").toString())
})
app.get("/bots/betbot", (req, res) => {
    res.send(fs.readFileSync("./static/bots/betbot.html").toString())
})

app.use("/assets", express.static("./static/assets"))
app.use("/scripts", express.static("./static/scripts"))

app.listen("80", () => {
    console.log("Listening")
})