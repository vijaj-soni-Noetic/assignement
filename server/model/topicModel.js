const mongoose  = require('mongoose');

const topicSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    course_name: {
        type: String,
        required: [true, 'Enter course name']
    },
    topic_title: {
        type: String,
        required: [true, 'Enter topic Title']
    },
    topic_description: {
        type: String,
        required: false
    }

});
const Topic = mongoose.model('Topic', topicSchema);
module.exports = Topic;