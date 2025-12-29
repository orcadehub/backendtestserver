import express from "express";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("My Api is Working!");
});

const users = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 24,
    gender: "Male",
    email: "rahul.sharma@example.com",
    phone: "+91 9876543210",
    profilePic: "https://picsum.photos/seed/user1/200/200",
  },
  {
    id: 2,
    name: "Rohit Verma",
    age: 27,
    gender: "Male",
    email: "rohit.verma@example.com",
    phone: "+91 9876543211",
    profilePic: "https://picsum.photos/seed/user2/200/200",
  },
  {
    id: 3,
    name: "Anjali Reddy",
    age: 23,
    gender: "Female",
    email: "anjali.reddy@example.com",
    phone: "+91 9876543212",
    profilePic: "https://picsum.photos/seed/user3/200/200",
  },
  {
    id: 4,
    name: "Suresh Kumar",
    age: 30,
    gender: "Male",
    email: "suresh.kumar@example.com",
    phone: "+91 9876543213",
    profilePic: "https://picsum.photos/seed/user4/200/200",
  },
  {
    id: 5,
    name: "Priya Singh",
    age: 26,
    gender: "Female",
    email: "priya.singh@example.com",
    phone: "+91 9876543214",
    profilePic: "https://picsum.photos/seed/user5/200/200",
  },
  {
    id: 6,
    name: "Karthik Rao",
    age: 28,
    gender: "Male",
    email: "karthik.rao@example.com",
    phone: "+91 9876543215",
    profilePic: "https://picsum.photos/seed/user6/200/200",
  },
  {
    id: 7,
    name: "Neha Gupta",
    age: 25,
    gender: "Female",
    email: "neha.gupta@example.com",
    phone: "+91 9876543216",
    profilePic: "https://picsum.photos/seed/user7/200/200",
  },
  {
    id: 8,
    name: "Amit Patel",
    age: 32,
    gender: "Male",
    email: "amit.patel@example.com",
    phone: "+91 9876543217",
    profilePic: "https://picsum.photos/seed/user8/200/200",
  },
  {
    id: 9,
    name: "Sneha Iyer",
    age: 22,
    gender: "Female",
    email: "sneha.iyer@example.com",
    phone: "+91 9876543218",
    profilePic: "https://picsum.photos/seed/user9/200/200",
  },
  {
    id: 10,
    name: "Vikas Mehta",
    age: 29,
    gender: "Male",
    email: "vikas.mehta@example.com",
    phone: "+91 9876543219",
    profilePic: "https://picsum.photos/seed/user10/200/200",
  },
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

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
