let firstname = document.getElementById("fNameIn");
let lastname = document.getElementById("sNameIn");
let save = document.getElementById("saver");

save.addEventListener("click", storedata);

function storedata() {
    console.log("Saving data...");
    sessionStorage.setItem("firstname", firstname.value);
    sessionStorage.setItem("lastname", lastname.value);
    window.location.href = "exersize4result.html";
}