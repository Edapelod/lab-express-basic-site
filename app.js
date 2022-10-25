const express = require("express");
const app = express();

app.get ("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})
app.use(express.static("public"))

app.get ("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html")
})

app.get ("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works.html")
})

app.listen(3000, () => {
    console.log("App is listening on port 3000")
});

