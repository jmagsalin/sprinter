import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Image} from 'react-bootstrap';

class About extends Component {
    render(){
      return (
      <React.Fragment>
          <Jumbotron fluid className = "aboutJumbotron">           
               <Container>
               <h1 style = {{fontFamily: "Cambria", color: "#94790D" }}>About Premier Sprinter Services</h1>
               <h1 className = "aboutText">San Diego's Luxury Transportation Experience</h1><br></br>
               </Container>
           </Jumbotron>
           <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Live Life To Its Fullest
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Arrive at your destination in luxury 
                        </h3>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}> There is no experience like that of going to a Homecoming or Prom with your closest friends, it is a night that you won't ever forget.
                        Why not treat this experience with a memorable ride.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}>
                            Our Sprinter Limos will make sure you will have a memorable time with your life long friends and
                            have a night you won't forget.
                        </h5>
                    </Col>
                    <Col>
                    <Image height= {300} width = {500} src="https://cdn.pixabay.com/photo/2015/05/27/17/18/wine-786933_1280.jpg" rounded />
                    </Col>
                </Row><br></br>
            </Container>
      </React.Fragment>
        )
    }
}

export default About