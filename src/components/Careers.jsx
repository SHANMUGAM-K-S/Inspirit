import React, { useRef, useState } from "react";
import './Careers.css'; import PhoneInput from 'react-phone-number-input';
import { useForm, ValidationError } from '@formspree/react';



const Careers = () => {
    const [formData, setFormData] = useState({ email: "", phone: "", file: null });
    const [errors, setErrors] = useState({});
    const [state, handleSubmits] = useForm("mdkgaakr");
    const [value, setValue] = useState('');
    const [file, setFile] = useState(null);
    const [dragActive, setDragActive] = useState(false); const fileInputRef = useRef(null)


    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setFormData({ ...formData, file: e.target.files[0] });
    };
    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => {
        setDragActive(false);
    };


    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        if (e.dataTransfer.files.length) {
            const droppedFile = e.dataTransfer.files[0];
            setFile(droppedFile);
            setFormData({ ...formData, file: droppedFile });

            // **Manually updating the input field**
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(droppedFile);
            fileInputRef.current.files = dataTransfer.files;
        }
    };


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
                        {/* <div className="">
                            <h4>JOB Name</h4>
                            <h6>Job Exp :</h6>
                            <h6>Job Location :</h6>
                            <h6>Job Code :</h6>
                        </div> */}
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
                    <h3>Send Us a Message</h3>
                    <p>No. 24, 1st Floor,Railway Layout,
                        2nd Stage, Ullal Road,Bhavani Nagar,
                        Bangalore 560110,Karnataka,INDIA.</p>
                    <div className="hr-contact"> <h4>HR Contact :</h4>
                        <a href="">hr@inspiritengineering.com</a></div>
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
                        <PhoneInput className="sha" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}
                            placeholder="Enter phone number"
                            value={value}
                            maxLength={11}
                            onChange={setValue}
                            defaultCountry="IN"
                        />
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
                        <div className="drag-drop" onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            style={{
                                border: dragActive ? "2px solid blue" : "2px solid black",
                            }}>    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.docx,.png,.jpg" className='inp' required />
                            {file && <p style={{ marginTop: '-35px', marginLeft: '80px', fontSize: '8px', display: 'none' }}> {file.name}</p>}
                        </div>
                        <br />
                        {errors.file && <p style={{ color: "red" }}>{errors.file}</p>}
                        <br />
                        <button type="submit" disabled={state.submitting}>Submit</button>
                    </form>
                </div>

            </div>

            <div >
                <button className="buttonss" onClick={() => { document.documentElement.scrollTop = 0; }}>↑</button>
            </div>

        </div>
    )
}

export default Careers
