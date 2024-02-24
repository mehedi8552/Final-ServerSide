const express = require('express');
const router =require('./src/routes/api');
const app = new express();

const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const hpp =require('hpp');
const cors =require('cors');
const cookieParser = require('cookie-parser');
const mongoose =require('mongoose');
const path = require("path");
const bodyParser = require('body-parser')



let URL="mongodb+srv://<username>:<password>@cluster0.derptwk.mongodb.net/FinalProject";
let option={user:'user8552',pass:"user8552",autoIndex:true};
mongoose.connect(URL,option).then((res)=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})

//Use 
app.use(cookieParser());
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(bodyParser.json())

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended:true}));

const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)

app.use("/api/v1",router);

app.use(express.static('../client-side/dist'))

// Add React Front End Routing
app.get('*',(req,res)=> {
    res.sendFile(path.resolve(__dirname,'../client-side','dist','index.html'))
})

module.exports=app;