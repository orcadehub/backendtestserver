import express from "express";
const router = express.Router();

// database with dummy data
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", password: "john123" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", password: "jane123" },
];

router.post("/register", (req, res) => {
  res.status(201).send(users);
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  try {
    for (let u of users) {
      if (email === u.email) {
        if (password === u.password) {
          res.status(200).send("Login Successful");
        } else {
          res.status(400).send("Incorrect Password");
        }
      } else {
        res.status(400).send("User Not Found");
      }
    }
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/user/:userId", (req, res) => {
  const { userId } = req.params;
  for (let u of users) {
    if (u.id === parseFloat(id)) {
      res.send(u);
    }
  }
  res.send("Not Found");
});

export default router;
