import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Button, Navbar, Nav, Row, Col, Container} from 'react-bootstrap';
import Homepage from "./Homepage"
import Services from "./Services"
import Sprinter from "./Sprinter"
import Contact from "./Contact"
import About from "./About"
import Rates from "./Rates"

class Routes extends Component {
    render () {
        return (
            <React.Fragment>
            <Router>
            <div className = "navBar">
                <Navbar className = "navBar" variant = "dark"  expand="lg" fixed = "top">  
                <Navbar.Brand href="Homepage">     
                    <img
                        alt=""
                        src= "https://weselllimos.com/photos/limos-for-sale/1604/2019-luxury-sprinter-17-passengers-5e37ce1adb591-large.jpg"
                        width="220"
                        height="75"
                        className="d-inline-block align-top"
                    />     
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style = {{color: "#E19B24"}}  />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="Homepage" style ={{fontFamily: "Cambria", color: "#94790D"}}>Home</Nav.Link>
                        <Nav.Link href="Sprinter" style ={{fontFamily: "Cambria", color: "#94790D"}}>Sprinter Limos</Nav.Link>
                        <Nav.Link href="Services" style ={{fontFamily: "Cambria", color: "#94790D"}}>Services</Nav.Link>
                        <Nav.Link href="Rates" style ={{fontFamily: "Cambria", color: "#94790D"}}>Rates</Nav.Link>
                        <Nav.Link href="About" style ={{fontFamily: "Cambria", color: "#94790D"}}>About</Nav.Link>     
                        <Nav.Link href="Contact" style ={{fontFamily: "Cambria", color: "#94790D"}}>Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                        <Navbar.Brand href="Contact">
                        <img
                                alt=""
                                src="https://images.cdn3.stockunlimited.net/clipart450/contact-us-button_1386389.jpg"
                                width="50"
                                height="35"
                                className="d-inline-block align-top"
                            />
                            <p style = {{fontSize: "18px", fontFamily: "Cambria", color: "#94790D"}}>(855) 555-2398</p>
                        </Navbar.Brand>
                        <Navbar.Brand href="Contact">
                        <img
                                alt=""
                                src="https://pngimg.com/uploads/email/email_PNG47.png"
                                width="50"
                                height="35"
                                className="d-inline-block align-top"
                            />
                            <p style = {{fontSize: "16px", fontFamily: "Cambria", color: "#94790D"}}>Email.PremierSprinterService.com</p>
                        </Navbar.Brand>
                </Navbar><br></br><br></br><br></br>
            </div>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/Homepage" component={Homepage} />
                <Route path="/Services" component={Services} />
                <Route path="/Sprinter" component={Sprinter} />
                <Route path="/Contact" component={Contact} />
                <Route path="/About" component={About} />
                <Route path="/Rates" component={Rates} />
             </Switch>
            </Router>
            <footer className = "footer" style = {{fontFamily: "Cambria", color: "#848480"}}><br></br>
                <Container fluid>
                    <Row>
                        <Col style = {{textAlign: "left"}}>
                            <a href = "Homepage">
                                <img
                                    alt=""
                                    src="https://weselllimos.com/photos/limos-for-sale/1604/2019-luxury-sprinter-17-passengers-5e37ce1adb591-large.jpg"
                                    width="220"
                                    height="75"
                                    className="d-inline-block align-top"  
                                />
                            </a><br></br><br></br>
                            <p>
                            Premier Sprinter Service serves San Diego and Southern California with luxury limousine service for events, 
                            executives and companies featuring state-of-the-art, custom Mercedes Sprinter Limo Vans. Why 
                            travel like everyone else? For work or play, enjoy the journey with Premier Sprinter Service.
                            </p>
                        </Col>
                        <Col style = {{textAlign: "left"}}>
                            <h5 style = {{color: "#94790D"}}>Premier Sprinter Services</h5>
                            <a href = "Services" style = {{color: "#848480"}}>Wedding Transportation</a><br></br>
                            <a href = "Services" style = {{color: "#848480"}}>Events Transportation</a><br></br>
                            <a href = "Services" style = {{color: "#848480"}}>Formals Transportation</a><br></br>
                            <a href = "Services" style = {{color: "#848480"}}>Executive Meetings</a><br></br>
                            <a href = "Services" style = {{color: "#848480"}}>Road Trips</a><br></br>
                            <a href = "Services" style = {{color: "#848480"}}>Tailgates</a><br></br>
                            <a href = "Services" style = {{color: "#848480"}}>Brewery Tours</a><br></br>
                            <a href = "Services" style = {{color: "#848480"}}>Nights Out</a><br></br>
                            <a href = "Services" style = {{color: "#848480"}}>Group Transportation</a>
                        </Col>
                        <Col style = {{textAlign: "left"}}>
                            <h5 style = {{color: "#94790D"}}>San Diego and Surrounding Areas</h5>
                            <a href = "Services" style = {{color: "#848480"}}>Downtown</a><br></br>
                            <a href = "Services" style = {{color: "#848480"}}>Balboa Park</a><br></br>
                            <a href = "Services" style = {{color: "#848480"}}>Beaches</a><br></br>
                            <a href = "Services" style = {{color: "#848480"}}>Miramar</a><br></br>
                            <a href = "Services" style = {{color: "#848480"}}>North County</a><br></br>
                            <a href = "Services" style = {{color: "#848480"}}>East County</a><br></br>
                            <a href = "Services" style = {{color: "#848480"}}>Orange County</a><br></br>
                            <a href = "Services" style = {{color: "#848480"}}>Inland Empire</a><br></br>
                        </Col>
                        <Col style = {{textAlign: "left"}}>
                            <h5 style = {{color: "#94790D"}}>Contact Information</h5>
                            <p style = {{fontSize: "15px", fontFamily: "Cambria", color: "#848480"}}><img
                                alt=""
                                src="https://media.msufcu.org/publicsites/publicsite/graphics/msufcu/footer/call_us_hover_state.png"
                                width="30"
                                height="22"
                                className="d-inline-block align-top"
                            /> (855) 555-2398</p>
                            <p style = {{fontSize: "15px", fontFamily: "Cambria", color: "#848480"}}><img
                                alt=""
                                src="https://cdn4.iconfinder.com/data/icons/ios7-line/512/Email.png"
                                width="30"
                                height="22"
                                className="d-inline-block align-top"
                            /> Email.PremierSprinterService.com</p>
                            <a href = "Contact" style = {{color: "#848480"}}>
                            <p style = {{fontSize: "15px", fontFamily: "Cambria", color: "#848480"}}>
                            <img
                                alt=""
                                src="https://cdn4.iconfinder.com/data/icons/communication-extras/512/Person_Book-512.png"
                                width="30"
                                height="22"
                                className="d-inline-block align-top"
                            /> Contact Us</p></a>
                            <h5 style = {{color: "#94790D"}}>Social Media</h5>   
                            <p style = {{fontSize: "18px", fontFamily: "Cambria", color: "#94790D"}}>
                            <a href="https://www.facebook.com/kaoathletics/" target = "blank"><img
                                alt=""
                                src="https://i.ya-webdesign.com/images/facebook-logo-white-png-3.png"
                                width="55"
                                height="37"
                                className="d-inline-block align-top"
                            /></a>         <a href="https://www.instagram.com/kaobasketball/?hl=en" target = "blank"> <img
                                alt=""
                                src="https://www.beerinstitute.org/wp-content/uploads/2017/07/instagram-icon-grey.3cf404e5.png"
                                width="50"
                                height="34"
                                className="d-inline-block align-top"
                            /></a></p>           
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
        )
    }
}

export default Routes