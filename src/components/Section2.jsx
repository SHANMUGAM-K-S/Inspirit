import React, { useEffect, useRef, useState } from "react";
import "./Sec2.css";


const Section2 = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const engineerRefTop = useRef(null);
    const engineerRefBottom = useRef(null);
    const [isBlasted, setIsBlasted] = useState(false); const [visible, setVisible] = useState(false);

    const handleBlast = () => {
        setIsBlasted(true);
        setTimeout(() => {
            setIsBlasted(false);
        }, 1000);
    };
    useEffect(() => {
        setVisible(true);
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
        <div className={visible ? "page-enter-active" : "page-enter"}>

            <div className="intro">
                <div className="heading">

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
                <div className="image-section">
                    <div className="in">
                        <img src="https://static.wixstatic.com/media/fbe21a_c2ae7ce41f9e47519e6fdfb7e732fb43~mv2.jpeg/v1/crop/x_137,y_0,w_2698,h_3584/fill/w_808,h_1074,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/vecteezy_robotic-arms-in-a-car-plant-at-line-factory-generative-ai_30603394.jpeg" alt="image" />
                    </div>
                </div>
            </div>

            {/* <div className="service">

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
            </div> */}
            <div className="our-team">
                <div className="about-team">
                    <div className="team">
                        <h1>Our Team</h1>
                        <p>Our team is a group of passionate professionals dedicated to delivering innovative and reliable engineering solutions.</p>
                    </div>
                    <div className="experts">
                        <div className="expertise">
                            <img src="https://static.wixstatic.com/media/fbe21a_87df13c5cebe497b86dc816b74a73270~mv2.webp/v1/fill/w_628,h_359,al_c,lg_1,q_80,enc_avif,quality_auto/fbe21a_87df13c5cebe497b86dc816b74a73270~mv2.webp" alt="" />
                            <h3>Our Team & Expertise</h3>
                            <p className="para1">We have a team of highly skilled and experienced engineers who are passionate about delivering exceptional services to our clients. Our team is committed to continuing education and staying up-to-date with the latest trends and technologies in the industry.

                                Our team has the expertise to take your project from concept to completion.</p>
                        </div>
                        <hr />
                        <div className="expertises">
                            <img src="https://static.wixstatic.com/media/fbe21a_11e36b9b9b4b4286b3fccb47bc1acc42~mv2.webp/v1/fill/w_614,h_360,al_c,lg_1,q_80,enc_avif,quality_auto/fbe21a_11e36b9b9b4b4286b3fccb47bc1acc42~mv2.webp" alt="" />
                            <h3>Vision & Mission</h3>
                            <p className="para2"> <strong>Vision</strong> – To emerge globally as an Inspired Engineering company, providing world-class Mechanical Engineering and Technical solutions.
                                <br /><br />
                                <strong>   Mission</strong> – To have long-term relationships with customers, and value them using Engineering solutions with the latest Technologies ensuring Quality, Timely Delivery, and Customer Satisfaction.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Section2;
