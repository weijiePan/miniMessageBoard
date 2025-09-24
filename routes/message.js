const {Router, urlencoded} = require("express");
const {messages} = require("../messages");
const messageRouter = Router();
messageRouter.use(urlencoded({extended:true}));
messageRouter.get("/newMessage",(req,res)=>{
    res.render("newMessage.ejs", {messages:messages})    
})
messageRouter.post("/newMessage",(req,res)=>{
    console.log(req.body);
    messages.push({text:req.body.text, user:req.body.user, added: new Date()});
    res.redirect("/");
} )


/**
 text: "Hi there!",
    user: "Amando",
    added: new Date()
 */
module.exports = {messageRouter}