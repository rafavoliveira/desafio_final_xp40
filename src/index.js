const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const port = process.env.PORT || 3000;
const db = require("./database/connection");

const app = express();
db.hasConection();
app.use(cors);
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log("Server running..."));
