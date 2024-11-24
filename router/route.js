const express=require('express');
const router=express.Router();
const {getAllTask,getAllTaskTesting} =require('../controller/taskController');

router.get('/task',getAllTask);
router.get('/task/testing',getAllTaskTesting);
module.exports=router;
