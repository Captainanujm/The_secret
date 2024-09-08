import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app=express();
app.use(express.static("public"));
const port=3000;
app.get("/",async(req,res)=>{
    const result=await axios.get("https://secrets-api.appbrewery.com/random");
    const finalresult=result.data;
    res.render("index.ejs",{
        secret:JSON.stringify(finalresult.secret),
        user:JSON.stringify(finalresult.username),
    });
})
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})