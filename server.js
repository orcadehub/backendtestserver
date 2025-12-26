import express from "express";
import TestRoutes from './routes/test_route.js'
const app = express();
app.use(express.json());
app.use(TestRoutes)

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});



