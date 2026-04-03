let info = document.createElement("p");
let main = document.getElementById("main");
info.id = "info";
let firstname = sessionStorage.getItem("firstname");
let lastname = sessionStorage.getItem("lastname");

let fullname = firstname + " " + lastname;
console.log(fullname);
info.textContent = "Hi " + fullname;
main.appendChild(info);


let clearbutton = document.createElement("button");
clearbutton.textContent = "Clear Data";
main.appendChild(clearbutton);

clearbutton.addEventListener("click", cleardata);

function cleardata() {
    sessionStorage.removeItem("firstname");
    sessionStorage.removeItem("lastname");
    window.location.href = "exersize4.html";
}