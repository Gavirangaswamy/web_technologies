function loginValidation(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var msg = document.getElementById("login");

    if(username!==""){
        if(username.length<6 || username.length>12 ){
           msg.innerHTML="Username is invalid";
        }else if(password===""){
            msg.innerHTML="Password is Empty";
        }else if(password.length<5){
            msg.innerHTML="Password is Week";
        }else if(password.length>5 && password.length<8){
            msg.innerHTML="Password is Strong";
        }else{
            msg.innerHTML="Login Success";
        }
    }else{
        msg.innerHTML="Username is Empty";
    }
}
function regValidation(){
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("pass").value;
    var cnfpassword = document.getElementById("cnfpassword").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("message");

    if(username!==""){
        if(username.length<6 || username.length>12 ){
            msg.innerHTML="Username is invalid";
         }else if(fName===""){
            msg.innerHTML="First Name is Empty";
         }else if(lName===""){
            msg.innerHTML="Last Name is Empty";
         }else if(password===""){
             msg.innerHTML="Password is Empty";
         }else if(password.length<5){
             msg.innerHTML="Password is Week";
         }else if(password.length>5 && password.length<8){
             msg.innerHTML="Password is Strong";
         }else if(cnfpassword!==password){
            msg.innerHTML = "password mismatch";
        }else if(phone.length<10){
            msg.innerHTML = "Invalid Phone Number";
        }else if(email.length<5 || email.length>20){
            msg.innerHTML = "Invalid mailid";
        }else{
            msg.innerHTML = "Registration Successful"; 
        }
    }else{
        msg.innerHTML="Username is Empty";
    }
    
}
    