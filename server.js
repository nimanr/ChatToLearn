const express = require("express");

const port = 3000;
const app = express();

app.use(express.static(__dirname));

let messages = [
  { name: "nima", message: "hello" },
  { name: "nima", message: "hollo everyone" },
];

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
