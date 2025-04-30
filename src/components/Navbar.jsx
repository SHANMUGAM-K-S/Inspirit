// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './Nav.css';

// const Navbar = () => {
//     const [scrolled, setScrolled] = useState(false);
//     // const [menuOpen, setMenuOpen] = useState(false);
//     const navigate = useNavigate();
//     const location = useLocation();

//     function careers() {
//         navigate('/career');
//     }
//     function contact() {
//         navigate('/contact')
//     }
//     function about() {
//         navigate('/about')
//     }
//     function service() {
//         navigate('/service')
//     }
//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 0);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // const toggleMenu = () => {
//     //     setMenuOpen(!menuOpen);
//     // };

//     return (
//         <div className='solution'>
//             <div className={scrolled ? 'container-nav scrolled' : 'container-nav'}>
//                 <div>
//                     <img src="https://static.wixstatic.com/media/fbe21a_6f3f12bd11ae4ba19718ab8eed376993~mv2.webp/v1/fill/w_248,h_94,al_c,lg_1,q_80,enc_avif,quality_auto/fbe21a_6f3f12bd11ae4ba19718ab8eed376993~mv2.webp" alt="Logo" />
//                 </div>
//                 {/* <button className="hamburger" onClick={toggleMenu}>
//                     <div className="line"></div>
//                     <div className="line"></div>
//                     <div className="line"></div>
//                 </button> */}
//                 <div className={`containersss `}>
//                     <div className="lists">
//                         <ul>
//                             {location.pathname !== "/" && <li><a href="/">Home</a></li>}
//                             {location.pathname !== "/service" && <li><a href="#" onClick={service}>Services</a></li>}
//                             {location.pathname !== "/career" && <li><a href="#" onClick={careers}>Careers</a></li>}
//                             {location.pathname !== "/about" && <li><a href="#" onClick={about}>About</a></li>}
//                             {location.pathname !== "/contact" && (<li><a href="#" onClick={contact}>Contact</a></li>)}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// function home() {
//     navigate('/')
// }
// function service() {
//     navigate('/service')
// }
// function career() {
//     navigate('/career')
// }
// // function about() {
// //     navigate('/about')
// // }
// function contact() {
//     navigate('/contact')
// }
// export default Navbar;


import React, { useState, useEffect, useRef } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    const navRef = useRef(null);

    const handleClick = () => {
        setClicked(!clicked);
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
    };
    // function home() {
    //     navigate('/')
    // }
    // function service() {
    //     navigate('/service')
    // }
    // function career() {
    //     navigate('/career')
    // }
    // // function about() {
    // //     navigate('/about')
    // // }
    // function contact() {
    //     navigate('/contact')
    // }
    return (
        <nav ref={navRef}>
            <img
                src="https://static.wixstatic.com/media/fbe21a_6f3f12bd11ae4ba19718ab8eed376993~mv2.webp/v1/fill/w_248,h_94,al_c,lg_1,q_80,enc_avif,quality_auto/fbe21a_6f3f12bd11ae4ba19718ab8eed376993~mv2.webp"
                alt="Logo"
            />

            <div className={clicked ? "nav-menu active" : "nav-menu"}>
                <ul id="navbar" className={clicked ? "navbar active" : "navbar"}>
                    {location.pathname !== "/" && <li><a onClick={() => handleNavigation("/")} href="#">Home</a></li>}
                    {location.pathname !== "/service" && <li><a href="#" onClick={() => handleNavigation("/service")}>Services</a></li>}
                    {location.pathname !== "/career" && <li><a href="#" onClick={() => handleNavigation("/career")}>Careers</a></li>}
                    {/* <li><a href="/about" onClick={() => setClicked(false)}>About</a></li> */}
                    {location.pathname !== "/contact" && (<li><a href="#" onClick={() => handleNavigation("/contact")}>Contact</a></li>)}
                </ul>
            </div>

            <div id="mobile" onClick={handleClick}>
                <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </nav>
    );
};

export default Navbar;
