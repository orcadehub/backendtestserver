import express from "express";
const app = express();


app.get("/", (req, res) => { 
  console.log("Backend Working Fine")
})

app.listen(3003, () => {
  console.log("Server started  http://localhost:3003" );
});

