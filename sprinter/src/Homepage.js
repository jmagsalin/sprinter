import React, {Component} from 'react';
import {Carousel, Card, Container, Jumbotron, Button} from 'react-bootstrap';

class Homepage extends Component {
    render() {
        return(
            <React.Fragment>
      
      <div className = "homeJumbotron">         
             <Container><br></br><br></br><br></br>
                <h1 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "100px"}}>Premier Sprinter Service</h1>
                <h1 className = "homeText" style = {{fontFamily: "Cambria", color: "white", fontSize: "50px"}}>
                    San Diego's Premier Luxury Transportation Service</h1><br></br>
                <Button 
                    className = "homeButton"
                    variant="dark"
                    size = "lg"
                    href = "Contact"
                    fontFamily = "Cambria">Call for reservations (858) 555-4444</Button>
             </Container>
         </div><br></br>
         <Container>
             <h1 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                Luxury Mercedes Sprinter Limo Vans</h1>
             <h2 style = {{fontFamily: "Cambria", fontStyle: "italic"}}>
             For Work, Play & Everything In Between
             </h2>
             <h4 style = {{fontFamily: "Cambria", color: "#848480"}}>
             Treat yourself to an unrivaled luxury transportation experience. Like a private jet, only on the ground. Featuring plush leather seating, captain’s chairs, big screen TVs, premium audio, Wi-Fi, Satellite TV, Apple TV and more. 
             And with our concierge service you’ll have exclusive access to a whole world of indulgent and unforgettable experiences.
             </h4>
         </Container>

    </React.Fragment>
        )
    }
}

export default Homepage