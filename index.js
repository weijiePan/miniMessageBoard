const express = require("express");
const path = require("path");
const {messages} = require("./messages")
const {messageRouter} = require("./routes/message");
const port = 3000;
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"))
app.listen(port, ()=>{
    console.log(`on port http://localhost:${port}`)
    console.log(path.join(__dirname, "view"));
});
app.get("", (req,res)=>{
    res.render("index", {messages:messages});
})
app.use("/message", messageRouter);