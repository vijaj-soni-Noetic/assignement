const mongoose = require('mongoose');
const AppError = require('./../utils/appError');
const topicModel = require('./../model/topicModel');
const catchAsync = require('./../utils/catchAsync');


exports.getAll = catchAsync(async (req,res,next)=>{
       const topic = await topicModel.find();
       
        res.status(200).json({
            result: topic.length,
            status:"success",
            data: topic
        })
    
});

exports.getTopic = catchAsync(async (req, res, next) =>{
    
    const course_name = req.body.course_name;
    console.log(course_name);
    const Topic = await topicModel.find({course_name: course_name});
    if(!Topic){
      return next(new AppError('No Topic found with that Id', 404))
    }
    res.status(200).json({
        status:"success",
        data: Topic
    })
    
});

exports.Update = catchAsync( async (req, res, next) =>{
    
        const id = req.params.id;
        const topic = await topicModel.findById(id);
        if(!topic){
            res.status(400).json({
                message: 'Invalid Id'
            })
        }
        else{
            const updatedTour = await topicModel.findByIdAndUpdate(id,{
                course_name:req.body.course_name,
            topic_title: req.body.topic_title,
            topic_description: req.body.topic_description
            })

            res.status(200).json({
                status:"success",
                data: updatedTour
            })
        }
   
});


exports.Create = catchAsync(async (req, res, next) => {
    const topic = await topicModel.create({
        _id: new mongoose.Types.ObjectId,
        course_name:req.body.course_name,
            topic_title: req.body.topic_title,
            topic_description: req.body.topic_description
    
            });
            res.status(201).json({
                status:'success',
                data: topic
            });
   

});

exports.Delete =catchAsync(async (req, res, next) =>{
  
        const id = req.params.id;
        const topic = await topicModel.findById(id);
        if(!course){
            res.status(400).json({
                message: 'Invalid Id'
            })
        }
        else{
            const updatedTour = await topicModel.findByIdAndDelete(id)
            res.status(200).json({
                status:"success",
                message: "deleted"
            })
        }
   
});
