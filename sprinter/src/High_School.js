import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Image} from 'react-bootstrap';

class Highschool extends Component {
    render(){
      return (
      <React.Fragment>
          <Jumbotron fluid className = "hsJumbotron">           
               <Container><br></br>
               <h1 style = {{fontFamily: "Cambria", color: "#94790D" }}>High School Transportation</h1>
               <h1 className = "aboutText">San Diego's High School Transportation Professionals</h1><br></br>
               </Container>
           </Jumbotron>
           <Container>
                <h2 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "37px"}}>
                    Comfortable and reliable high school transportation
                </h2>
                <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                    Rides to and from school five days a week
                </h2>
                <h4 style = {{fontFamily: "Cambria", color: "#848480"}}>
                    Premier Sprinter Service provides transportation for students in most San Diego counties. 
                    We provide rides to and from school five days a week and can provide early pick ups and late drop offs. 
                    Premier Sprinter Service is San Diego's leader for safe and reliable high school transportation.
                </h4><br></br>
            </Container>
            <div style = {{backgroundColor: "#E8E5DD", fontFamily: "Cambria"}}>
           <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Why take chaffeured transportation to high school?
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                             The benefits of using Premier Sprinter Service 
                        </h3>
                        <ul style = {{fontSize: "large", textAlign: "left"}}>
                            <li>Multiple locations for pick ups </li>
                            <li>Safe traveling in some of the most upgraded and stylish vehicles</li>
                            <li>Familiarity - With a maximum of 10 students per vehicle each student feels more 
                                comfortable with who they are riding with and has a more personalized trip</li>
                            <li>Cost effective</li>
                            <li>Professional and reliable</li>
                        </ul>             
                    </Col>
                    <Col>
                <Image height= {350} width = {500} src="https://timesofsandiego.com/wp-content/uploads/2019/05/Cathedral-Catholic-High-School.jpg" rounded />
                    </Col>
                </Row><br></br>
            </Container>
        </div>
        <div style = {{fontFamily: "Cambria"}}>
            <Container><br></br>
                <Row>
                    <Col>
                    <Image height= {330} width= {500} src="https://timesofsandiego.com/wp-content/uploads/2015/03/Bishops-School-640x360.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Reliable transportation to school
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Professionalism, Integrity, Reliability
                        </h3>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}>
                            Our professional staff will make sure your children always arrive at school and back home on time. We pride 
                            ourselves on the comfort and safety of every passenger, every ride.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            We separate ourselves from other companies by striving for greatness. We understand how important safety and 
                            reliability are in transporting high school students.  That is why our trained staff are always professional, 
                            courteous and punctual.
                        </h5>
                    </Col>
                </Row><br></br>
            </Container>
        </div>
      </React.Fragment>
        )
    }
}

export default Highschool