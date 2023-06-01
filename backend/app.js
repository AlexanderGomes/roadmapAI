require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const { Connect } = require("./utils/dbConnect");
const testRoute = require("./routes/test");

testRoute(app);

app.listen(port, async () => {
  await Connect();
  console.log(`server on port ${port}`);
});
