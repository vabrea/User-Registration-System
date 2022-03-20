var userList = [];

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

    }
}

function isValid(aUser){
    let valid=true;
    if(aUser.firstName.length==0){
        valid=false;
        console.log("Invalid First Name");
    }
    if(aUser.lastName.length==0){
        valid=false;
        console.log("Invalid Last Name");
    }
    if(aUser.email.length==0){
        valid=false;
        console.log("Invalid Email");
    }
    if(aUser.password.length==0){
        valid=false;
        console.log("Invalid Password");
    }
    if(aUser.age.length==0){
        valid=false;
        console.log("Invalid Age");
    }
    if(aUser.address.length==0){
        valid=false;
        console.log("Invalid Address");
    }
    if(aUser.cardNumber.length==0){
        valid=false;
        console.log("Invalid Card Number");
    }
    if(aUser.contactPhone.length==0){
        valid=false;
        console.log("Invalid Phone");
    }
    return valid;
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
    if(isValid(theUser));
   console.log(theUser);

   //clear the inputs
   $("input").val("");
}


function init(){
    console.log("Registration")
    //hook events

}
window.onload=init;