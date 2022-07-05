const mongoosr =require('mongoose')
const connectDatabase =()=>{
    mongoosr.connect(process.env.DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
    }).then(con=>{
        console.log("connected succssucfully")
    }).catch(
        
    )
}
module.exports=connectDatabase