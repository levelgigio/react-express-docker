const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT;

app.use(cors());

app.get("/api/mensagem", (req, res) => {
  res.send({ express: "mano?" });
  console.log("oi");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
