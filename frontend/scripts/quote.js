const categorySelect = document.getElementById("categorySelect");
const quoteElement = document.querySelector(".quoteText p");
const authorDiv = document.querySelector(".quoteButtons div");


const quoteObj = JSON.parse(localStorage.getItem("quote"));
quoteElement.textContent = quoteObj.quoteData.quote;
authorDiv.textContent = "--" + quoteObj.quoteData.author;
for (let i = 0; i < categorySelect.options.length; i++) {
  if (categorySelect.options[i].value.toLowerCase() === quoteObj.quoteData.category) {
    categorySelect.selectedIndex = i;
    break;
  }
}


document
  .querySelector(".quoteButtons button")
  .addEventListener("click", async () => {
    const selectedCategory = categorySelect.value;
    try {
      const res = await fetch("/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedCategory }),
      });
      const resData = await res.json();
      quoteElement.textContent = await resData.resObj.quote;
      authorDiv.textContent = "--" + resData.resObj.author;
    } catch (error) {
      console.error("Error = ", error);
    }
  });
