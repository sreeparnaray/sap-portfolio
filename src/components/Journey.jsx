import React from "react";
import colorSharp from "../assets/img/color-sharp2.png";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

export const Journey = () => {
  return (
    <section className="journey" id="journey">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="journey-bx wow zoomIn">
              <center><h2>My Journey</h2>
              <p>Education & Experience Overview</p> </center><br/><br/>

              <div className="row">
                {/* ===== Left Column: Experience ===== */}
                <div className="col-lg-6">
            <h3 className="journey-main-title">Experience</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="timeline-title">Software Engineer</h4>
                  <h5 className="timeline-title2">Tech Mahindra</h5>
                  <p className="timeline-subtitle">
                    SAP Basis and Hana Administrator & Consultant
                  </p>
                  <span className="timeline-date">June, 2025 - Present</span>
                  <ul>
                    <li>Performed System Refresh Activity (QA → PRD) Pre-steps, exporting and post-steps</li>
                    <li>Maintained system performance by implementing kernel upgrades, patch installations</li>
                    <li>Handled SAP HANA administration tasks such as HANA backup, user management and Managing Privileges in SAP HANA Databases.</li>
                    <li>Performed Java License Upgradations activity, ABAP Certificate Renewal, BRTools Upgradation</li>
                    <li>Managing SOLMAN to monitor SAP system and diagonestic agents.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="timeline-title">Associate Software Engineer</h4>
                  <h5 className="timeline-title2">Tech Mahindra</h5>
                  <p className="timeline-subtitle">
                    SAP Basis and Hana Administrator & Support
                  </p>
                  <span className="timeline-date">March, 2024 - May,2025</span>
                  <ul>
                    <li>Performed upgradation activity of Host Agents, Java Components, Ariba, ST/PI and ST-A/PI components</li>
                    <li>Managed SAP system landscapes including ECC, HANA, and Solution Manager</li>
                    <li>Troubleshooting, EWA Report Analysis, Prepared EWA Recommendations and implemented to improve system performance.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* ===== Right Column: Education ===== */}
          <div className="col-lg-6">
            <h3 className="journey-main-title">Education</h3>
            <div className="timeline">

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="timeline-title">
                    Bachelor of Technology
                  </h4>
                  <h5 className="timeline-title2">Electronics and Communication Engineering</h5>
                  <span className="timeline-date">2019 - 2023</span>
                  <p className="timeline-subtitle">
                    Asansol Engineering College
                  </p>
                  <ul>
                    <li>Asansol, India</li>
                    <li>CGPA: 9.13</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="timeline-title">CLASS 12 (HSC)</h4>
                  <span className="timeline-date">2017 - 2019</span>
                  <p className="timeline-subtitle">
                    Baidyabati Charushila Bose Balika Vidyalaya
                  </p>
                  <ul>
                    <li>Core Subjects: Physics, Mathematics, Chemistry, Computer Science</li>
                    <li>Marks (in Percentage): 76.2%</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="timeline-title">CLASS 10 (SSC)</h4>
                  <span className="timeline-date">2016</span>
                  <p className="timeline-subtitle">
                    Serampore Girls's High School
                  </p>
                  <ul>
                    <li>Marks (in Percentage): 79%</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};

export default Journey;
