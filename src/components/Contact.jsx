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
        <div className='contac'>
            <div className="contact-page">
                <div className="contact-us">
                    <h1>Contact Us</h1>
                </div>

            </div>

            <div className="contacts">
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
                        <PhoneInput className='phone'
                            placeholder="Enter phone number"
                            value={value}
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
    )
}

export default Contact
