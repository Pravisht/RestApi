const express=require('express');


const getAllTask=(req,res)=>{
res.send({"msg":"value hit"});
}
const getAllTaskTesting=(req,res)=>{
res.status(200).json({"msg":"testing api hit"});
}
module.exports={getAllTask,getAllTaskTesting};