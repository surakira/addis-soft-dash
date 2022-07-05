const mongoose=require('mongoose');
const employeeSchema=new mongoose.Schema({
    name :{
        type:String,
        required:true,
        trim:true,
        maxlength:[100,'product can not exeed 100 charachter'],  
    },
    DateOfBirth:{
    type:Date,
    trim:true,
    
    },
    salary:{
        type:Number,
        required:[true,"pleas enter your salary"],
        default:0.0,
        maxlength:[5,'product can not exeed 5 charachter']
    },
createdAt:{
    type:Date,
    default:Date.now
},
category:{
    type:String,
    required:[true,"pleas enter the catagory"]
   ,enum:
       {
           values:
   [ 
   'Full-Stack developer',
   'Backend developer',
   'frontend developer',
   'ux/ui/Grapics',
   'accountant/finace',
   'adminstrator',
   
   ] 
   ,Message:"pleas select correct catagory"
}
   
    },
})
module.exports=mongoose.model('Employee',employeeSchema)