import express from "express";
import TestRoutes from "./routes/test_route.js";
const app = express();
app.use(express.json());
app.use(TestRoutes);



users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Rohit" },
  { id: 3, name: "Raj" },
];

app.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
