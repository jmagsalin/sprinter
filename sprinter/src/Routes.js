import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Button, Navbar, Nav, Dropdown, NavItem} from 'react-bootstrap';
import Homepage from "./Homepage"
import Services from "./Services"

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
                        src= "https://res.cloudinary.com/outdoorsy/image/upload/w_1200/v1560527457/p/rentals/125872/images/w4iisl3ynb5aqbbztppd.jpg"
                        width="220"
                        height="75"
                        className="d-inline-block align-top"
                    />
        
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style = {{color: "#E19B24"}}  />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="Homepage" style ={{color: "white"}}>Home</Nav.Link>
                        <Nav.Link href="SprinterLimos" style ={{color: "#E19B24"}}>Sprinter Limos</Nav.Link>
                        <Nav.Link href="Services" style ={{color: "#E19B24"}}>Services</Nav.Link>
                        <Nav.Link href="Groups" style ={{color: "#E19B24"}}>Groups</Nav.Link>
                        <Nav.Link href="About" style ={{color: "#E19B24"}}>About</Nav.Link>     
                        <Nav.Link href="Contact" style ={{color: "#E19B24"}}>Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/Homepage" component={Homepage} />
                <Route path="/Services" component={Services} />
            </Switch>
            </Router>
        </React.Fragment>
        )
    }
}

export default Routes