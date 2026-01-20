const express = require("express");
const app = express();


app.get("/", (req, res) => { 
  res.send("Backend Working Fine")
})

app.listen(3003, () => {
  console.log("Server started  http://localhost:3003" );
});

