const express = require('express');
const axios=require('axios');
const cors = require("cors");
// import express from "express";
// import axios from "axios";

const app=express();
app.use(express.json());
app.use(cors());

const events=[];

app.post("/events",(req, res) =>{
  const event = req.body;
  events.push(event);

  axios.post("http://localhost:4000/events",event)
       .catch((error)=>{console.log(error);
  });

//   axios.post("http://localhost:4001/events",event)
//        .catch((error)=>{console.log(error.message);
// });

  axios.post("http://localhost:4002/events",event)
       .catch((error)=>{console.log(error.message);
});

  axios.post("http://localhost:4003/events",event)
       .catch(()=>{console.log(error.message);
});

});

app.get("/events", (req,res)=>{
  res.send(events);
});



app.listen(4005,()=>{
  console.log("Listening on port 4005");
});



