var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var age = document.getElementById("age");
var email = document.getElementById("emailAddress");
var phoneno = document.getElementById("phoneNo");
var submitButton = document.getElementById("submit-btn");
var submitButton2 = document.getElementById("submit-btn2");
var addPassengerButton=document.getElementById("add-passenger-btn");
var firstName2 = document.getElementById("firstName2");
var lastName2 = document.getElementById("lastName2");
var age2 = document.getElementById("age2");

var name_regex = /^[a-zA-Z]{0,20}$/;
var age_regex = /^0?1[89]|0?[2-9][0-9]$/;
var email_regex = /\S+@\S+\.\S+/;
var phone_regex = /^[0-9]{10}$/;

submitButton.disabled = "true";
submitButton2.disabled = "true";
addPassengerButton.disabled="true";

let validateInput = {
    "firstn": false,
    "lastn": false,
    "ageperson": false,
    "emailid": false,
    "phonenumber": false,
    "firstn2": false,
    "lastn2": false,
    "ageperson2": false
};

firstName.addEventListener('input', validateFirstName)
lastName.addEventListener('input', validateLastName)
age.addEventListener('input', validateAge)
email.addEventListener('input', validateEmail)
phoneno.addEventListener('input', validatePhoneNo)
firstName2.addEventListener('input', validateFirstName2)
lastName2.addEventListener('input', validateLastName2)
age2.addEventListener('input', validateAge2)

function passvalues()
{
            var firstName=document.getElementById("firstName").value;
            localStorage.setItem("textvalue0",firstName); 
            
            var lastName=document.getElementById("lastName").value;
            localStorage.setItem("textvalue1",lastName);
           
            var age=document.getElementById("age").value;
            localStorage.setItem("textvalue2",age);
            
            var email=document.getElementById("emailAddress").value;
            localStorage.setItem("textvalue3",email);

            var cp=1;
            localStorage.setItem("cp",cp);
}

function passvalues2()
{
            var firstName=document.getElementById("firstName").value;
            localStorage.setItem("textvalue0",firstName); 
    
            var lastName=document.getElementById("lastName").value;
            localStorage.setItem("textvalue1",lastName);
   
            var age=document.getElementById("age").value;
            localStorage.setItem("textvalue2",age);
    
            var email=document.getElementById("emailAddress").value;
            localStorage.setItem("textvalue3",email);
            
            var firstName2=document.getElementById("firstName2").value;
            localStorage.setItem("textvalue4",firstName2); 
            
            var lastName2=document.getElementById("lastName2").value;
            localStorage.setItem("textvalue5",lastName2);
           
            var age2=document.getElementById("age2").value;
            localStorage.setItem("textvalue6",age2);
            
            var cp=2;
            localStorage.setItem("cp",cp);
}
function buttonRelease()
{
    var result = validateInput.firstn === true && validateInput.lastn === true && validateInput.ageperson === true && validateInput.emailid === true && validateInput.phonenumber === true;
    if(result){

        submitButton.removeAttribute("disabled");
        addPassengerButton.removeAttribute("disabled");
        console.log("Submit button enabled");
    }
    else{
        submitButton.disabled = "true";
        addPassengerButton.disabled="true";
        console.log("Submit button disabled");
    }
}

function buttonRelease2()
{
    var result = validateInput.firstn2 === true && validateInput.lastn2 === true && validateInput.ageperson2 === true ;
    if(result){
        submitButton2.removeAttribute("disabled");
        console.log("Submit button enabled");
    }
    else{
        submitButton2.disabled = "true";
        console.log("Submit button disabled");
    }
}

function validateFirstName() {

    console.log(firstName.value);

    if (name_regex.test(firstName.value)) {
        valid(firstName);
        validateInput.firstn = true;
        buttonRelease();
    }
    else {
        invalid(firstName);
        validateInput.firstn = false;
    }
}

function validateLastName() {
    if (name_regex.test(lastName.value)) {
        valid(lastName);
        validateInput.lastn = true;
        buttonRelease();
    }
    else {
        invalid(lastName);
        validateInput.lastn = false;
    }
}
function addPassenger(){
    document.querySelector("#add").style.display = "inline";
    document.querySelector("#buttonblk").style.display = "none";
}

function validateAge() {
    if (age_regex.test(age.value)) {
        valid(age);
        validateInput.ageperson = true;
        buttonRelease();  
    }
    else {
        invalid(age);
        validateInput.ageperson = false;
        buttonRelease();
    }
}
function validateFirstName2() {
    if (name_regex.test(firstName2.value)) {
        valid(firstName2);
        validateInput.firstn2 = true;
        buttonRelease2();
    }
    else {
        invalid(firstName2);
        validateInput.firstn2 = false;
    }
}
function validateLastName2() {
    if (name_regex.test(lastName2.value)) {
        valid(lastName2);
        validateInput.lastn2 = true;
        buttonRelease2();
    }
    else {
        invalid(lastName2);
        validateInput.lastn2 = false;
    }
}
function validateAge2() {
    if (age_regex.test(age2.value)) {
        valid(age2);
        validateInput.ageperson2 = true;
        buttonRelease2();  
    }
    else {
        invalid(age2);
        validateInput.ageperson2 = false;
        buttonRelease2();
    }
}
function validateEmail() {
    if (email_regex.test(email.value)) {
        valid(email);
        validateInput.emailid = true;
        buttonRelease();
    }
    else {
        invalid(email);
        validateInput.emailid = false;
    }
}

function validatePhoneNo() {
    if (phone_regex.test(phoneno.value)) {
        valid(phoneno);
        validateInput.phonenumber = true;
        buttonRelease();
    }
    else {
        invalid(phoneno);
        validateInput.phonenumber = false;
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