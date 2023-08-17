const categorySelect = document.getElementById("categorySelect");
const quoteElement = document.querySelector(".quoteText p");
const authorDiv = document.querySelector(".quoteButtons div");


document
  .querySelector(".quoteButtons button")
  .addEventListener("click", async () => {
    const selectedCategory = categorySelect.value;
    try {
      const response = await fetch("http://localhost:3000/quote",{
        method : "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({category: selectedCategory})
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const resObj = await response.json();
      quoteElement.textContent = resObj.quote;
      authorDiv.textContent = "--"+resObj.author;
    } catch (error) {
      console.error("Error = ", error);
    }
  });
