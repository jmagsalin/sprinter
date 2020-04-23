import React, {Component} from "react"
import {Image, Container, Row, Col, Jumbotron, Button} from "react-bootstrap"
import Aboutcollage from "./Aboutcollage.jpg"

class Services extends Component {     
    render(){
        return (
            <React.Fragment>
                <Jumbotron fluid className ="servJumbotron">           
                <Container><br></br>
                <h1 style = {{fontFamily: "Cambria", color: "#94790D" }}>Transportation for any Occasion</h1>
                <h1 className = "servText">Our transportation fleet is perfect for any and all occasions whether it be for 
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
                <h4 style = {{fontFamily: "Cambria", color: "#848480"}}>From ultimate tailgates to a magical wedding and everything in between, treat yourself and your guests, to a superior luxury transportation service and personalized attention like you’ve never experienced before. Our concierge team 
                    makes sure every detail is perfect and can make reservations, secure hard-to-get tickets, provide catering and plan itineraries.
                </h4><br></br><br></br>
            </Container>
            <div style = {{backgroundColor: "#E8E5DD"}}>
            <Container><br></br>
                <Row>
                    <Col>
                    <Image height= {360} width= {500} src={Aboutcollage} rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Special Events
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Arrive at your event in luxury and be the stars of the night
                        </h3>
                        <h5 style = {{ textAlign: "left"}}> There is no experience like that of going to a Homecoming or Prom with your closest friends, it is a night that you won't ever forget.
                        Why not treat this experience with a memorable ride.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            Our Sprinter Limos will make sure you will have a memorable time with your life long friends and
                            have a night you won't forget.
                        </h5>
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
                            Arrive at your formal in luxury and be the stars of the night
                        </h3>
                        <h5 style = {{textAlign: "left"}}> There is no experience like that of going to a Homecoming or Prom with your closest friends, it is a night that you won't ever forget.
                        Why not treat this experience with a memorable ride.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            Our Sprinter Limos will make sure you will have a memorable time with your life long friends and
                            have a night you won't forget.
                        </h5>
                    </Col>
                    <Col>
                    <Image height= {350} width = {500} src="https://www.sahs.org/wp-content/uploads/2018/08/shool.jpg" rounded />
                    </Col>
                </Row><br></br>
            </Container>
                <div style = {{backgroundColor: "#E8E5DD"}}>
            <Container><br></br>
                <Row>
                    <Col>
                        <Image height= {350} width= {500} src="https://www.ultimatetoys.com/wp-content/uploads/2018/09/SPRINTER_15-1600x844.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Executive Outings
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Arrive at your formal in luxury and be the stars of the night
                        </h3>
                        <h5 style = {{textAlign: "left"}}> There is no experience like that of going to a Homecoming or Prom with your closest friends, it is a night that you won't ever forget.
                            Why not treat this experience with a memorable ride.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            Our Sprinter Limos will make sure you will have a memorable time with your life long friends and
                            have a night you won't forget.
                        </h5>
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