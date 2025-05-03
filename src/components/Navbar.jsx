
import React, { useState, useEffect, useRef } from "react";
import "./Nav.css"; import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    const navRef = useRef(null);
    const location = useLocation();

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Django.pdf";
        link.download = "Catalogue.pdf"; // Sets the downloaded file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setClicked(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
    const handleNavigation = (path) => {
        navigate(path);
        setClicked(false);
        setTimeout(() => {
            document.documentElement.scrollTop = 0;
        }, 100);
    };

    const styles = {
        fontSize: '14px',
        whiteSpace: 'nowrap'
    }
    const style = {
        fontSize: '12px', whiteSpace: 'nowrap', margin: '-30px', color: 'gray',
    }
    return (
        <nav ref={navRef}>
            <img
                src="https://static.wixstatic.com/media/fbe21a_6f3f12bd11ae4ba19718ab8eed376993~mv2.webp/v1/fill/w_248,h_94,al_c,lg_1,q_80,enc_avif,quality_auto/fbe21a_6f3f12bd11ae4ba19718ab8eed376993~mv2.webp"
                alt="Logo" onClick={() => handleNavigation("/")}
            />

            <div className={clicked ? "nav-menu active" : "nav-menu"}>
                <ul id="navbar" className={clicked ? "navbar active" : "navbar"}>
                    {location.pathname !== "/" && <li><a onClick={() => handleNavigation("/")}>Home</a></li>}
                    <li className="dropdown">
                        <a href="#" onClick={() => handleNavigation('/service')} >Services</a>
                        <ul className="dropdown-menu ">
                            <li className="dropdowns"><a style={styles} onClick={() => handleNavigation("/MechanicalServices")}>Mechanical Services</a>
                                <hr />
                                <ul className="dropdown-menus">
                                    <li><a href="#" onClick={() => handleNavigation("/AutomotiveServices")} style={{ fontSize: '12px', whiteSpace: 'nowrap', margin: '-30px', }}>Automotive</a></li>
                                    <li><a href="#" style={style}>Automation</a></li>
                                    <li><a href="#" style={style}>CAD Services</a></li>
                                    <li><a href="#" style={style}>Manufacturing</a></li>
                                    <li><a href="#" style={style}>System integration</a></li>
                                    <li><a href="#" style={style}>Special Purpose Machines</a></li>
                                    <li><a href="#" style={style}>Pneaumatics</a></li>
                                </ul>
                            </li>
                            <li className="software"><a style={styles} onClick={() => handleNavigation("/SoftwareServices")}>Software Services</a>
                                <hr />

                                <ul className="softwares">
                                    <li><a href="#" style={style}>Web Development</a></li>
                                    <li><a href="#" style={style}>Software Services</a></li>

                                </ul>
                            </li>

                        </ul>
                    </li>
                    <li><a href="#" onClick={handleDownload} download >Catalogues</a></li>
                    <li><a onClick={() => handleNavigation("/career")}>Careers</a></li>

                    <li><a onClick={() => handleNavigation("/contact")}>Contact</a></li>
                </ul>
            </div>

            <div id="mobile" onClick={handleClick}>
                <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </nav>
    );
};

export default Navbar;
