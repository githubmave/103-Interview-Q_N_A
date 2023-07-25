const express = require('express');
const cors = require("cors");
const axios = require('axios');
// const cors = require("cors");

const app=express();
app.use(express.json());
app.use(cors());

app.post("/events",async (req, res) => {
  const {type,data} = req.body;


  res.send({});
});


app.listen(4003,() => {
  console.log("Listening on port 4003");
});


