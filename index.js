const express = require("express");
// enable cors & json before set up routes
const cors = require("cors");
const sequelize = require("./config/database");
const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

app.listen(8000, async () => {
  try {
    await sequelize.authenticate();
    // Start the server on port 8000
    console.log("DB connected.. API running at http://localhost:8000");
  } catch (e) {
    console.error(e);
  }
});
