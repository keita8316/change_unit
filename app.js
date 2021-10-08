const express = require('express');
const app = express();

app.get('/index',(req,res)=>{
    res.render('index.ejs');
});

app.listen(3000);