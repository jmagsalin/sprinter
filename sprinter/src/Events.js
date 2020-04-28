import React, {Component} from "react"
import {Image, Container, Row, Col, Jumbotron, Button} from "react-bootstrap"
import Wedding from "./Wedding.jpg"

class Events extends Component {     
    render(){
        return (
            <React.Fragment>
                <Jumbotron fluid className ="eventsJumbotron">           
                <Container><br></br>
                    <h1 style = {{fontFamily: "Cambria", color: "#94790D" }}>Perfect for any Event</h1>
                    <h1 className = "servText">Our Sprinter Limos and SUV's are perfect for any and all occasions whether it be for wedding parties, bachelor 
                                                or bachelorette parties, prom, or just a night out on town </h1><br></br> 
                </Container>
                </Jumbotron>
            <div style = {{fontFamily: "Cambria"}}>
            <Container>
                <h2 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "37px"}}>
                    For That Special Event
                </h2>
                <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                    Our fleet of vehicles is perfect for any event
                </h2>
                <h4 style = {{fontFamily: "Cambria", color: "#848480"}}>From ultimate tailgates to a magical wedding and everything in between, treat yourself and your guests, to a superior luxury transportation service and personalized attention like you’ve never experienced before. Our concierge team 
                    makes sure every detail is perfect and can make reservations, secure hard-to-get tickets, provide catering and plan itineraries.
                </h4><br></br>
                <Button 
                    className = "footerb"
                    variant="dark"
                    size = "lg"
                    href = "Rates"
                    fontFamily = "Cambria">Event Rates</Button><br></br>   
            </Container><br></br>
            <div style = {{backgroundColor: "#E8E5DD"}}>
            <Container><br></br>
                <Row>
                    <Col>
                    <Image height= {300} width= {500} src="https://cdn.pixabay.com/photo/2017/04/05/14/37/prom-2205139_1280.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Formals
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Arrive at your formal in luxury and be the stars of the night
                        </h3>
                        <h5 style = {{ textAlign: "left"}}> There is no experience like that of going to a Homecoming or Prom with your closest friends, it is a night that you won't ever forget.
                        Why not treat this experience with a memorable ride.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            Our Sprinter Limos will make sure you will have a memorable time with your life long friends and
                            have a night you won't forget.
                        </h5>
                    </Col>
                </Row>
            </Container><br></br>
            </div>
            <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Weddings
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
                    <Image height= {400} width = {600} src={Wedding} rounded />
                    </Col>
                </Row><br></br>
            </Container>
            <div style = {{backgroundColor: "#E8E5DD"}}>
            <Container><br></br>
                <Row>
                    <Col>
                    <Image height= {300} width= {500} src="https://cdn.pixabay.com/photo/2016/07/30/00/03/winding-road-1556177_1280.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Road Trips
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
            <Container><br></br>
                <Row>                 
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Sporting and Concert Events
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Arrive at your formal in luxury and be the stars of the night
                        </h3>
                        <h5 style = {{textAlign: "left"}}> There is no experience like that of going to a Homecoming or Prom with your closest friends, it is a night that you won't ever forget.
                        Why not treat this experience with a memorable ride.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            Our Sprinter Limos and SUV's will make sure you will have a memorable time with your life long friends and
                            have a night you won't forget.
                        </h5>
                    </Col>
                    <Col>
                        <Image height= {300} width= {500} src="https://www.reviewjournal.com/wp-content/uploads/2016/10/web1_unlvsdsu_100816cs_001_7162290.jpg" rounded />
                    </Col>
                </Row><br></br>
                </Container>
                <div style = {{backgroundColor: "#E8E5DD"}}>
            <Container><br></br>
                <Row>
                    <Col>
                        <Image height= {300} width= {500} src="https://cdn.pixabay.com/photo/2017/03/13/14/24/wine-bar-2139973_1280.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                           Wine Tours
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
            <Container><br></br>
                <Row>                 
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Nights Out
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
                        <Image height= {300} width= {500} src="https://cdn.pixabay.com/photo/2017/03/25/09/51/party-2173187_1280.jpg" rounded />
                    </Col>
                </Row><br></br>
                </Container>
                    <div style = {{backgroundColor: "#E8E5DD"}}>
                        <Container><br></br>
                            <Row>
                                <Col>
                                    <Image height= {300} width= {500} src="https://cdn.pixabay.com/photo/2017/06/04/11/00/beer-2370783_1280.jpg" rounded />
                                </Col>
                                <Col>
                                    <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                                        Brewery Tours
                                    </h2>
                                    <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                                        Tour San Diego breweries, the center of craft brewing
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

export default Events