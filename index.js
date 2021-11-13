const express = require("express");
const app = express();
const port = 3300;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/create", function (req, res) {
  res.json(req.body);
});

app.get("/test", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => console.log("listening at port" + port));
