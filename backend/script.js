const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();

const staticPath = path.join(__dirname,"..","frontend","views");
const assetsPath = path.join(__dirname,"..","frontend");

//Middlewares
app.use(express.json());
app.use(express.static(staticPath));
app.use(express.static(assetsPath));


app.get("/homepage", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(staticPath + "/Homepage.html");
});

app.get("/quote", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(staticPath + "/Quote.html");
});

app.post("/quote", async (req,res)=>{
  const requestURL = "https://api.api-ninjas.com/v1/quotes?category=" + req.body.selectedCategory;
    const header = {
        "X-Api-Key": "IprtatWDIjQHnJJYCiDddA==NgKrWLCtAAZuPfy4",
    };
    try {
        const response = await fetch(requestURL,{headers:header});
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const resArray = await response.json();
        res.send({resObj: resArray[0]});
      } catch (error) {
        console.error("Error = ", error);
      }
})


app.listen(port, (req, res) => {
  console.log("Server is up and running...");
});
