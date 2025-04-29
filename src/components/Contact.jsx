import React from 'react'
import './Contact.css'


const Contact = () => {
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

                    <form action="" >
                        <input type="text" placeholder='Firstname' />
                        <br />
                        <input type="email" placeholder='EMail Address' />
                        <br />
                        <input type="tel" maxLength="10" placeholder='Contact Number' />
                        <br />
                        <textarea placeholder='Message'></textarea>
                        <br />

                        <br />
                        <button>Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact
