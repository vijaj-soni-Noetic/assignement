const express = require('express');
const router  = express.Router();
const userController = require('./../controller/userController');


router
.route('/')
.get(userController.getAll)
.post(userController.Create)

router
    .route('/:id')
    .get(userController.getAll)
    .put(userController.Update)
    .delete(userController.Delete)


module.exports = router;