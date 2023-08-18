const letsGo = document.getElementById("submit");
 
letsGo.addEventListener("click", function(){
    const userName = document.getElementById("userName").value;
    localStorage.setItem("userName", userName);
    window.location.href = "/homepage";
})


