const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./database/connection");
const routers = require("./routes");

app.use(express.json());
app.use(routers);
db.hasConection();
app.use(cors);

app.listen(4000, () =>{
    console.log("Servidor rodando");
});
