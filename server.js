// require express
const express = require("express");
// instance of express
const app = express();
app.use(express.json());

//midlware
const time = require("./middleware/time");

// Create server
const port = 5000;
app.listen(port, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running on port ${port}..`);
});
// Simple Route
app.get("/", (req, res) => {
  res.send("Good morning");
  console.table({ method: req.method, path: req.path });
});

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/views/home", time, function (req, res) {
  res.render("home");
});

app.get("/views/services", time, function (req, res) {
  res.render("services");
});
app.get("/views/contact", time, function (req, res) {
  res.render("contact");
});
