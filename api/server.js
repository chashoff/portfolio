const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// create express app
const app = express();

//setup body parser and cookie parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/sendForm", (req, res) => {
    console.log(req.body);

    sendForm();

})


app.listen(5000, ()=> {
    console.log("Server running at 5000.")
})
