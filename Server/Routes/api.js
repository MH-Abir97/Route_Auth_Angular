const express=require('express');
var jwt = require('jsonwebtoken');

const router=express.Router();
const UserModel=require('../Models/User');
const mongoose=require("mongoose");
const db="mongodb+srv://employee:employee@cluster1.xqb3lal.mongodb.net/";
mongoose.set('strictQuery', true);
mongoose.connect(db,error=>{
    if(error){
        console.log(error);
    }else{
        console.log("DB Connect");
    }
})
router.get('/',(req,res)=>{
    res.send("Hello From API");
});

/// ===========POST Method===========>>>

router.post('/create',(req,res)=>{
    var userData=req.body;
    let user=new UserModel(userData);
    user.save((error,userData)=>{
        if(error){
            console.log(error);
        }else{
            let payload={subject:user._id};
            let token=jwt.sign(payload,'secretKey');
            res.status(200).send({token});
        }
    })
  
  });

  router.post('/login',(req,res)=>{
    var userData=req.body;
    // let user=new UserModel(userData);
    UserModel.findOne({email:userData.email},(error,user)=>{
        if(error){
            console.log(error);
        }else{
            if(!user){
                res.status(200).send("Invalid Email");
            }else if(user.password !==userData.password){
                res.status(200).send("Invalid Password");
            }else{
                let payload={subject:user._id};
                let token=jwt.sign(payload,'secretKey');
                res.status(200).send({token});
            }
           
        }
    })
  
  });

  router.get('/Event',(req,res)=>{
   let events=[
    {
        "_id":"1",
        "Name":"Auto Expo",
        "Description":"Lorem isprome",
        "Date":"6/4/2023",
    },
    {
        "_id":"2",
        "Name":"Auto Expo",
        "Description":"Lorem isprome",
        "Date":"6/4/2023",
    },
    {
        "_id":"3",
        "Name":"Auto Expo",
        "Description":"Lorem isprome",
        "Date":"6/4/2023",
    },
    {
        "_id":"4",
        "Name":"Auto Expo",
        "Description":"Lorem isprome",
        "Date":"6/4/2023",
    },{
        "_id":"5",
        "Name":"Auto Expo",
        "Description":"Lorem isprome",
        "Date":"6/4/2023",
    },
    {
        "_id":"6",
        "Name":"Auto Expo",
        "Description":"Lorem isprome",
        "Date":"6/4/2023",
    },
    {
        "_id":"7",
        "Name":"Auto Expo",
        "Description":"Lorem isprome",
        "Date":"6/4/2023",
    },
    {
        "_id":"8",
        "Name":"Auto Expo",
        "Description":"Lorem isprome",
        "Date":"6/4/2023",
    }
   ];
   res.json(events)
  })
  router.get('/Special',(req,res)=>{
    let Specials=[
     {
         "_id":"1",
         "Name":"Auto Expo",
         "Description":"Lorem isprome",
         "Date":"6/4/2023",
     },
     {
         "_id":"2",
         "Name":"Auto Expo",
         "Description":"Lorem isprome",
         "Date":"6/4/2023",
     },
     {
         "_id":"3",
         "Name":"Auto Expo",
         "Description":"Lorem isprome",
         "Date":"6/4/2023",
     },
     {
         "_id":"4",
         "Name":"Auto Expo",
         "Description":"Lorem isprome",
         "Date":"6/4/2023",
     },{
         "_id":"5",
         "Name":"Auto Expo",
         "Description":"Lorem isprome",
         "Date":"6/4/2023",
     },
     {
         "_id":"6",
         "Name":"Auto Expo",
         "Description":"Lorem isprome",
         "Date":"6/4/2023",
     },
     {
         "_id":"7",
         "Name":"Auto Expo",
         "Description":"Lorem isprome",
         "Date":"6/4/2023",
     },
     {
         "_id":"8",
         "Name":"Auto Expo",
         "Description":"Lorem isprome",
         "Date":"6/4/2023",
     }
    ];
    res.json(Specials)
   })

module.exports=router;