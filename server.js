const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let messages = [];

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.post("/messages", (req, res) => {
  const incoming = req.body;
  messages.push({ name: incoming.name, message: incoming.message });
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
