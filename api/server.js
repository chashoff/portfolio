const express = require('express');
const cors = require('cors');
const { sendForm } = require('../api/mail');

// create express app
const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.post("/api/sendForm", (req, res) => { 
    const email = "lovast.management@gmail.com";
    console.log(req.body);
    sendForm("chas.hoff@protonmail.com", req.body.name, req.body.email, req.body.reason, req.body.message, "hello");

})

app.listen(4000, ()=> {
    console.log("Server running at 4000.")
})
