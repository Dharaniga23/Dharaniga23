//document.getElementById("myh").textContent = "Hello World!";
//document.getElementById("myh").style.color = "red"; 
let username;
document.getElementById("mysubmit").onclick = function() {
    username=document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("myh").textContent = `Hello ${username}!`;
    document.getElementById("myh").style.color = "green";
}
let age=window.prompt("Enter your age");
age=Number(age);
age+=1;
console.log(age,typeof(age));
