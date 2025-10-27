import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CertificationCard } from "./CertificationCard";
import projImg1 from "../assets/img/sap1.png";
import projImg2 from "../assets/img/sap2.png";
import projImg3 from "../assets/img/sap3.png";
import Img4 from "../assets/img/ora1.png";
import Img5 from "../assets/img/ora2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certification = () => {

  const sapCertifications = [
    {
      title: "SAP Certified Associate",
      description: "Database Administrator - SAP HANA",
      imgUrl: projImg1,
    },
    {
      title: "SAP Certified Associate",
      description: "SAP S/4HANA System Administration",
      imgUrl: projImg2,
    },
    {
      title: "SAP Certified Specialist",
      description: "SAP S/4HANA Conversion and SAP System Upgrade",
      imgUrl: projImg3,
    },
    
  ];

  const oracleCertifications = [
    {
      title: "Oracle Certified Foundations Associate",
      description: "Oracle Cloud Infrastructure",
      imgUrl: Img5,
    },
    {
      title: "Oracle Certified Associate",
      description: "Java SE 8 Programmer",
      imgUrl: Img4,
    },
    
    
  ];

  

  return (
    <section className="certification" id="certifications">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Certifications</h2>
                <p>SAP Certified & Oracle Certified Associate</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">SAP Certifications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Oracle Certifications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Others</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          sapCertifications.map((certification, index) => {
                            return (
                              <CertificationCard
                                key={index}
                                {...certification}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          oracleCertifications.map((certification, index) => {
                            return (
                              <CertificationCard
                                key={index}
                                {...certification}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    

                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                    <Tab.Pane eventKey="third">
                      <p><RadioButtonCheckedIcon/>Technology Fundamentals of SAP S/4HANA and SAP Business Suite - SAP Learning : May, 2025</p>

                      <br/>
                      <p><RadioButtonCheckedIcon/>SAP HANA Administration – UDEMY : Oct, 2024</p>

                      <br/>
                      <p><RadioButtonCheckedIcon/>SAP Basis Administration – UDEMY : Aug, 2024</p>

                      <br/>
                      <p><RadioButtonCheckedIcon/>SAP NetWeaver Fundamentals - SAPBuddy : Aug, 2024</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}