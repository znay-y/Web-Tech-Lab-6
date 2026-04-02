let rButton = document.getElementById("nextbutton");
let lButton = document.getElementById("prevbutton");
let picture = document.getElementById("pic");
let index = 0;
const dirArray = ["img/er.png", "img/tlou.png", "img/heat.png"];

rButton.addEventListener("click", nextPic);
lButton.addEventListener("click", prevPic);

function nextPic() {
console.log("right button pressed");
    if (index==2){
        index=0;
    }
    else{
        index = index + 1;
    }
    picture.src = dirArray[index];
    console.log("New picture" + dirArray[index]);

}

function prevPic() {
console.log("left button pressed");
       if (index==0){
        index=2;
    }
    else{
        index = index - 1;
    }
    picture.src = dirArray[index];
    console.log("New picture" + dirArray[index]);
}