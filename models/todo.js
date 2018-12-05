const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let todoSchema=new Schema({
  description:String,
  done:Boolean,
})
module.exports=mongoose.model('Todo',todoSchema);
