const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const app = express();
dotenv.config();

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("DB connect success");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
// app.use("/api/user", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("server is started at port 5000");
});
