import React from "react";
import './ServicesHomePage.css'
import { useNavigate } from "react-router-dom";


function ServiceHomePage() {

    const navigate = useNavigate()

    function handleClick1() {
        navigate('/MechanicalServices')
    }

    function handleClick2() {
        navigate('/SoftwareServices')
    }

    return (
        <>
            <div className="container2">
                <div className="btn1">
                    <button onClick={handleClick1}>Mechanical Services</button>
                </div>
                <div className="btn2">

                    <button onClick={handleClick2}>Software Services</button>
                </div>
            </div>
        </>
    )
}

export default ServiceHomePage