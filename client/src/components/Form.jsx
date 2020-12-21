import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = ({ displayModal }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const sendEmail = (data) => {
        displayModal();
        console.log(data);
        // emailjs.send(
        //     process.env.SERVICE_ID,
        //     process.env.TEMPLATE_ID,
        //     data,
        //     process.env.USER_ID
        // );
    };
    return (
        <section className="section-book">
            <div className="row">
                <div className="book">
                    <div className="book__form">
                        <form
                            action="#"
                            className="form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                sendEmail({
                                    name,
                                    email,
                                    message,
                                });
                            }}
                        >
                            <div className="u-margin-bottom-medium">
                                <br></br>
                            </div>
                            <div className="form__group">
                                <input
                                    type="text"
                                    className="form__input"
                                    placeholder="Full Name"
                                    id="name"
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <label htmlFor="name" className="form__label">
                                    Full Name
                                </label>
                            </div>

                            <div className="form__group">
                                <input
                                    type="email"
                                    className="form__input"
                                    placeholder="Email Address"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label htmlFor="email" className="form__label">
                                    Email Address
                                </label>
                            </div>
                            {/* <div className="form__group u-margin-bottom-medium">
                                <div className="form__radio-group">
                                    <input
                                        type="radio"
                                        className="form__radio-input"
                                        id="small"
                                        name="size"
                                    />
                                    <label
                                        htmlFor="small"
                                        className="form__radio-label"
                                    >
                                        <span className="form__radio-button"></span>
                                        Solo
                                    </label>
                                </div>
                                <div className="form__radio-group">
                                    <input
                                        type="radio"
                                        className="form__radio-input"
                                        id="large"
                                        name="size"
                                    />
                                    <label
                                        htmlFor="large"
                                        className="form__radio-label"
                                    >
                                        <span className="form__radio-button"></span>
                                        Duo
                                    </label>
                                </div>
                            </div> */}
                            <label>
                                {/* <div id="form-message">&nbsp;</div> */}
                                <textarea
                                    type="text"
                                    className="contact--textarea"
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </label>

                            <div className="form__group">
                                <button className="contact__form--button">
                                    Reach Out &rarr;
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;
