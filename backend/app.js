const express=require('express')
const app=express()
const bodyparser=require("body-parser")
const cookieParser=require('cookie-parser')
const cors = require('cors')
const Admin=require('./rout/auth')
const path = require('path');
const dotenv=require('dotenv')
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cookieParser({extended:true}))
app.use(cors()) ;
app.use(cookieParser({}))

const Employee=require('./rout/employeeRouter');
app.use('/api/v1',Employee);
app.use('/api/v1',Admin)
if(process.env.NODE_ENV=== 'PRODUCTION'){
    app.use(express.static(path.join(__dirname,'./react-reactapp/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'./react-reactapp/build/index.html'))
    })
}

module.exports=app
