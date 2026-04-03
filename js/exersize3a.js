let info = document.createElement("p");
let main = document.getElementById("main");
info.id = "info";
let firstname = localStorage.getItem("firstname");
let lastname = localStorage.getItem("lastname");

let fullname = firstname + " " + lastname;
info.textContent = "Hi " + fullname;
main.appendChild(info);


let clearbutton = document.createElement("button");
clearbutton.textContent = "Clear Data";
main.appendChild(clearbutton);

clearbutton.addEventListener("click", cleardata);

function cleardata() {
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    window.location.href = "exersize3.html";
}