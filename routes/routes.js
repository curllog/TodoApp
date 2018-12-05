const router=require('express').Router();
const Todo =require('../models/todo');


router.get('/',function(req,res){
  Todo.find({}).then(function(result){
    let todos=result.filter(function(todo){
      return !todo.done;
    })
    let doneTodos=result.filter(function(todo){
      return todo.done;
    })
    res.render("index",{todoList:todos,doneTodo:doneTodos});
  })
});


router.post('/todo',function(req,res){
  if (req.body.todoText!='') {
    let newTodo=new Todo({description:req.body.todoText})
    newTodo
      .save()
      .then(function(result){
        console.log(result);
        res.redirect('/')
      });
  }
  else{
    res.redirect('/')
  }
});

router.post('/todo/:id/completed',function(req,res){
  let todoId=req.params.id;
  Todo.findById(todoId)
    .exec()
    .then(function(result){
      result.done=!result.done;
      return result.save()
    }).then(function(){
      res.redirect('/')
    })
});


module.exports = router;
