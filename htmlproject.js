const mongoose = require("mongoose")

const TaskSchema =  new mongoose.TaskSchema(){
    title:String,
    isCompleted:Boolean
}
