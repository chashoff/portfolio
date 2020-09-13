import React, { useState } from 'react';
import '../styles/Contact.css';
import axios from '../../node_modules/axios';

function Contact(){
    const [btnText, setBtn] = useState('Submit');
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
        axios.post("http://localhost:4000/api/sendForm", {
            dataToSubmit
        })
        .then((res) => {
            if(res.status === 200) {
                setBtn('Form Submitted!');
            }
        }, (error) => {
            console.log(error);
            setBtn('Submission Failed...');
        });
    }
    
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
                    <button className="contact-submit-btn" type="submit">{btnText}</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;