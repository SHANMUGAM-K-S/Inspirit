import React, { useState } from "react";
import './Careers.css'
import { useForm, ValidationError } from '@formspree/react';



const Careers = () => {
    const [formData, setFormData] = useState({ email: "", phone: "", file: null });
    const [errors, setErrors] = useState({});
    const [state, handleSubmits] = useForm("mdkgaakr");
    if (state.succeeded) {
        console.log("Career")
    }
    const validateForm = () => {
        let newErrors = {};

        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email!";
        if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be 10 digits!";
        if (!formData.file || !['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(formData.file.type))
            newErrors.file = "Only PDF or DOCX files allowed!";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleSubmits(e);
        }
    };

    return (
        <div>

            <div className="sec">

                <div className="text1">


                </div>

            </div>
            <div className="career">


                <h3>Job Opportunities</h3>
                <div className="c1">
                    <div className="">
                        <div className="">
                            <h4>JOB Name</h4>
                            <h6>Job Exp :</h6>
                            <h6>Job Location :</h6>
                            <h6>Job Code :</h6>
                        </div>
                        <div className="">
                            <h4>JOB Name </h4>
                            <h6>Job Exp :</h6>
                            <h6>Job Location :</h6>
                            <h6>Job Code :</h6>
                        </div>
                        <div className="">
                            <h4>JOB Name</h4>
                            <h6>Job Exp :</h6>
                            <h6>Job Location :</h6>
                            <h6>Job Code :</h6>
                        </div>
                    </div>
                    <div className="h5">
                        <div className="">
                            <h5>Images</h5>
                            <h5>Images</h5>
                            <h5>Images</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="seconds">

                <div className="text1">
                    .
                </div>
                <div className="cnt">
                    <h1>CONTACT US </h1>

                    <form onSubmit={handleSubmit} action="https://formspree.io/f/mdkgaakr" method="POST">
                        <input type="text" id="text" name="Name" placeholder='Firstname' />
                        <ValidationError
                            prefix="text"
                            field="text"
                            errors={state.errors}
                        />
                        <br />
                        <input type="email" id="email" name="EMail" onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder='EMail Address' required />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                        <br />
                        <input type="tel" id="number" pattern="\d{10}" maxLength="10" inputMode="numeric" name="ContactNumber" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder='Contact Number' required min="1000000000" max="9999999999" />
                        <ValidationError
                            prefix="number"
                            field="number"
                            errors={state.errors}
                        />
                        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
                        <br />
                        <textarea id="message"
                            name="Message" placeholder='Message' ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <br />
                        <label >Resume Upload</label><br />
                        <input type="file" onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })} accept=".pdf,.docx" className='inp' required />
                        {/* <ValidationError
                            prefix="Resume"
                            field="Resume"
                            errors={state.errors}
                        /> */}
                        {errors.file && <p style={{ color: "red" }}>{errors.file}</p>}
                        <br />
                        <button type="submit" disabled={state.submitting}>Submit</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Careers
