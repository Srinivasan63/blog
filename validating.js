function viewPassword(){
          var passwordInput = document.getElementById('pswd1');
          var passStatus = document.getElementById('pass-status');
          if (passwordInput.type == 'password'){
            passwordInput.type='text';
            passStatus.className='fa fa-unlock';
    
          }
          else{
            passwordInput.type='password';
            passStatus.className='fa fa-lock';
          }
      }

function validateForm() {  
  var pw1 = document.getElementById("pswd1").value;  
  var pw2 = document.getElementById("pswd2").value; 
   var reg =/\S+@\S+\.\S+/;
  var address = document.getElementById("email").value;
  var reg =/^(?=.*[!@@#\$%\^&\*0-9])/;
  var name = document.getElementById("name").value;
  if (reg.test(name) == true){
    alert('Name should not contain Special char and Number');
    return false;
}
  if (reg.test(address) == false) {
    alert('Invalid Email Address');
      return false;
  }
  if(pw1 != pw2) {  
    alert ("Your passwords are not same");  
    return false;  
  }
  else{
    alert ("Your Registeration is submited"); 
    return true;
  }
  
}
 function validateMail() {

            var reg =/\S+@\S+\.\S+/;
            var address = document.getElementById("email").value;
            if (reg.test(address) == false) {
              alert('Invalid Email Address');
              return false;
            }
            else{
                  return true;
            }
}            
 function CheckPasswordStrength() {
        var reg =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@@#\$%\^&\*])(?=.{8,})/;
        var password_strength = document.getElementById("pswd1").value;
        if (reg.test(password_strength) == null){
              document.getElementById("msg2").innerHTML="";

       }
       if (reg.test(password_strength) == false){
        document.getElementById("msg2").innerHTML="*your password is weak";
       }
        else{
              document.getElementById("msg2").innerHTML="";
        }
    }
   function CheckName() {
        var reg =/^(?=.*[!@@#\$%\^&\*0-9])/;
        var name = document.getElementById("name").value;
       if (reg.test(name) == true){
        document.getElementById("msg1").innerHTML="*Invalid Name";
       }
        else{
              document.getElementById("msg1").innerHTML="";
        }
    }
app.get('/login',function(req,res){
    console.log("Hi");
    res.sendFile(__dirname +'D:/Full_stack assignment/assign9/samplelog.html');

})