import React from 'react';
import i1 from './assets/planning.avif';
import i2 from './assets/layout.png';
import i3 from './assets/designAndDrafting.jpg';
import i4 from './assets/robotics.png';
import i5 from './assets/documents.jpg';
import './Services.css';

function AutomotiveServices() {
    return (
        <>
            <div className="header">
                <h1>Automotive Services</h1>
            </div>

            <div className="container">
                <section id="planning">
                    <img src={i1} alt="Planning" />
                    <h1>Planning</h1>
                    <p>Process Planning Layout Design Cycle Time Process Documents Weld Gun Study Ergonomic Study</p>
                </section>

                <section id="layouts">
                    <img src={i2} alt="Layouts" />
                    <h1>Layouts</h1>
                    <p>SPM (Special Purpose Machines) Assembly Automation Robotics</p>
                </section>

                <section id="design-drafting">
                    <img src={i3} alt="Design and Drafting" />
                    <h1>Design and Drafting</h1>
                    <p>Geo & Re-Spot Fixtures Hemming Fixtures Checking Fixtures Arc/Lase Welding Fixtures Material Handling / End Effectors / Combo Grippers Conveyor & Pallet Miscellaneous Fixtures (Pedestal, Glue Stand, Passtable etc...)</p>
                </section>

                <section id="robotic-simulation">
                    <img src={i4} alt="Robotic Simulation" />
                    <h1>Robotic Simulation</h1>
                    <p>Cell Building Weld Points & product data importing Weld Gun Selections Robotic Reach Study Tool Validation Kinematics SOP (Sequence Of Operation) OLP (Off-Line Programming)</p>
                </section>

                <section id="documents">
                    <img src={i5} alt="Documents" />
                    <h1>Documents</h1>
                    <p>Validation (Clamp, Gripper, Turntable etc...) Cycle Time & Spot Plan Creation Pneumatic Drawings Sequence Sheet PLP Plan & SHIM Plan Panel Flor / Joining Process Ergo Documents Poka-Yoke Long Lead / BOP</p>
                </section>
            </div>
        </>
    );
}

export default AutomotiveServices;