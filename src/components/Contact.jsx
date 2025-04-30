import React from 'react'
import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mdkgaakr");
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
            {/* <div className="web-dev">
                <div className="img-side">
                    <span>SHANMUGAM</span>
                </div>
                <div className="text-side">
                    <h2>WEB DEVELOPMENT</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, distinctio nostrum cumque quas minus, quo voluptates iusto fuga aperiam asperiores odit laboriosam sed ipsum impedit quia minima eum soluta cum!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae amet itaque quo eveniet! Eligendi iure ut veritatis architecto delectus, iusto atque, assumenda voluptas ratione, minus minima vero similique nisi officia?
                    </p>
                    <button>Explore More →</button>
                </div>
            </div>
            <div className="mech-des"></div> */}
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
                        <input type="tel" id='number' name='Contact-Number' maxLength="10" placeholder='Contact Number' />
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
