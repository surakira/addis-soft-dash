const ErrorHandeler=require('../utile/errorHandler');
const catchAsyncError=require("../middlewares/catchAsync");
const Employee=require("../model/Employee");
const {connections}=require("mongoose");
//const res = require('express/lib/response');
const APIFeatures=require("../utile/apiFeatures")

//add single product

exports.getAllEmployee=catchAsyncError ( async (req,res,next)=>{
    console.log("dfghjhgfdg")
    const resPerPage=10;
    const emplooyeeCount=await Employee.countDocuments() 
    
    const apiFeatures=new APIFeatures(Employee.find(),req.query)
                          .search()
                          .filter()
                          
    
          let emplooyee=await apiFeatures.query.clone();
          let filteredemployee=emplooyee.length    
          apiFeatures.pagination(resPerPage)
          emplooyee=await apiFeatures.query.clone();
    
        res.status(200).json({
            count:emplooyee.length,
            success:true,
            emplooyee,
            resPerPage,
            filteredemployee,
            emplooyeeCount

            
        })
    
    })
   


exports.addEmployee=catchAsyncError( async(req,res,next)=>{
    
    const newEmployee=await Employee.create(req.body);
    res.status(200).json({
        success:true,
        newEmployee
    })
})

exports.getSingleEmployee= catchAsyncError (async (req,res,next)=>{
    const emplooyee=await Employee.findById(req.params.id);
    console.log('Employee with id' + req.params.id) ;
    console.log(emplooyee) ;
     if(!emplooyee){
       return next(new ErrorHandeler('product not Found not found',404))
        }
        res.status(200).json({    
            success:true,
            emplooyee
            
        })      
     })     

     exports.updateEmployee= catchAsyncError ( async (req,res,next)=>{
          console.log("this is me")
        const employee=await Employee.findById(req.params.id);
        
        if(!employee){
            return next(new ErrorHandeler('product not found',404))
             }
             const emploooyee=await Employee.findByIdAndUpdate(req.params.id,req.body,{
                 new:true,
                 runValidators:true,
                 useFindAndModify:false
             });
             res.status(200).json({
                 success:true,
                 emploooyee
             })
    })
    exports.delateEmployee= catchAsyncError ( async (req,res,next)=>{
        const employe1=await Employee.findById(req.params.id)
        if(!employe1){
            return next(new ErrorHandeler('Employee not found',404))
             }
             const employe2=await Employee.findByIdAndDelete(req.params.id);
             res.status(200).json({
                success:true,
                message:"product Delated",
                employe2
            })
    
    })