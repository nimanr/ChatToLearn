const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let messages = [];

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.post("/messages", (req, res) => {
  const incoming = req.body;
  io.emit("message", req.body);
  messages.push({ name: incoming.name, message: incoming.message });
  res.sendStatus(200);
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

http.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
