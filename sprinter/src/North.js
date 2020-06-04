import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Image} from 'react-bootstrap';

class North extends Component {
    render(){
      return (
      <React.Fragment>
          <Jumbotron fluid className = "northJumbotron">           
               <Container>
               <h1 style = {{fontFamily: "Cambria", color: "#94790D" }}>North County</h1>
               <h1 className = "aboutText" style = {{color: "white"}}>
                   Experience the excitement of North San Diego County
               </h1><br></br>
               </Container>
           </Jumbotron>
           <Container>
                <h2 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "37px"}}>
                    North County has much to see and experience
                </h2>
                <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                    A hidden gem of San Diego
                </h2>
                <h4 style = {{fontFamily: "Cambria", color: "black"}}>
                    North County is the hidden gem of San Diego with its many breweries, wineries, golf courses, the San Diego Safari Park, 
                    and Harrah's Resort and Casino. North
                    County Luxury Transportation can offer safe and reliable transportation to anywhere 
                    in North San Diego County so you can experience a different side of San Diego. 
                </h4><br></br>
            </Container>
        <div style = {{backgroundColor: "#E8E5DD", fontFamily: "Cambria"}}>
           <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Spend the day at Harrah's
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            A true luxury resort in North County
                        </h3>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}> 
                            Harrah's is home to a wide array of activities, whether you want to try your luck at the casino, relax
                            at the pool, pamper yourself at the spa, or have a fun night at their club venue.  You'll find out Harrah's
                            has something for everyone.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}>
                            Our knowledgeable staff can take you, your friends or your family to Harrah's in style and luxury so your
                            don't have to worry about anything except the fun and excitement you're going to have.  Whether you want to
                            spend the day there or an entire weekend, we've got your transportation covered.
                        </h5>
                    </Col>
                    <Col>
                <Image height= {350} width = {500} src="https://assets.resortpass.com/uploads/image/picture/212/harrahsresort2.jpg" rounded />
                    </Col>
                </Row><br></br>
            </Container>
        </div>
            <Container style = {{fontFamily: "Cambria"}}><br></br>
                <Row>
                    <Col>
                    <Image height= {330} width= {500} src="https://visitoceanside.org/wp-content/uploads/2013/01/SDZOoSafariPark.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Visit the Safari Park
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            A great experience for nature lovers 
                        </h3>
                        <h5 style = {{textAlign: "left"}}> 
                            The San Diego Zoo Safari Park is one of the largest tourist attractions in San Diego and houses diverse
                            animal species from all over the world in expansive free range enclosures.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            North County Luxury Transportation can take you and your guest to the Safari Park so you don't have to worry
                            about anything except experiencing the diversity and rare animal exhibits at the Park. Let us make your day more
                            enjoyable by providing your transportation to the Safari Park.
                        </h5>
                    </Col>
                </Row><br></br>
            </Container>
      </React.Fragment>
           )
    }
}

export default North