const Sequelize = require("sequelize");

const DB_NAME = "desafio_final";
const DB_USER = "root";
const DB_PASS = "12345678";
const DB_CONFIG = {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  define: {
    timestamps: false,
  },
};

let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Erro ao se conctar com o banco de dados");
}

async function hasConection() {
  try {
    await db.authenticate();
    console.log("Banco de dados conectado");
  } catch (error) {
    console.error("Erro na autenticação com o banco");
  }
}

Object.assign(db, { hasConection });

module.exports = db;
