const letsGo = document.getElementById("submit");
const greeting = document.getElementById("greet");

//Greeting
const hours = new Date().getHours();
let greet = "";
if(hours<=17 & hours>=5){
    greet = hours<12?"Morning":"Afternoon";
}else{
    greet = hours<22?"Evening":"Night";
}

greeting.textContent = greet;


letsGo.addEventListener("click", function(){
    const userName = document.getElementById("userName").value;
    localStorage.setItem("userName", userName);
    window.location.href = "/homepage";
})


