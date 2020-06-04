import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Image} from 'react-bootstrap';

class Balboa extends Component {
    render(){
      return (
      <React.Fragment>
          <Jumbotron fluid className = "balboaJumbotron">           
               <Container><br></br><br></br><br></br>
               <h1 style = {{fontFamily: "Cambria", color: "#94790D" }}>Balboa Park</h1>
               <h1 className = "aboutText" style = {{color: "white"}}>
                   Experience the culture of Balboa Park
               </h1><br></br>
               </Container>
           </Jumbotron>
           <Container>
                <h2 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "37px"}}>
                    Visit San Diego's famous Balboa Park
                </h2>
                <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                    The cultural center of San Diego
                </h2>
                <h4 style = {{fontFamily: "Cambria", color: "black"}}>
                    Balboa Park is the cultural center of San Diego with its many museums, cultural institutions, 
                    concert and performance venues, shops and architectural wonders. North
                    County Luxury Transportation can offer safe and reliable transportation to any 
                    venue in Balboa Park so you can experience the culture of San Diego. 
                </h4><br></br>
            </Container>
        <div style = {{backgroundColor: "#E8E5DD", fontFamily: "Cambria"}}>
           <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Spend the day at the museums
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Balboa Park hosts seventeen museums and cultural institutions
                        </h3>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}> 
                            Balboa Park is home to a wide array of museums and cultural institutions that represent the history and
                            culture of San Diego.  A trip to Balboa Park and its diverse attractions is a deep dive into understanding
                            what makes San Diego so special.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}>
                            Our knowledgeable staff can plan out your day in Balboa Park no matter what your particular interests 
                            may be.  Whether you are interested in science or art, aeronautics or photography, our staff can take
                            you to the perfect spots tailored specifically for you.
                        </h5>
                    </Col>
                    <Col>
                <Image height= {350} width = {500} src="https://blog.thebehemoth.com/wp-content/uploads/2017/06/GMasters-ACMI-3160.jpg" rounded />
                    </Col>
                </Row><br></br>
            </Container>
        </div>
            <Container style = {{fontFamily: "Cambria"}}><br></br>
                <Row>
                    <Col>
                    <Image height= {330} width= {500} src="https://abouttownmagazines.com/wp-content/uploads/2018/09/P_Dome_2013_IMAX_3_1014-1-e1537683809286.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Take in a show at Balboa Park
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Balboa Park boasts the first IMAX dome 
                        </h3>
                        <h5 style = {{textAlign: "left"}}> 
                            Not only does Balboa Park house the first IMAX dome theater, but it is also home to the San Diego Junior Theater and 
                            the Spreckels Organ Pavilion, all fine places to watch a show or performance.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            North County Luxury Transportation can take you to a show in the IMAX dome or an event at one of the 
                            performance centers.  No need to worry about parking or traffic, our professional staff 
                            can take care of your visit to Balboa Park so you can experience the culture San Diego has to offer.
                        </h5>
                    </Col>
                </Row><br></br>
            </Container>
      </React.Fragment>
           )
    }
}

export default Balboa