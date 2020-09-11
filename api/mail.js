"use strict";
const mailer = require("nodemailer");
const { Hello } = require("../templates/hello_template");
const { Thanks } = require("../templates/thanks_template");
const getEmailData = (to, name, email, reason, message, template ) => {
    let data = null;
    switch(template) {
        case "hello":
            data = {
                from : "Chase Hoffman <lovast.management@gmail.com>",
                to,
                subject : `Portfolio Notication From ${name}`,
                html: `
                <div style="background-color:#ebedf0;">
                    <div style="background-color:#abffc1;padding:.5rem;">
                        <h2 style="text-align:center;color: darkgrey;">Portfolio<br />Form Submission!</h2>
                    </div>
                    <div style="padding:.5em;display:flex;flex-direction:column;">
                        <div style="display:inline;width:100%;text-align:center;">
                            <h4>Name:</h4>
                            <p>${name}</p>
                        <div>
                        <div style="display:inline;width:100%;">
                            <h4>Email:</h4>
                            <p>${email}</p>
                        </div>
                        <div style="display:inline;width:100%;">
                            <h4>Reason:</h4>
                            <p>${reason}</p>
                        </div>
                        <div style="display:inline;width:100%;">
                            <h4>Message:</h4>
                            <p>${message}</p>
                        </div>
                    </div>
                </div>`
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

const sendForm = ( to, name, email, reason, message, template ) => {
    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "lovast.management@gmail.com",
            pass: "Zxg-4988"
        }
    })

    const mail = getEmailData(to, name, email, reason, message, template)

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