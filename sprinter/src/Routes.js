import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Button, Navbar, Nav, Dropdown, NavItem} from 'react-bootstrap';
import Homepage from "./Homepage"
import Services from "./Services"
import Sprinter from "./Sprinter"
import Contact from "./Contact"

class Routes extends Component {
    render () {
        return (
            <React.Fragment>
            <Router>
            <div className = "navBar">
                <Navbar variant = "dark"  expand="lg">  
                <Navbar.Brand href="">
            
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
                        <Nav.Link href="Groups" style ={{fontFamily: "Cambria", color: "#94790D"}}>Groups</Nav.Link>
                        <Nav.Link href="About" style ={{fontFamily: "Cambria", color: "#94790D"}}>About</Nav.Link>     
                        <Nav.Link href="Contact" style ={{fontFamily: "Cambria", color: "#94790D"}}>Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                        <Navbar.Brand href="https://www.instagram.com/kaobasketball/?hl=en" target = "blank">
                        <img
                                alt=""
                                src="https://images.cdn3.stockunlimited.net/clipart450/contact-us-button_1386389.jpg"
                                width="50"
                                height="35"
                                className="d-inline-block align-top"
                            />
                            <p style = {{fontSize: "18px", fontFamily: "Cambria", color: "#94790D"}}>(855) 555-2398</p>
                        </Navbar.Brand>
                        <Navbar.Brand href="https://www.instagram.com/kaobasketball/?hl=en" target = "blank">
                        <img
                                alt=""
                                src="https://thumbs.dreamstime.com/b/email-icon-10341248.jpg"
                                width="50"
                                height="35"
                                className="d-inline-block align-top"
                            />
                            <p style = {{fontSize: "16px", fontFamily: "Cambria", color: "#94790D"}}>Email.PremierSprinterService.com</p>
                        </Navbar.Brand>
                </Navbar>
            </div>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/Homepage" component={Homepage} />
                <Route path="/Services" component={Services} />
                <Route path="/Sprinter" component={Sprinter} />
                <Route path="/Contact" component={Contact} />
             </Switch>
            </Router>
            <footer className = "footer">
                <br></br>
                <Button 
                        variant="outline-light" 
                        href = "Contact" 
                        className= "footerb" 
                        size = "lg"
                        >Request a free quote</Button><br></br>
                <img
                        alt=""
                        src="https://res.cloudinary.com/outdoorsy/image/upload/w_1200/v1560527457/p/rentals/125872/images/w4iisl3ynb5aqbbztppd.jpg"
                        width="220"
                        height="75"
                        className="d-inline-block align-top"
                        />
            </footer>
        </React.Fragment>
        )
    }
}

export default Routes