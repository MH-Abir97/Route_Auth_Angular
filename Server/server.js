const express=require('express');

const bodyParser=require('body-parser');

const cors=require('cors');
const PORT=3000;
const api=require("./Routes/api")
const app=express();
app.use(cors())

app.use(bodyParser.json());

app.use('/api',api);

// app.get('/',function(req,res) {
//   res.send("Hello From Server");
// });


app.listen(PORT,(error)=>{
    if(error){
      console.log("Error");
    }else{
      console.log("Connected !!!");
    }
})

