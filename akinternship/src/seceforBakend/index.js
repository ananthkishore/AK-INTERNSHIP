const express=require("express");
const path=require("path");
const mdb=require('mongoose');
const dotenv=require("dotenv");
let  Signup = require('./models/signupSchema');
const app=express();
app.use(express.json())
dotenv.config();

mdb.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Done successfully for MongoDB Connection.")
}).catch((e)=>{
    console.log("Not connect properly for MongoDB Connection ",e);
})
app.get('/',(req,res)=>{
    res.send("Hello ALL !! \n Hi My name is ANANTH KISHORE.S");
});
app.get('/static',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});
app.get('/json',(req,res)=>{
    res.json({"Name":"ANANTH KISHORE.S"});
});

app.post('/signup', async (req,res)=>{
    var {firstName,lastName,username,email,password}=req.body;
    console.log(req.body)
    try{ 
    var newCustomer = new Signup({
        firstName:firstName,
        lastName:lastName,
        username:username,
        email:email,
        password:password,
    });
    console.log(newCustomer);
    await newCustomer.save()
    .then((res)=>{console.log(res)});
    res.status(201).send("Signup was  Sucessfully created.");
 }catch(err){
    res.status(400).send("Please try again for signUp some problems",err);
 }
});

app.listen(1001,()=>{
    console.log("Server Started");
});