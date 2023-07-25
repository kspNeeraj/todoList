import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

let currentList=["wake up","go to park","running"];
let workingList=["meeting","lunch"];


app.get("/",(req,res)=>{
    res.render("index.ejs",{
        List:currentList
    });
});
app.get("/worklist",(req,res)=>{
    res.render("workList.ejs",{
        List:workingList
    });
});
app.post("/create",(req,res)=>{
    console.log(req.body.task);
    currentList.push(req.body.task);
    res.redirect("/");
});
app.post("/create-work",(req,res)=>{
    console.log(req.body.task);
    workingList.push(req.body.task);
    res.redirect("/worklist");
})



app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})