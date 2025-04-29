import React, { useEffect, useRef, useState } from "react";
import "./Sec2.css";
import Footer from "./Footer";

const Section2 = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const engineerRefTop = useRef(null);
    const engineerRefBottom = useRef(null);
    const [isBlasted, setIsBlasted] = useState(false);

    const handleBlast = () => {
        setIsBlasted(true);
        setTimeout(() => {
            setIsBlasted(false);
        }, 1000);
    };
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

        const textElement = textRef.current;
        const imageElement = imageRef.current;
        const engineerElementTop = engineerRefTop.current;
        const engineerElementBottom = engineerRefBottom.current;


        if (textElement) observer.observe(textElement);
        if (imageElement) observer.observe(imageElement);
        if (engineerElementTop) observer.observe(engineerElementTop);
        if (engineerElementBottom) observer.observe(engineerElementBottom);



        return () => {
            if (textElement) observer.unobserve(textElement);
            if (imageElement) observer.unobserve(imageElement);
            if (engineerElementTop) observer.unobserve(engineerElementTop);
            if (engineerElementBottom) observer.unobserve(engineerElementBottom);

        };
    }, []);

    return (
        <div>

            <div className="intro">
                <div className="heading">
                    <h1>Inspirit Engineering Solutions</h1>
                </div>
            </div>
            <div className="texts">
                <h1 className={`text-image-mask ${isBlasted ? "blast" : ""}`}
                    onClick={handleBlast}>INSPIRIT ENGINEERING SOLUTIONS</h1>
            </div>
            <div className="shanmugam">
                <div className="text-section" ref={textRef}>
                    <h3>About Inspirit</h3>
                    <p className="design">
                        <strong>Inspirit Engineering Solutions (INSPIRIT)</strong> is an enterprising
                        <span> Manufacturing</span> Engineering Services com<span>pany, located in Bang</span>alore, <span>In</span>dia.  INSPIRIT hoard<span>s highly skilled and</span> experienced engineer to <span>creativ</span>ely <span>design and</span> provide various solu<span>tions for Industries </span>in the field of Mecha<span>nical Design, Developm</span>ent of New Product & Man<span>ufacturing se</span>rvices across the globe.
                    </p>
                    <p className="coding">
                        INSPIRIT offers unmatched capabilities and services in a single window for End to End solutions in Engineering Design using CAD/CAM/CAE PLM & Robotic Simulation software.
                    </p>
                    <p>
                        We are committed to providing our clients with high-quality engineering services that meet their specific needs and requirements. Our team is dedicated to delivering innovative and cost-effective solutions to help our clients achieve their goals.
                    </p>
                </div>
                <div className="image-section" ref={imageRef}>
                    <div className="in"></div>
                </div>
            </div>

            <div className="service">

                <div className="">
                    <h2>WE Provide :</h2>
                </div>
                <div className="images">
                    <div className="img1">
                        <img src="https://www.pngplay.com/wp-content/uploads/13/Web-Designing-Transparent-Images.png" alt="" />
                        <h3>WEB DEVELOPMENT</h3>
                        <p>We have a team of highly skilled and experienced engineers who are passionate about delivering exceptional services to our clients.</p>
                    </div>
                    <div className="img2">
                        <img src="https://media.istockphoto.com/id/182154020/photo/car-and-chassis-x-ray-blueprint.jpg?s=612x612&w=0&k=20&c=bunfXaUkFfok5KxBnhNEz56lz_6i1OzYfvwBeqKs3L0=" alt="" />
                        <h3>MECH DESIGN</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sunt maiores, ducimus asperiores reiciendis nulla quasi impedit consequatur incidunt eaque suscipit aliquam sequi exercitationem! Accusamus amet commodi velit incidunt explicabo?</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Section2;
