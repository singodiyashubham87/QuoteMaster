document.getElementById("name").innerText = localStorage.getItem("userName");
const greeting = document.getElementById("greet");
greeting.textContent = localStorage.getItem("greeting");;

document.getElementById('myForm').addEventListener('submit',async (event)=> {
    event.preventDefault();
    const selectedCategory = document.getElementById('category').value;
    const res = await fetch("/quote",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({selectedCategory})
    });
    const resData = await res.json();
      localStorage.setItem("category", selectedCategory);
      localStorage.setItem("quote",JSON.stringify({quoteData:resData.resObj}));
      return window.location.href = "/quote";
    
  });
  

