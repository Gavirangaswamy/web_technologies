function loginValidation(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var msg = document.getElementById("login");
    

    if(username!==""){
        if(username.length<6 || username.length>12 ){
           msg.innerHTML='<i class="fas fa-exclamation-circle" style ="font-size:20px;"></i>'+"   Username is invalid";
        }else if(password===""){
            msg.innerHTML='<i class="fas fa-exclamation-circle" style ="font-size:20px;"></i>'+"   Password is Empty";
        }else if(password.length<5){
            msg.innerHTML='<i class="fas fa-exclamation-circle" style ="font-size:20px;"></i>'+"   Password is Week";
        }else if(password.length>5 && password.length<8){
            msg.innerHTML='<i class="fas fa-exclamation-circle" style ="font-size:20px;"></i>'+"   Password is Strong";
        }else{
            msg.innerHTML="Login Success";
            if(msg.innerHTML==="Login Success"){
            msg.style.color="green";
            }
        }
    }else{
        msg.innerHTML= '<i class="fas fa-exclamation-circle" style ="font-size:20px;"></i>'+"  Username is Empty";
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
            msg.innerHTML='<i class="fas fa-exclamation-circle" style ="font-size:20px;"></i>'+"   Username is invalid";
         }else if(fName===""){
            msg.innerHTML='<i class="fas fa-exclamation-circle" style ="font-size:20px;"></i>'+"   First Name is Empty";
         }else if(lName===""){
            msg.innerHTML='<i class="fas fa-exclamation-circle" style ="font-size:20px;"></i>'+"   Last Name is Empty";
         }else if(password===""){
             msg.innerHTML='<i class="fas fa-exclamation-circle" style ="font-size:20px;"></i>'+"   Password is Empty";
         }else if(password.length<5){
             msg.innerHTML='<i class="fas fa-exclamation-circle" style ="font-size:20px;"></i>'+"   Password is Week";
         }else if(password.length>5 && password.length<8){
             msg.innerHTML='<i class="fas fa-exclamation-circle" style ="font-size:20px;"></i>'+"   Password is Strong";
         }else if(cnfpassword!==password){
            msg.innerHTML = '<i class="fas fa-exclamation-circle" style ="font-size:20px;"></i>'+"   password mismatch";
        }else if(phone.length<10){
            msg.innerHTML = '<i class="fas fa-exclamation-circle" style ="font-size:20px;"></i>'+"   Invalid Phone Number";
        }else if(email.length<5 || email.length>20){
            msg.innerHTML = '<i class="fas fa-exclamation-circle" style ="font-size:20px;"></i>'+"   Invalid mailid";
        }else{
            msg.innerHTML = "Registration Successful"; 
            if(msg.innerHTML==="Registration Successful"){
                msg.style.color="green";
                }
        }
    }else{
        msg.innerHTML='<i class="fas fa-exclamation-circle" style ="font-size:20px"></i>'+ " Username is Empty";
    }
    
}
    