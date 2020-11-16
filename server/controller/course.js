const mongoose = require('mongoose');
const AppError = require('./../utils/appError');
const courseModel = require('./../model/courseModel');
const catchAsync = require('./../utils/catchAsync');


exports.getAll = catchAsync(async (req,res,next)=>{
       const course = await courseModel.find();
       
        res.status(200).json({
            result: course.length,
            status:"success",
            data: course
        })
    
});

exports.getCourse = catchAsync(async (req, res, next) =>{
    
        const id = req.params.id;
    const Course = await courseModel.findById(id);
    if(!Course){
      return next(new AppError('No Course found with that Id', 404))
    }
    res.status(200).json({
        status:"success",
        data: Course
    })
    
});

exports.Update = catchAsync( async (req, res, next) =>{
    
        const id = req.params.id;
        const course = await courseModel.findById(id);
        if(!course){
            res.status(400).json({
                message: 'Invalid Id'
            })
        }
        else{
            const updatedTour = await courseModel.findByIdAndUpdate(id,{
                course_id: req.body.course_id,
            course_title: req.body.course_title,
            topic_id: req.body.topic_id,
            course_description: req.body.course_description,
            durations: req.body.durations
            })

            res.status(200).json({
                status:"success",
                data: updatedTour
            })
        }
   
});


exports.Create = catchAsync(async (req, res, next) => {
    const course = await courseModel.create({
                _id : new mongoose.Types.ObjectId,
                course_id: req.body.course_id,
            course_title: req.body.course_title,
            topic_id: req.body.topic_id,
            course_description: req.body.course_description,
            durations: req.body.durations
    
            });
            res.status(201).json({
                status:'success',
                data: course
            });
   

});

exports.Delete =catchAsync(async (req, res, next) =>{
  
        const id = req.params.id;
        const course = await courseModel.findById(id);
        if(!course){
            res.status(400).json({
                message: 'Invalid Id'
            })
        }
        else{
            const updatedTour = await courseModel.findByIdAndDelete(id)
            res.status(200).json({
                status:"success",
                message: "deleted"
            })
        }
   
});
