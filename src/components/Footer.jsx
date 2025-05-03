// import { useForm, ValidationError } from '@formspree/react';

// import React, { useEffect, useRef } from "react";
// import './Footer.css'
// import { useNavigate } from "react-router-dom";
// const Footer = () => {
//     const footerRef = useRef(null);
//     const navigate = useNavigate()
//     const [state, handleSubmit] = useForm("mdkgaakr");

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add("in-view");
//                     } else {
//                         entry.target.classList.remove("in-view");
//                     }
//                 });
//             },
//             { threshold: 0.1 }
//         );


//         const footerElement = footerRef.current;


//         if (footerElement) observer.observe(footerElement);


//         return () => {

//             if (footerElement) observer.unobserve(footerElement);
//         };
//     }, []);

//     if (state.succeeded) {
//         console.log("Submitted")
//     }

//     function home() {
//         navigate('/')
//     }
//     function service() {
//         navigate('/service')
//     }
//     function about() {
//         navigate('/about')
//     }
//     function contact() {
//         navigate('/contact')
//     }
//     return (
//         <div>
//             <div className="footer" ref={footerRef}>
//                 <footer>
//                     <div className="f1">
//                         <h3>@ INSPIRIT ENGINEERING SOLUTIONS</h3>
//                         <p>We have a team of highly skilled and experienced engineers who are passionate about delivering exceptional services to our clients.</p>
//                     </div>
//                     <div className="f2">
//                         <h2>OFFICE :</h2>
//                         <p>No. 24, 1st Floor, Railway Layout, <br /> 2nd Stage, Ullal Road,<br /> Bhavani Nagar,<br /> Bangalore 560110,<br /> Karnataka,  INDIA.</p>
//                     </div>
//                     <div className="f3">
//                         <ul>
//                             <h2>LINKS :</h2>
//                             <li><a href="#" onClick={home}>Home</a></li>
//                             <li><a href="#" onClick={service}>Services</a></li>
//                             <li><a href="#" onClick={about}>About Us</a></li>
//                             <li><a href="#" onClick={contact}>Contact Us</a></li>
//                         </ul>
//                     </div>
//                     <div className="f4">
//                         <h3>Know Us :</h3>
//                         <form action="https://formspree.io/f/mdkgaakr" onSubmit={handleSubmit} method="POST">
//                             <input id="email"
//                                 type="email"
//                                 name="email" placeholder="Enter email" /><ValidationError
//                                 prefix="Email"
//                                 field="email"
//                                 errors={state.errors}
//                             />

//                             <button type="submit" disabled={state.submitting}>Send</button>
//                         </form>

//                         <br />
//                         <i className="fab fa-linkedin-in"></i>
//                     </div>
//                 </footer>
//                 <hr />
//                 <div className="f5">
//                     <h2>© Inspirit Engineering Solutions</h2>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer
import { ValidationError } from '@formspree/react';

import React, { useEffect, useRef } from "react";
import './Footer.css'
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const footerRef = useRef(null);
    const navigate = useNavigate()


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    } else {
                        entry.target.classList.remove("in-view");
                    }
                });
            },
            { threshold: 0.1 }
        );


        const footerElement = footerRef.current;


        if (footerElement) observer.observe(footerElement);


        return () => {

            if (footerElement) observer.unobserve(footerElement);
        };
    }, []);



    function home() {
        navigate('/')
    }
    function service() {
        navigate('/service')
    }
    function career() {
        navigate('/career')
    }
    function contact() {
        navigate('/contact')
    }
    function linkedin() {
        window.location.href = "https://www.linkedin.com/company/inspirit-engineering-solutions/?originalSubdomain=in"
    }
    return (
        <div className='foot'>
            <div className="footer" ref={footerRef}>


                <div className="f2">
                    <h2>OFFICE :</h2>
                    <p>No. 24, 1st Floor,Railway Layout,<br />  2nd Stage, Ullal Road,Bhavani Nagar,<br /> Bangalore 560110,Karnataka,INDIA.</p>
                </div>

                <div className="f3">
                    <ul>

                        <li><a href="#" onClick={home}>Home</a></li>
                        <li><a href="#" onClick={service}>Services</a></li>
                        <li><a href="#" onClick={career}>Careers</a></li>
                        <li><a href="#" onClick={contact}>Contact Us</a></li>
                    </ul>
                </div>
                <div className="f6">
                    <h2>Follow Us :</h2>
                    <i className="fab fa-linkedin-in" onClick={linkedin}></i>
                    <i className="fab fa-linkedin-in" onClick={linkedin}></i>
                </div>


            </div>
            <hr />
            <div className="f5">
                <h2>Copyright © 2024 Inspirit - All Rights Reserved.</h2>
            </div>
        </div>
    )
}

export default Footer