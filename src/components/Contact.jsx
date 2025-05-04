import React, { useState } from 'react'
import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Contact = () => {
    const [state, handleSubmit] = useForm("mdkgaakr"); const [value, setValue] = useState('');
    // const [phone, setPhone] = useState('');
    if (state.succeeded) {
        console.log("Contact Submitted")
    }
    return (
        <div >
            <div className='contac'>
                <div className="contact-page">
                    <div className="contact-us">
                        {/* <h1>Contact Us</h1> */}
                    </div>

                </div>

                <div className="contacts">
                    <div className="office">
                        <h2>Inspirit Engineering Solutions</h2>
                        <p>No. 24, 1st Floor,Railway Layout, 2nd Stage, Ullal Road,Bhavani Nagar, Bangalore 560110,Karnataka,INDIA.</p>
                        <div className="business">
                            <h4>BUSINESS CONTACT :</h4>
                            <a href="">business@inspiritengineering.com</a>
                        </div>

                    </div>
                    <div className="cnts">
                        <h1>CONTACT INFO </h1>

                        <form onSubmit={handleSubmit} action="https://formspree.io/f/mdkgaakr" method='POST'>
                            <input type="text" id='text' name='Name' placeholder='Firstname' />
                            <ValidationError
                                prefix="Text"
                                field="Name"
                                errors={state.errors}
                            />
                            <br />
                            <input type="email" id='email' name='E-mail' placeholder='EMail Address' />
                            <ValidationError
                                prefix="Email"
                                field="E-mail"
                                errors={state.errors}
                            />
                            <br />
                            <PhoneInput style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}
                                placeholder="Enter phone number"
                                value={value}
                                maxLength={11}
                                onChange={setValue}
                                defaultCountry="IN"
                            />

                            <ValidationError
                                prefix="Contact Number"
                                field="Mobile-Number"
                                errors={state.errors}
                            />
                            <br />
                            <textarea id="message"
                                name="Message" placeholder='Message'></textarea> <ValidationError
                                prefix="Message"
                                field="Message"
                                errors={state.errors}
                            />
                            <br />

                            <br />
                            <button type="submit" disabled={state.submitting}>Submit</button>

                        </form>

                    </div>

                </div>

            </div>
            <div >
                <button className="buttons" onClick={() => { document.documentElement.scrollTop = 0; }}>↑</button>
            </div>
        </div>
    )
}

export default Contact
