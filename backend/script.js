const express = require("express");
const cors = require("cors");
const path = require("path");
const { type } = require("os");
const port = process.env.PORT || 3000;

const app = express();

const staticPath = path.join(__dirname, "../frontend/");

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(staticPath));

app.get("/homepage", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(staticPath + "views/Homepage.html");
});

// Homepage get request endpoint handler 
app.get("/quote", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(staticPath + "views/Quote.html");
});


// Next Button Post request endpoint handler
app.post("/quote",async (req,res)=>{
  const selectedCategory = req.body.category || "";
    const requestURL = "https://api.api-ninjas.com/v1/quotes?category=" + selectedCategory;
    const header = {
        "X-Api-Key": "IprtatWDIjQHnJJYCiDddA==NgKrWLCtAAZuPfy4",
    };
    try {
        const response = await fetch(requestURL, { headers: header });
        const responseData = await response.json();
        const quote = responseData[0].quote;
        const author = responseData[0].author;
        const resp = {
          quote: quote,
          author: author,
        }
        res.json(resp);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("An error occurred.");
    }
})




app.listen(port, (req, res) => {
  console.log("Server is up and running...");
});
