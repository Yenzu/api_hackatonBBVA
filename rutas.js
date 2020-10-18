const express = require("express");
const mysql = require('mysql');
const util = require('util');
const router = express.Router();

function castField(field, useDefaultTypeCasting) {
    if ((field.type === "BIT") && (field.length === 1)) {
        var bytes = field.buffer();
        if (bytes != null)
            return (bytes[0] === 1);
        else
            return false;
    }
    return (useDefaultTypeCasting());
}

const baseDatos = {
    host: process.env.DB_IP || "remotemysql.com",
    port: process.env.DB_PORT || "3306",
    user: "82UZLCNGgY",
    password: "Y1iy8wbhVb",
    database: process.env.DB_NAME || "82UZLCNGgY",
    charset: "utf8mb4", //COLLATION
    typeCast: castField, // determina si los valores de una columna deben convertirse a tipos de JavaScript.
  };
let pool = mysql.createPool(baseDatos);
pool.query = util.promisify(pool.query);//se podrá utilizar métodos async/await


router.get("/", (req, res) => {
  res.send("Hello World");
});


router.post("/api/user", async (req, res) => { 
  const user = req.body;
  try{
    let newUser = await pool.query(
        `INSERT INTO usuario ( RUC, pass, email, celular )
        VALUES
        (?,?,?,?,?)`,
        [user.RUC, user.pass, user.email, user.celular, user.motivo]
      );
      res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json(err.message)
  }  
});

module.exports = router;
