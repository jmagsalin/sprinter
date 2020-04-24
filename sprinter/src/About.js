import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Image} from 'react-bootstrap';
import Aboutphoto from "./Aboutcollage.jpg"

class About extends Component {
    render(){
      return (
      <React.Fragment>
          <Jumbotron fluid className = "aboutJumbotron">           
               <Container>
               <h1 style = {{fontFamily: "Cambria", color: "#94790D" }}>About Premier Sprinter Service</h1>
               <h1 className = "aboutText">San Diego's Premier Transportation Experience</h1><br></br>
               </Container>
           </Jumbotron>
           <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            We fulfill all your transportation needs
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Arrive at your destination in luxury and comfort
                        </h3>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}> 
                            There is no experience like that of going to an event 
                            with your closest friends or that special someone.  
                            Why not treat this experience with a memorable ride in one of our luxury Sprinter Limos or luxury SUV's.
                            For any occasion, when you travel with us,
                            it will be a journey unlike any other.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}>
                            Whether you need transportation to high school, executive transportation or want a luxurious night out,
                            our professional staff will make sure you will have an exceptional experience time and time again.
                        </h5>
                    </Col>
                    <Col>
                <Image height= {350} width = {500} src={Aboutphoto} rounded />
                    </Col>
                </Row><br></br>
            </Container>
        <div style = {{backgroundColor: "#E8E5DD", fontFamily: "Cambria"}}>
            <Container><br></br>
                <Row>
                    <Col>
                    <Image height= {330} width= {500} src="https://www.mercedes-benz-vans.ca/images/features/sprinter/passenger-van/electric-sliding-door.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Our Values
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Professionalism, Integrity, Reliability
                        </h3>
                        <h5 style = {{textAlign: "left"}}> At Premiere Sprinter Service we strive for greatness. Our San Diego based Sprinter 
                            and sedan transportation service is built on integrity, reliability and knowledge. We provide safe, 
                            clean and reliable transportation with highly trained professional chauffeurs and high-class vehicles. 
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            We separate ourselves from other companies by striving for greatness. From our 
                            luxurious fleet to our caring staff, when you complete your journey with us, you will leave having 
                            had the experience of a lifetime!
                        </h5>
                    </Col>
                </Row><br></br>
            </Container>
        </div>
        <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Our Mission
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            We go above and beyond for you
                        </h3>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}> 
                        Premier Sprinter Service takes great pride in our work and we want to make sure to perfectly accommodate you on  
                        every journey. 
                        Our team goes above and beyond to make sure every client goes home happy 
                        and to ensure you have the best experience possible.   
                        </h5><br></br>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}>
                        Our staff are professionals who work as a team dedicated to ensure that your experience 
                        is exceptional, professional, and always on time.
                        </h5>
                    </Col>
                    <Col>
                        <Image height= {350} width = {500} src="https://cdn.pixabay.com/photo/2016/01/19/17/57/car-1149997_1280.jpg" rounded />
                    </Col>
                </Row><br></br>
            </Container>
      </React.Fragment>
        )
    }
}

export default About