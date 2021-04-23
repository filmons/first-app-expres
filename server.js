
const express = require('express')
const app = express()
const ejs = require('ejs');

const cookieParser = require('cookie-parser');
const router = require("./src/routers");

app.engine("ejs", ejs.renderFile);
app.set("views", "./src/views");
app.use(express.static("./src/public"));

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(router);

const port = 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



