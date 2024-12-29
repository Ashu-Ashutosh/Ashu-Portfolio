const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const path = require("path");
app.use(express.json());

const port = process.env.PORT || 5000;
const portfolioRoute = require("./routes/portfolioRoute");

// const _dirname = path.resolve();


app.use("/api/portfolio", portfolioRoute);

app.use(express.static(path.join(__dirname,"/client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
