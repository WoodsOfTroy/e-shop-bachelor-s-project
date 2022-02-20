const app = require("./server/app");

const port = process.env.PORT || 8080;

// Start the app by listening on the default Heroku port
app.listen(port, () =>
  console.log(`Server has been started http://localhost:${port}`)
);
