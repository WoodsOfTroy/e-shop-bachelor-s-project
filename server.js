function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get("x-forwarded-proto") !== "https") {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}
const express = require("express");
const http = require("http");
const path = require("path");
const compression = require("compression");

const app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, "dist/e-shop-bachelor-project")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/e-shop-bachelor-project/index.html"));
});

const port = process.env.PORT || 3000;
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => console.log("running"));
