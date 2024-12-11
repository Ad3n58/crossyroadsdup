/* 
* Dayanara Cabrera and Aden Garcia
* Email: dac526@lehigh.edu and aag226@lehigh.edu
* CSE 264 - 011 
* Final Project
* Objective: to be continued ...
* Description: to be continued ...   
*/
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(
  path.resolve(__dirname, "public")
));

app.listen(3000, () => console.log("Starting up Crossy Roads"));


