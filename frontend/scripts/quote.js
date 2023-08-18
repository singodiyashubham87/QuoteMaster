const categorySelect = document.getElementById("categorySelect");
const quoteElement = document.querySelector(".quoteText p");
const authorDiv = document.querySelector(".quoteButtons div");


const quoteObj = JSON.parse(localStorage.getItem("quote"));
quoteElement.textContent = quoteObj.quoteData.quote;
authorDiv.textContent = "--" + quoteObj.quoteData.author;


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
      quoteElement.textContent = resData.resObj[0].quote;
      authorDiv.textContent = "--" + resData.resObj[0].author;
    } catch (error) {
      console.error("Error = ", error);
    }
  });
