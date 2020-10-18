const express = require("express");
const mysql = require('mysql');
const util = require('util');
const app = express();

const rutas = require("./rutas");

app.use(express.urlencoded({ extended: false })); // restringir archivos a string
app.use(express.json());

app.use(rutas);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
