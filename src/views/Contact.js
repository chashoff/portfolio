import React, { Component, useState } from 'react';
import ParticlesBg from 'particles-bg';
import '../styles/Contact.css';
import axios from 'axios';

function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSubmit = {
            name,
            email,
            reason,
            message
        }

        axios.post("http://localhost:5000/api/sendForm",dataToSubmit);
    }

    


    console.log(name)
    return(
        <div className="contact-container"> 
            <div style={{position: 'relative'}} >
                <div className="contact-header-container">
                    <h1 className="contact-header">Lets Connect!</h1>
                    <h6 style={{textAlign: 'center'}}>I promise I don't bite...</h6>
                </div>
                <form className="contact-form" name="contact" method="POST" onSubmit={handleSubmit}>
                    <input className="contact-input" type="text" id="name" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    <input className="contact-input" type="email" id="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input className="contact-input" type="text" id="reason" name="reason" placeholder="Reason..." value={reason} onChange={e => setReason(e.target.value)} />
                    <textarea rows="6" className="contact-input" type="message" id="message" name="message" placeholder="Your message..." value={message} onChange={e => setMessage(e.target.value)} />
                    <button className="contact-submit-btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;