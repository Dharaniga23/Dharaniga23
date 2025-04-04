
//ADD ND CHANGE HTML

const newH1=document.createElement("h1");
newH1.textContent="❤️";
newH1.id="myH1";
newH1.style.textAlign="center";
//document.body.append(newH1);
//document.getElementById("box4").prepend(newH1);
// const box2=document.getElementById("box2");
// const box3=document.getElementById("box3");
// const box4=document.getElementById("box4");
// document.body.insertBefore(newH1,box2);
const boxes=document.querySelectorAll(".box");
document.body.insertBefore(newH1,boxes[2]);