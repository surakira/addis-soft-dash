const app=require('./app')
const dotenv=require('dotenv')
const connectDatabase=require('./config/database')
//if(process.env.NODE_ENV==='PRODUCTION') require('dotenv').
dotenv.config({path:'backend/config/config.env'})
const {path}=require('./app')
const cloudinary=require('cloudinary')
app.listen(process.env.PORT,()=>{
    console.log(`Server is runnig on port :${process.env.PORT} in ${process.env.NODE_ENV} mode`)

})
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})
connectDatabase();
process.on('uncaughtException',err=>{
    console.log(`ERROR:${err.stack}`);
    console.log("shuting down because of un handeled exptions")
})

process.on('unhandledRejection',err=>{
    console.log(`ERROR:${err.stack}`);
    console.log("shutingdown the server due tor unhandeled Promise rejection");
    server.close(()=>{
        process.exit(1)
    })
})