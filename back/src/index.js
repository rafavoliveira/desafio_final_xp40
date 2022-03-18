const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./database/connection");
const routers = require("./routes");
const handleError = require("./middlewares/handleError");

app.use(express.json());
app.use(cors({
      origin: "http://localhost:3000",
}))
app.use(routers);
db.hasConection();
app.use(handleError);

app.listen(5000, () => {
  console.log("Servidor rodando");
});
