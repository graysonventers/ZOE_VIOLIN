import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from '@reach/router';
import scroll from './ScrollOptions.js';
import Links from './Links.jsx';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const sendEmail = (data) => {
        emailjs.send(
            process.env.SERVICE_ID,
            process.env.TEMPLATE_ID,
            data,
            process.env.USER_ID
        );
    };
    return (
        <section className="contact">
            <div className="contact-wrapper">
                <h1>GET IN TOUCH</h1>
                <br></br>
                <div id="contact" className="contact-form">
                    <form>
                        <br></br>
                        <label>
                            NAME:
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </label>
                        <label>
                            E-MAIL:
                            <input
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </label>

                        <label>
                            MESSAGE:
                            <br></br>
                            <textarea
                                type="text"
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </label>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                sendEmail({
                                    name,
                                    email,
                                    message,
                                });
                            }}
                        >
                            <Link to="/" onClick={() => scroll.top()}>
                                SUBMIT
                            </Link>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
