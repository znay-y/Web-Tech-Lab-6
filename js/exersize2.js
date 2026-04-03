const form = document.getElementById("mainform");

form.addEventListener("submit", validation);


let nam = document.getElementById("name");
let email = document.getElementById("email");
let address = document.getElementById("address");
let postcode = document.getElementById("postcode");
let keep = document.getElementById("accept");

function validation(event) {
    event.preventDefault();

   
    console.log("Name is " + nam.value);
    if (nam.value == "") {
        document.getElementById("namesection").style.backgroundColor = "red";
        console.log("Name is empty");
    }

    console.log("Email is " + email.value);
    if (email.value == "") {
        document.getElementById("emailsection").style.backgroundColor = "red";
        console.log("Email is empty");
    }


    console.log("Address is " + address.value);
    if (address.value == "") {
        document.getElementById("addresssection").style.backgroundColor = "red";
        console.log("Address is empty");
    }

    console.log("Postcode is " + postcode.value);
    if (postcode.value == "") {
        document.getElementById("postcodesection").style.backgroundColor = "red";
        console.log("Postcode is empty");
    }

    console.log("Keep is " + keep.checked);
    if (keep.checked == false) {
        document.getElementById("keepsection").style.backgroundColor = "red";
        console.log("Keep is not checked");
    }
}
