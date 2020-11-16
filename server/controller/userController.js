const mongoose = require('mongoose');
const AppError = require('./../utils/appError');
const UserModel = require('./../model/userModel');
const catchAsync = require('./../utils/catchAsync');


exports.getAll = catchAsync(async (req,res,next)=>{
       const User = await UserModel.find();
       
        res.status(200).json({
            result: User.length,
            status:"success",
            data: User
        })
    
});

exports.getUser = catchAsync(async (req, res, next) =>{
    
    const id = req.body.id;
    const User = await UserModel.findById(id);
    if(!User){
      return next(new AppError('No User found with that Id', 404))
    }
    res.status(200).json({
        status:"success",
        data: User
    })
    
});

exports.Update = catchAsync( async (req, res, next) =>{
    
        const id = req.params.id;
        const User = await UserModel.findById(id);
        if(!User){
            res.status(400).json({
                message: 'Invalid Id'
            })
        }
        else{
            const updatedUser = await UserModel.findByIdAndUpdate(id,{
                name:req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                address: req.body.address
            })

            res.status(200).json({
                status:"success",
                data: updatedUser
            })
        }
   
});


exports.Create = catchAsync(async (req, res, next) => {
    const User = await UserModel.create({
        _id: new mongoose.Types.ObjectId,
                name:req.body.name,
                email: req.body.email,
                mobile: req.body.mobile,
                address: req.body.address
    
            });
            res.status(201).json({
                status:'success',
                data: User
            });
   

});

exports.Delete =catchAsync(async (req, res, next) =>{
  
        const id = req.params.id;
        const User = await UserModel.findById(id);
        if(!User){
            res.status(400).json({
                message: 'Invalid Id'
            })
        }
        else{
            const updatedTour = await UserModel.findByIdAndDelete(id)
            res.status(200).json({
                status:"success",
                message: "deleted"
            })
        }
   
});
