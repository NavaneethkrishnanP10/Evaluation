var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var age = document.getElementById("age");
var email = document.getElementById("emailAddress");
var phoneno = document.getElementById("phoneNo");
var submitBtn = document.getElementById("submit-btn");

var name_regex = /^[a-zA-Z]{0,20}$/;
var age_regex = /^0?1[89]|0?[2-9][0-9]$/;
var email_regex = /\S+@\S+\.\S+/;
var phone_regex = /^[0-9]{10}$/;

submitBtn.disabled = "true";



let inputValidator = {
    "firstn": false,
    "lastn": false,
    "ageperson": false,
    "emailid": false,
    "phonenumber": false
};


firstName.addEventListener('input', validateFirstName)
lastName.addEventListener('input', validateLastName)
age.addEventListener('input', validateAge)
email.addEventListener('input', validateEmail)
phoneno.addEventListener('input', validatePhoneNo)

function passvalues()
        {
            var fname=document.getElementById("firstName").value;
            localStorage.setItem("textvalue0",fname); 
            
            var lname=document.getElementById("lastName").value;
            localStorage.setItem("textvalue1",lname);
           
            var ag=document.getElementById("age").value;
            localStorage.setItem("textvalue2",ag);
            
            var ema=document.getElementById("emailAddress").value;
            localStorage.setItem("textvalue3",ema);

            return false;
        }

function buttonRelease(){

    console.log(inputValidator);
    var result = inputValidator.firstn === true && inputValidator.lastn === true && inputValidator.ageperson === true && inputValidator.emailid === true && inputValidator.phonenumber === true;
     console.log(result);

    
    if(result){

        submitBtn.removeAttribute("disabled");
        console.log("Submit button active");
    }
    else{
        submitBtn.disabled = "true";
        console.log("Submit button not active");
        
    }
}



function validateFirstName() {

    console.log(firstName.value);

    if (name_regex.test(firstName.value)) {
        valid(firstName);
        inputValidator.firstn = true;
        buttonRelease();
    }
    else {

        invalid(firstName);
        inputValidator.firstn = false;

    }
}

function validateLastName() {

    console.log(lastName.value);

    if (name_regex.test(lastName.value)) {
        valid(lastName);
        inputValidator.lastn = true;
        buttonRelease();
        
    }
    else {

        invalid(lastName);
        inputValidator.lastn = false;

    }

}

function validateAge() {

    console.log(age.value);

    if (age_regex.test(age.value)) {
        valid(age);
        inputValidator.ageperson = true;
        buttonRelease();
        
    }
    else {

        invalid(age);
        inputValidator.ageperson = false;
        buttonRelease();

    }

}

function validateEmail() {

    console.log(email.value);

    if (email_regex.test(email.value)) {
        valid(email);
        inputValidator.emailid = true;
        buttonRelease();
        
    }
    else {

        invalid(email);
        inputValidator.emailid = false;

    }

}

function validatePhoneNo() {

    console.log(phoneno.value);

    if (phone_regex.test(phoneno.value)) {
        valid(phoneno);
        inputValidator.phonenumber = true;
        buttonRelease();
        
    }
    else {

        invalid(phoneno);
        inputValidator.phonenumber = false;

    }

}

function valid(element){

    element.style.borderColor = "green";
    element.style.borderWidth = "thin thick";

}

function invalid(element){

    element.style.borderColor = "red";
    element.style.borderWidth = "thin thick";

}