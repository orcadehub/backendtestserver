import express from "express";
import TestRoutes from './routes/test_route.js'
const app = express();
app.use(express.json());
app.use(TestRoutes)

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});


// Github Account creation
// Download and Install Git from https://git-scm.com/downloads
// Open terminal and run the following commands

// git config --global user.name "Your Name"
// git config --global user.email "<your_email@example.com>"

// git config --list               -> to verify



// git init
// git remote add origin <repository_url>
// git branch -M main

// git add .
// git commit -m "Initial commit"
// git push -u origin main
