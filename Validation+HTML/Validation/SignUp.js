
var confirm=false;
var emailvalid=false;
var pwdValid=false;

function confirmpwd(){
    enablebutton(false);
let pwd=$("#password").val();
let cpwd=$("#confirm").val();
if(pwd==cpwd){
    confirm=true;
    enablebutton(true);
}
else{
    if(cpwd!="")
    {
        alert("password mismatch");

    }
    
    $("#password").val("");
    $("#confirm").val("");
    confirm=false;
    enablebutton(false);
}
}

function validateEmail(){
    enablebutton(false);
    let email=$("#emialId").val();
    const regexp=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    let emailstat=regexp.test(email);
    if(!emailstat){
        if(email!=""){
            alert("Enter valid email");
        }
       
        emailvalid=false;
        enablebutton(false);
    }
    else{
        emailvalid=true;
        enablebutton(true);
    }
}

function validatepwd(){
    enablebutton(false);
    let pwd=$("#password").val();
    let regexp=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{6,20}/;
    let pwdstat=regexp.test(pwd);
    if(pwd.length>=6 && pwd.match(/[0-9]/g) && pwd.match(/[a-z]/g) && pwd.match(/[A-Z]/g) && pwd.match(/[@#$%^&-+=()]/g))
    {
        pwdValid=true;
        enablebutton(true);
    }
    else{
        pwdValid=false;
        enablebutton(false);
        if(pwd!="")
        {
            alert("Enter valid password");
        }
        
    }


}
function enablebutton(val){
    if(val==false){
        $("#signUp").attr('disabled','true');
        $("#signUp").addClass("disabled");
        return;
    }
    if(confirm && emailvalid && pwdValid){
        $("#signUp").removeAttr('disabled');
        $("#signUp").removeClass("disabled");
    }
    else{
        $("#signUp").attr('disabled','true');
        $("#signUp").addClass("disabled");
    }
    
}