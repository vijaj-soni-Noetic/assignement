const mongoose  = require('mongoose');

const CourseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    course_id: {
        type: String,
        required: true,
        unique: true
    },
    course_title: {
        type: String,
        required: [true, 'Enter Course Title']
    },
    topic_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Topic'  
    },
    course_description: {
        type: String,
        required: false
    },
    durations: {
        type: Number,
        required: [true, 'A cousre must have duration']
    }

});
const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;