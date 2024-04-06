const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./src/main/server/.env" });
const path = require("path");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

//route files
const appRoutes = require("./routes/approutes");
const authRoutes = require("./routes/auth");
const docRoutes = require("./routes/generateDocRoutes");

// console.log('Sanchit',process.env.MONGODB_URI)

//connect to db
connectDB();
//initialize app
const expressApp = express();
expressApp.use(express.json());
expressApp.use(cors());
//body parser
expressApp.use(bodyParser.urlencoded({ extended: false }));
expressApp.use(bodyParser.json());

expressApp.use(express.static(path.join(__dirname, "public")));

//routers
expressApp.use("/api/app", appRoutes);
expressApp.use("/api/auth", authRoutes);
expressApp.use("/api/doc", docRoutes);
expressApp.get("/api/hello", (req, res) => {
  res.send("Hello from Express!");
});

// app.listen(4000, () => {
//     console.log("server is running on 4000!")
// })
module.exports = expressApp;
