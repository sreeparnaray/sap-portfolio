import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Software Engineer<br></br> SAP Basis Administrator | SAP Hana Adminitrator | Solution Manager Support</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>SAP Basis</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>SAP Hana</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>SOLMAN</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Windows</h5>
                            </div>
                        </Carousel>

                        <p>
                            <br></br> <RadioButtonCheckedIcon/>
                            <b>SAP Technology - </b>
                            SAP system, SAP NetWeaver Fundamentals, SAP Java, SAP System
                            Configuration, System Monitoring , RFC, System Landscape, Manage Transport request and SAP
                            Client, SAP HANA, SAP Solution Manager, SAP S/4HANA
                            <br/><br/>
                            <RadioButtonCheckedIcon/>
                            <b>Administration - </b>
                            System Refresh, Client Copy, Transport Management System (TMS), Kernel
                            Upgrade, Patch Management, SAP ABAP Certificate and SAP Note Management

                            <br/><br/>
                            <RadioButtonCheckedIcon/>
                            <b>Database - </b>
                             SAP HANA DB, Oracle DB(Basics), SQL Queries

                            <br/><br/>
                            <RadioButtonCheckedIcon/>
                            <b>Tools - </b>
                             SAP GUI, HANA Studio, DBACOCKPIT, SAP Marketplace, Mobaxterm, Putty, WinSCP, SQL
                            Console, SAPCAR, Solution Manager Admin, SNOTE, SPAM/SAINT, SUM
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}