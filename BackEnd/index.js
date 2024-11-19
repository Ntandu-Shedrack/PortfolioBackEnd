const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/user.route.js");
const awardRoute = require("./routes/award.route.js");
const educationRoute = require("./routes/education.route.js");
const experienceRoute = require("./routes/experience.route.js");
const interestRoute = require("./routes/interest.route.js");
const languageRoute = require("./routes/language.route.js");
const objectiveRoute = require("./routes/objective.route.js");
const personalDetailRoute = require("./routes/personalDetail.route.js");
const projectRoute = require("./routes/project.route.js");
const publicationRoute = require("./routes/publication.route.js");
const referenceRoute = require("./routes/reference.route.js");
const skillRoute = require("./routes/skill.route.js");
const serviceRoute = require("./routes/service.route.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoute);
app.use("/api/awards", awardRoute);
app.use("/api/educations", educationRoute);
app.use("/api/experiences", experienceRoute);
app.use("/api/interests", interestRoute);
app.use("/api/languages", languageRoute);
app.use("/api/objectives", objectiveRoute);
app.use("/api/personalDetails", personalDetailRoute);
app.use("/api/projects", projectRoute);
app.use("/api/publications", publicationRoute);
app.use("/api/references", referenceRoute);
app.use("/api/skills", skillRoute);
app.use("/api/services", serviceRoute);

app.get("/", (req, res) => {
  res.send("HELLO! Portifolio Server is Running");
});

mongoose
  .connect(
    "mongodb+srv://josantashedrack:OYecT9mZ32ojh7Af@back-end.tywzftt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Back-End"
  )
  .then(() => {
    // console.log("Connected to database");
    app.listen(3000, () => {
      // console.log("Hello there, server is running");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
