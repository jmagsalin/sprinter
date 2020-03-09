import React, {Component} from "react"
import {Card, Image, ListGroup, ListGroupItem, Container, Row, Col, Jumbotron} from "react-bootstrap"

class Services extends Component {
    render(){
        return (
            <React.Fragment>
                <Jumbotron fluid className ="servJumbotron">           
                <Container><br></br>
                <h1 style = {{fontWeight: "bold" }}>Perfect for any Occasion</h1>
                <p className = "servText">Our Sprinter Limos are perfect for any and all occasions whether it be for wedding parties, bachelor 
                                            or bachelorette parties, prom, or just a night out in town </p><br></br>
                </Container>
                </Jumbotron>
            <Container>
                <h1 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                    FOR THAT SPECIAL EVENT
                </h1><br></br>
                <h4 style = {{fontFamily: "Cambria", color: "#848480"}}>From ultimate tailgates to a magical wedding and everything in between, treat yourself and your guests, to a superior luxury transportation service and personalized attention like you’ve never experienced before. Our concierge team 
                    makes sure every detail is perfect and can make reservations, secure hard-to-get tickets, provide catering and plan itineraries.
                </h4><br></br><br></br>
                <Row style = {{backgroundColor: "silver"}}>
                    <Col xs={6} md={4}>
                    <Image height= {250} src="https://cdn.pixabay.com/photo/2017/04/05/14/37/prom-2205139_1280.jpg" rounded />
                    </Col>
                    <Col xs={8} md={8}>
                        <h3 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Formals
                        </h3>
                        <h5 style = {{fontFamily: "Timesnewroman"}}> There is no experience like that of going to a Homecoming or Prom with your closest friends, it is a night that you won't ever forget.
                        Why not treat this experience with a memorable ride.
                        </h5><br></br>
                        <h5 style = {{fontFamily: "Timesnewroman"}}>
                            Our Sprinter Limos will make sure you will have a memorable time with your life long friends and
                            have a night you won't forget.
                        </h5>
                    </Col>
                </Row><br></br>
                <Row>                  
                    <Col xs={8} md={8}>
                        <h3 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Weddings
                        </h3>
                        <h5 style = {{fontFamily: "Timesnewroman"}}> There is no experience like that of going to a Homecoming or Prom with your closest friends, it is a night that you won't ever forget.
                        Why not treat this experience with a memorable ride.
                        </h5><br></br>
                        <h5 style = {{fontFamily: "Timesnewroman"}}>
                            Our Sprinter Limos will make sure you will have a memorable time with your life long friends and
                            have a night you won't forget.
                        </h5>
                    </Col>
                    <Col xs={6} md={4}>
                    <Image height= {250} src="https://cdn.pixabay.com/photo/2017/07/31/19/44/people-2560382_1280.jpg" rounded />
                    </Col>
                </Row><br></br>
                <Row style = {{backgroundColor: "silver"}}>
                    <Col xs={6} md={4}>
                    <Image height= {250} src="https://cdn.pixabay.com/photo/2016/07/30/00/03/winding-road-1556177_1280.jpg" rounded />
                    </Col>
                    <Col xs={8} md={8}>
                        <h3 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Road Trips
                        </h3>
                        <h5 style = {{fontFamily: "Timesnewroman"}}> There is no experience like that of going to a Homecoming or Prom with your closest friends, it is a night that you won't ever forget.
                        Why not treat this experience with a memorable ride.
                        </h5><br></br>
                        <h5 style = {{fontFamily: "Timesnewroman"}}>
                            Our Sprinter Limos will make sure you will have a memorable time with your life long friends and
                            have a night you won't forget.
                        </h5>
                    </Col>
                </Row><br></br>
                <Row>                 
                    <Col xs={8} md={8}>
                        <h3 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Tailgates
                        </h3>
                        <h5 style = {{fontFamily: "Timesnewroman"}}> There is no experience like that of going to a Homecoming or Prom with your closest friends, it is a night that you won't ever forget.
                        Why not treat this experience with a memorable ride.
                        </h5><br></br>
                        <h5 style = {{fontFamily: "Timesnewroman"}}>
                            Our Sprinter Limos will make sure you will have a memorable time with your life long friends and
                            have a night you won't forget.
                        </h5>
                    </Col>
                    <Col xs={6} md={4}>
                    <Image height= {250} src="https://cdn.pixabay.com/photo/2018/10/05/02/53/stadium-3725001_1280.jpg" rounded />
                    </Col>
                </Row><br></br>
            </Container>
            </React.Fragment>
            )
        }
    }

export default Services