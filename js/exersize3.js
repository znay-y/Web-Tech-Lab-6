let firstname = document.getElementById("fNameIn");
let lastname = document.getElementById("sNameIn");
let save = document.getElementById("saver");

save.addEventListener("click", storedata);

function storedata() {
    console.log("Saving data...");
    localStorage.setItem("firstname", firstname.value);
    localStorage.setItem("lastname", lastname.value);
    window.location.href = "exersize3result.html";
}