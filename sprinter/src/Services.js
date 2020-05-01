import React, {Component} from "react"
import {Image, Container, Row, Col, Jumbotron, Button} from "react-bootstrap"
import Aboutcollage from "./Aboutcollage.jpg"

class Services extends Component {     
    render(){
        return (
            <React.Fragment>
                <Jumbotron fluid className ="servJumbotron">           
                <Container><br></br><br></br>
                <h1 style = {{fontFamily: "Cambria", color: "#94790D" }}>Transportation for any Occasion</h1>
                <h1 className = "servText" style = {{color: "#848480"}}>Our transportation fleet is perfect for any and all occasions whether it be for 
                                            wedding parties, executive outings, transportation to high school, or just a night out on town 
                </h1><br></br>
                </Container>
                </Jumbotron>
            <div style = {{fontFamily: "Cambria"}}>
            <Container>
                <h2 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "37px"}}>
                    For All Your Transportation Needs
                </h2>
                <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                    We've got you covered
                </h2>
                <h4 style = {{fontFamily: "Cambria", color: "#848480"}}>
                    Whether you need luxury transportation to a wedding, a stylish vehicle for a client meeting, or a safe 
                    ride to high school, we've got you covered.  North County Luxury Transportation provides San Diegans with the
                    most comfortable and stylish chauffeured transportation service in the county. Our professional 
                    staff takes care of all the details while you enjoy the ride when you choose us.
                </h4><br></br><br></br>
            </Container>
            <div style = {{backgroundColor: "#E8E5DD"}}>
            <Container><br></br>
                <Row>
                    <Col>
                    <Image height= {390} width= {500} src={Aboutcollage} rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Special Events
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Arrive at your event in luxury and style
                        </h3>
                        <h5 style = {{ textAlign: "left"}}> 
                            From weddings to wine tours, nights out to sporting events, treat yourself and your guests to a luxury 
                            transportation experience to last a lifetime. Our professional staff is here to ensure that
                            every detail is perfect.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            Our Sprinter Limo and luxury SUV service will make sure you will have a memorable time and have a night 
                            you won't forget. Our staff will make sure every detail is immaculate 
                            and that your transportation goes perfectly.
                        </h5><br></br>
                        <Button 
                            className = "footerb"
                            variant="dark"
                            size = "lg"
                            href = "Events"
                            fontFamily = "Cambria">Events
                        </Button><br></br>  
                    </Col>
                </Row>
            </Container><br></br>
            </div>
            <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            High School Transportation
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Professional, Reliable and Safe
                        </h3>
                        <h5 style = {{textAlign: "left"}}> 
                            Our professional staff will make sure your children always arrive at school and back home on time. We pride 
                            ourselves on the comfort and safety of every passenger, every ride.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            We separate ourselves from other companies by striving for greatness. We understand how important safety and 
                            reliability are in transporting high school students.  That is why our trained staff are always professional, 
                            courteous and most importantly, safe.
                        </h5><br></br>
                        <Button 
                            className = "footerb"
                            variant="dark"
                            size = "lg"
                            href = "HighSchool"
                            fontFamily = "Cambria">High School Transportation
                        </Button><br></br>
                    </Col>
                    <Col>
                    <Image height= {370} width = {500} src="https://www.sahs.org/wp-content/uploads/2018/08/shool.jpg" rounded />
                    </Col>
                </Row><br></br>
            </Container>
                <div style = {{backgroundColor: "#E8E5DD"}}>
            <Container><br></br>
                <Row>
                    <Col>
                        <Image height= {400} width= {500} src="https://www.ultimatetoys.com/wp-content/uploads/2018/09/SPRINTER_15-1600x844.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Executive Transportation
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Professional and reliable staff
                        </h3>
                        <h5 style = {{textAlign: "left"}}> 
                            Just as we believe your business strives for excellence and integrity, we at North County Luxury Transportation also
                            strives for those same things. Our San Diego based Sprinter 
                            and SUV transportation service is built on integrity, reliability and knowledge and we understand the needs
                            of executives. 
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            We provide safe, clean and reliable transportation with highly trained professional chauffeurs and high-class vehicles. 
                            From our luxurious fleet to our professional staff, we will make sure your clients, staff and associates
                            have the best experience possible.
                        </h5>
                        <Button 
                            className = "footerb"
                            variant="dark"
                            size = "lg"
                            href = "Executive"
                            fontFamily = "Cambria">Executive
                        </Button><br></br>
                    </Col>
                </Row><br></br>
            </Container>
            </div>
            
                </div>
            </React.Fragment>
            )
        }
    }

export default Services