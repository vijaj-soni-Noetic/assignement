const express = require('express');
const router  = express.Router();
const courseController = require('./../controller/course');

router
.route('/')
.get(courseController.getAll)
.post(courseController.Create)

router
.route('/:id')
.get(courseController.getCourse)
.put(courseController.Update)
.delete(courseController.Delete)


module.exports = router;