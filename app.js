var accounts=[];
function signup(){
    var email =document.getElementById("email");
    var pass =document.getElementById("pass");
    var numbr =document.getElementById("number");
    if(email.value!=="" && pass.value!=="" && numbr.value!=="");
    var checkobj={
        useremail:email.value,
        userpass:pass.value,
        usernum:numbr.value,
    }
    accounts.push(checkobj);
    console.log(accounts);
    email.value="";
    pass.value="";
    numbr.value="";
}

function login(){
    var email =document.getElementById("email");
    var pass =document.getElementById("pass");
    var numbr =document.getElementById("number");
    for(var i=0; i<accounts.length; i++){
        if(email.value==accounts[i]){
            if(pass.value==accounts[i]){
                if(numbr.value==accounts[i]){
                    alert("Sucess login")
                }
                else{
                    alert("Wrong password")
                }
            }
            else{
                alert("Wrong Email")
            }
        }
        console.log(accounts);
    }
}