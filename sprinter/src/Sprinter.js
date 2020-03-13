import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Image} from 'react-bootstrap';

class Sprinter extends Component {
  render(){
    return (
    <React.Fragment>
        <Jumbotron fluid className = "sprinterJumbotron">
             
             <Container>
             <h1></h1>
             <p className = "aboutText"></p><br></br>
             </Container>
         </Jumbotron>
         <Container>
            <h1 style = {{fontFamily: "Cambria", color: "#94790D"}}>
              Our Sprinter Limos are Perfect for Any Occasion
            </h1>
            <h4 style = {{fontFamily: "Cambria", color: "#848480"}}>
            Enjoy the ride and arrive in unique style with luxury limousines for events, executives and companies. Say goodbye to the old-fashioned stretch limo. And, hello to a modern transportation experience. 
            The Go Luxe difference is our fleet of chauffeured Mercedes Sprinter Limo Vans combined with superior concierge service.
            </h4>
         </Container><br></br>
      <div style = {{backgroundColor: "#E8E5DD"}}>
        <Container>
         <h1 style = {{fontFamily: "Cambria", color: "#94790D", textAlign: "left"}}>
           The Presidential Sprinter Limo
         </h1>
         <h2 style = {{fontFamily: "Cambria", color: "#848480", textAlign: "left"}}>
            Travel as a VIP
         </h2>
         <h4 style = {{fontFamily: "Cambria", textAlign: "left"}}>
           Comfortably Seats: Up to 10 passengers
         </h4><br>
         </br>
         <h4 style = {{fontFamily: "Cambria", textAlign: "left"}}>
         Comfort and luxury are a top priority with the Presidential, and it shows.  Designed for family or business use, enjoy power foot rests and two comfortable sofas that fold down to make into a bed - perfect for a quick nap or overnight travel.  There is wireless Internet to surf the web or send emails.  
         Enjoy Apple TV so you can watch your favorite movies, live TV, sports or play video games on the two flat-screen TVs. </h4><br></br>
         <h4 style = {{fontFamily: "Cambria", textAlign: "left"}}>
         You can even swivel the middle row of captain chairs in either direction - something that’s unique to Ultimate Toys and is a customer favorite.  For family outings, face the seats forward so everyone can enjoy each other’s company, or swivel them around and your Presidential instantly 
         converts into club seating - ideal for holding a meeting, carrying on a conversation, or having the perfect “limo” configuration.
         </h4><br></br>
         <Row>            
              <Col  style = {{textAlign: "left"}}>
                  <h3 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                      Key Features:
                  </h3>
                  <ul style = {{fontSize: "large"}}>
                    <li>Seats up to 10</li>
                    <li>Power footrests</li>
                    <li>Two HD TV's</li>
                    <li>High end tech & audio</li>
                    <li>Fold down couches</li>
                    <li>USB outlets</li>
                    <li>HDMI ports</li>
                  </ul>
                </Col>
                <Col style = {{textAlign: "left"}}><br></br><br></br>
                  <ul style = {{fontSize: "large"}}>
                    <li>Refridgerator/Freezer</li>
                    <li>Lap tables</li>
                    <li>Spacious luggage area</li>
                    <li>WiFi & Apple TV</li>
                    <li>Deluxe lighting controls</li>
                    <li>Blu-ray/DVD/CD player</li>
                  </ul>
              </Col>
              <Col >
                 <Image height= {280} width = {500} src="https://www.ultimatetoys.com/wp-content/uploads/2018/09/presidential-sprinter-1-1600x844.jpeg" rounded />
              </Col>
          </Row><br></br>
      </Container>
    </div>
     </React.Fragment>
    )
  }
}

export default Sprinter