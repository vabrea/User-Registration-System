var userList = [];
let y=0
class User {
    constructor(firstName, lastName, email, password, age, address, cardNumber, phone, color) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.address = address;
        this.cardNumber = cardNumber;
        this.contactPhone = phone;
        this.color = color;
        this.id=y++;

    }
}

function isValid(aUser){
    let valid=true;
    $("input").removeClass("input-error")
    // if(aUser.firstName.length==0){
    //     valid=false;
    //     console.log("Invalid First Name");
    // }
    // if(aUser.lastName.length==0){
    //     valid=false;
    //     console.log("Invalid Last Name");
    // }
    if(aUser.email.length==0){
        valid=false;
        $(`#txtEmail`).addClass("input-error");
    }
    if(aUser.password.length==0){
        valid=false;
        $(`#txtPassword`).addClass("input-error");
        
    }


    // if(aUser.age.length==0){
    //     valid=false;
    //     console.log("Invalid Age");
    // }
    // if(aUser.address.length==0){
    //     valid=false;
    //     console.log("Invalid Address");
    // }
    // if(aUser.cardNumber.length==0){
    //     valid=false;
    //     console.log("Invalid Card Number");
    // }
    // if(aUser.contactPhone.length==0){
    //     valid=false;
    //     console.log("Invalid Phone");
    // }

    if(!valid){
        displayError("Missing Data")
    }
    return valid;
}

function validatePass(){
    let txtPass =$("#txtPassword");
    let password=txtPass.val();
    if(password.length<6){
        txtPass.css("border","2px solid red"); 
        displayError("Password is too short")
    }else{
        txtPass.css("border","2px solid green")
        hideError();
    }
}

function displayError(msg){
    $("#alertError").removeClass("hide").text(msg);
}

function hideError(){
    $("#alertError").addClass("hide");
}

function register(){
    let inputFirstName = $("#txtFirstName").val();
    let inputLastName = $("#txtLastName").val();
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputAge = $("#txtAge").val();
    let inputAddress = $("#txtAddress").val();
    let inputCardNumber = $("#txtCardNumber").val();
    let inputPhone = $("#txtPhone").val();
    let inputColor = $("#txtColor").val();
    
    //create theUser
   let theUser= new User(inputFirstName,inputLastName,inputEmail,inputPassword,inputAge,inputAddress,inputCardNumber,inputPhone,inputColor);
   //validate the user
    if(isValid(theUser)){
    saveUser(theUser);
    $("input").val("");
    }
   //clear the inputs
   
}


function init(){
    console.log("Registration")
    //hook events
    $("#txtPassword").change(validatePass);
}
window.onload=init;