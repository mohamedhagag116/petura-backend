const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./middlewares/error.middleware");
const homeRoutes = require("./routes/home.routes");
const petRoutes = require("./routes/pet.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use(errorHandler);
app.use("/api/home", homeRoutes);
app.use("/api/pets", petRoutes);
app.use("/uploads", express.static("uploads"));


app.get("/", (req, res) => {
  res.send("API running...");
});

module.exports = app;
