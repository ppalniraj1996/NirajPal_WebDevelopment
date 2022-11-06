const express = require("express");
const mongoose = require("mongoose");
const app = express();
const server = require("http").Server(app);
const dotenv = require("dotenv").config();
const { ClassRoomRouter } = require("../server/routes/ClassRoom.Routes");
const { RegistrationRouter } = require("../server/routes/Registration.Routes");
const { AllocationRouter } = require("../server/routes/Allocation.Routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => res.status(200).send("app is working fine"));
app.use("/", ClassRoomRouter);
app.use("/", RegistrationRouter);
app.use("/", AllocationRouter);

const MongoDb = process.env.MongoDb;
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  mongoose
    .connect(MongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection established successfully.");
    })
    .catch((err) => {
      console.log(err, "Failed to establish connection to server.");
    });
  console.log("server working http://localhost:8080/");
});
