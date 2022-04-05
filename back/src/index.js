require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./database/connection");
const routers = require("./routes");
const handleError = require("./middlewares/handleError");

app.use(express.json());
app.use(cors({
      origin: process.env.CORS,
}))
app.use(routers);
db.hasConection();
app.use(handleError);

app.listen(process.env.PORT || 5000, () => {
  console.log("Servidor rodando");
});
