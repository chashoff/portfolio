"use strict";
const mailer = require("nodemailer");
const { Hello } = require("../templates/hello_template");
const { Thanks } = require("../templates/thanks_template");
const getEmailData = ( to, name, template ) => {
    let data = null;

    switch(template) {
        case "hello":
            data = {
                from : "Chase Hoffman <lovast.management@gmail.com>",
                to,
                subject : `Hello, ${name}!`,
                html: Hello()
            }
            break;
        case "thankyou":
            data = {
                from : "Chase Hoffman <lovast.management@gmail.com>",
                to,
                subject : `Hello, ${name}!`,
                html: Thanks()
            }
            break;
        default:
            data;
    }
    return data;
}

const sendForm = (to, name, type ) => {
    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "lovast.management@gmail.com",
            pass: "Zxg-4988"
        }
    })

    const mail = getEmailData(to, name, type)

    smtpTransport.sendMail(mail, function(error, response){
        if(error) {
            console.log(error)
        } else {
            console.log( "Email sent successfully!")
        }
        smtpTransport.close();
    })
}

module.exports = { sendForm };