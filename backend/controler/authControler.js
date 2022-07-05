const User=require('../model/user');
const ErrorHandeler=require('../middlewares/errors');
const catchAsyncError=require('../middlewares/catchAsync');
const sendToken = require('../utile/jwtToken');
//const { use } = require('../routs/auth');
const cloudinary=require('cloudinary')
exports.registerUser=
catchAsyncError(
    async (req,res,next)=>{
        try{ 
        //     console.log(req.body)
        //     const result=await cloudinary.v2.uploader.upload(req.body.avatar,{
        //         folder:'addisSoftware',
        //         width:150,
        //         crop:"scale"
        //     });
        //   console.log(result); 
    const {name,email,password}=req.body;
    const user=await User.create({
        name,email,password,
        //  avatar:{
        //      public_id:result.public_id,
        //      url:result.secure_url
        //  } 
    }) 
   sendToken(user,200,res)
}catch(error) {
    console.log(error) ;
}
}
)
exports.loginUser=catchAsyncError( async (req,res,next)=>{
    const {password,email}=req.body;
   if(!email||!password){
       return next(new ErrorHandeler('pleas enter password and email',400))
   }
  const user =await User.findOne({email}).select('+password')
  //finding user
  if(!user){
      return next(new ErrorHandeler('Invalid Email or password',401))
  }
  const isPasswordMatched=await user.comparePassword(password);
  if(!isPasswordMatched){
      return next(new ErrorHandeler('Invalid password or Email',401));

  }

  sendToken(user,200,res)
})
