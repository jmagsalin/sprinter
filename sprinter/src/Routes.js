import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Navbar, Nav, Row, Col, Container, Dropdown, NavItem} from 'react-bootstrap';
import Homepage from "./Homepage"
import Services from "./Services"
import Sprinter from "./Sprinter"
import Contact from "./Contact"
import About from "./About"
import Rates from "./Rates"
import Events from "./Events"
import Highschool from "./High_School"
import Executive from "./Executive"
import Miramar from "./Miramar"
import Beaches from "./Beaches"
import Orange from "./OC"
import Downtown from "./Downtown"
import Balboa from "./Balboa"
import North from "./North"
import Inland from "./Inland"
import East from "./East"
import Camps from "./Camps"

import Logo from "./logo.JPG"

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
                        src= {Logo}
                        width="220"
                        height="75"
                        className="d-inline-block align-top"
                    />     
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style = {{color: "#E19B24"}}  />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="Homepage" style ={{fontFamily: "Cambria", color: "#848480"}}>Home</Nav.Link>
                        <Nav.Link href="Sprinter" style ={{fontFamily: "Cambria", color: "#848480"}}>Fleet</Nav.Link>
                        <Dropdown as={NavItem}>
                            <Dropdown.Toggle as={Nav.Link} style = {{color: "#848480", fontFamily: "Cambria"}}>Services</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="Events" style ={{color: "#848480", fontFamily: "Cambria", backgroundColor: "black"}}>Events</Dropdown.Item>
                                    <Dropdown.Item href="Executive" style ={{color: "#848480", fontFamily: "Cambria", backgroundColor: "black"}}>Executive</Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>  
                        <Nav.Link href="Highschool" style ={{fontFamily: "Cambria", color: "#848480"}}>School Transportation</Nav.Link>
                        <Nav.Link href="Camps" style ={{fontFamily: "Cambria", color: "#848480"}}>Youth Camps</Nav.Link>
                        <Nav.Link href="Rates" style ={{fontFamily: "Cambria", color: "#848480"}}>Rates</Nav.Link>
                        <Nav.Link href="About" style ={{fontFamily: "Cambria", color: "#848480"}}>About</Nav.Link>     
                        <Nav.Link href="Contact" style ={{fontFamily: "Cambria", color: "#848480"}}>Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                        <Navbar.Brand href="Contact">
                        <img
                                alt=""
                                src="https://media.msufcu.org/publicsites/publicsite/graphics/msufcu/footer/call_us_hover_state.png"
                                width="50"
                                height="35"
                                className="d-inline-block align-top"
                            />
                            <p style = {{fontSize: "18px", fontFamily: "Cambria", color: "#848480"}}>(858) 888-5734</p>
                        </Navbar.Brand>
                        <Navbar.Brand href="Contact">
                        <img
                                alt=""
                                src="https://cdn4.iconfinder.com/data/icons/ios7-line/512/Email.png"
                                width="50"
                                height="35"
                                className="d-inline-block align-top"
                            />
                            <p style = {{fontSize: "18px", fontFamily: "Cambria", color: "#848480"}}>info@ncluxurytransportation.com</p>
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
                <Route path="/Events" component={Events} />
                <Route path="/Highschool" component={Highschool} />
                <Route path="/Executive" component={Executive} />
                <Route path="/Miramar" component={Miramar} />
                <Route path="/Beaches" component={Beaches} />
                <Route path="/Orange" component={Orange} />
                <Route path="/Downtown" component={Downtown} />
                <Route path="/Balboa" component={Balboa} />
                <Route path="/North" component={North} />
                <Route path="/Inland" component={Inland} />
                <Route path="/East" component={East} />
                <Route path="/Camps" component={Camps} />
             </Switch>
            </Router>
            <footer className = "footer" style = {{fontFamily: "Cambria", color: "#848480"}}><br></br>
                <Container fluid>
                    <Row>
                        <Col style = {{textAlign: "left"}}>
                            <a href = "Homepage">
                                <img
                                    alt=""
                                    src= {Logo}
                                    width="220"
                                    height="75"
                                    className="d-inline-block align-top"  
                                />
                            </a><br></br><br></br>
                            <p>
                            North County Luxury Transportation serves San Diego and Southern California with luxury transportation service for events, 
                            executives and school students. We feature a state-of-the-art fleet of Sprinter limos, vans and luxury SUV's. 
                            For any and every occasion, enjoy the journey with North County Luxury Transportation.
                            </p>
                        </Col>
                        <Col style = {{textAlign: "left"}}>
                            <h5 style = {{color: "#94790D"}}>North County Luxury Transportation</h5>
                            <a href = "Events" style = {{color: "#848480"}}>Weddings</a><br></br>
                            <a href = "Events" style = {{color: "#848480"}}>Special Events</a><br></br>
                            <a href = "Events" style = {{color: "#848480"}}>High School Formals</a><br></br>
                            <a href = "Executive" style = {{color: "#848480"}}>Executive Transportation</a><br></br>
                            <a href = "Events" style = {{color: "#848480"}}>Wine Tours</a><br></br>
                            <a href = "Events" style = {{color: "#848480"}}>Sporting and Concert Events</a><br></br>
                            <a href = "Events" style = {{color: "#848480"}}>Brewery Tours</a><br></br>
                            <a href = "Events" style = {{color: "#848480"}}>Nights Out</a><br></br>
                            <a href = "Highschool" style = {{color: "#848480"}}>School Transportation</a><br></br>
                            <a href = "Camps" style = {{color: "#848480"}}>Youth Camps</a>
                        </Col>
                        <Col style = {{textAlign: "left"}}>
                            <h5 style = {{color: "#94790D"}}>San Diego and Surrounding Areas</h5>
                            <a href = "Downtown" style = {{color: "#848480"}}>Downtown</a><br></br>
                            <a href = "Balboa" style = {{color: "#848480"}}>Balboa Park</a><br></br>
                            <a href = "Beaches" style = {{color: "#848480"}}>Beaches</a><br></br>
                            <a href = "Miramar" style = {{color: "#848480"}}>Miramar</a><br></br>
                            <a href = "North" style = {{color: "#848480"}}>North County</a><br></br>
                            <a href = "East" style = {{color: "#848480"}}>East County</a><br></br>
                            <a href = "Orange" style = {{color: "#848480"}}>Orange County</a><br></br>
                            <a href = "Inland" style = {{color: "#848480"}}>Inland Empire</a><br></br>
                        </Col>
                        <Col style = {{textAlign: "left"}}>
                            <h5 style = {{color: "#94790D"}}>Contact Information</h5>
                            <p style = {{fontSize: "15px", fontFamily: "Cambria", color: "#848480"}}><img
                                alt=""
                                src="https://media.msufcu.org/publicsites/publicsite/graphics/msufcu/footer/call_us_hover_state.png"
                                width="30"
                                height="22"
                                className="d-inline-block align-top"
                            /> (858) 888-5734</p>
                            <p style = {{fontSize: "15px", fontFamily: "Cambria", color: "#848480"}}><img
                                alt=""
                                src="https://cdn4.iconfinder.com/data/icons/ios7-line/512/Email.png"
                                width="30"
                                height="22"
                                className="d-inline-block align-top"
                            /> info@ncluxurytransportation.com</p>
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
                            /></a>         <a href="https://www.instagram.com/nc_luxury_transportation/?hl=en" target = "blank"> <img
                                alt=""
                                src="https://www.beerinstitute.org/wp-content/uploads/2017/07/instagram-icon-grey.3cf404e5.png"
                                width="50"
                                height="34"
                                className="d-inline-block align-top"
                            /></a></p>           
                            <p>&copy; Premier Sprinter Service 2020</p>
                        </Col>
                    </Row>
                </Container>                
            </footer>
        </React.Fragment>
        )
    }
}

export default Routes