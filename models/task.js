const mongoose =require('mongoose');

const {Schema}= mongoose;

const taskSchema=new Schema({

title:{
    type: String,
    required: true,
    default: ""
},
desciption:{
    type: String,
    required: true,
    default: ""
},
status:{
    type: String,
    required: true,
    default: "pending"
},
priority:{
    type: String,
    required: true,
    default: "medium"
},
});

module.exports=mongoose.model('Task',taskSchema);