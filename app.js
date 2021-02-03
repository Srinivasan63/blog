const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));

app.get('/',function(req,res){
    console.log("Hi login");
    res.sendFile(__dirname + '/views/login.html');
})
app.post('/signup',function(req,res){
    console.log("Sign up page posted");
    res.sendFile(__dirname + '/views/signup.html');
})
app.use('/redirectlogin', function(req, res, next){ 
    console.log("redirecting to Login page again") 
    res.redirect('/views/login.html'); 
    next(); 
});
app.listen(3000,()=>{
    console.log("server is running at the port 3000");
})