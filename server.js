const express = require('express');
const mustacheExpress=require('mustache-express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const router=require('./routes/routes');
mongoose.Promis=global.Promise;


mongoose.connect('mongodb://localhost:27017/todo_db',{
}).then(function(){
  console.log("Database worked!")
})


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.engine('mustache',mustacheExpress());
app.set('view engine','mustache');
app.set('views',__dirname+'/views');
app.use('/',router);
app.listen(3000,function(){
  console.log("It Working...")
})
