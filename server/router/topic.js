const express = require('express');
const router  = express.Router();
const topicController = require('./../controller/topic');


router.post('/filter', topicController.getTopic)

router
.route('/')
.get(topicController.getAll)
.post(topicController.Create)

router
.route('/:id')
.put(topicController.Update)
.delete(topicController.Delete)


module.exports = router;