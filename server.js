const express = require('express');
const mustacheExpress=require('mustache-express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.engine('mustache',mustacheExpress());
app.set('view engine','mustache');
app.set('views',__dirname+'/views');

app.get('/',function(req,res){
  res.render("index",{});
});

app.listen(3000,function(){
  console.log("It Working...")
})
