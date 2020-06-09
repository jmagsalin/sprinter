import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Image} from 'react-bootstrap';

class East extends Component {
    render(){
      return (
      <React.Fragment>
          <Jumbotron fluid className = "eastJumbotron">           
               <Container>
               <h1 style = {{fontFamily: "Cambria", color: "#94790D" }}>East County</h1>
               <h1 className = "aboutText" style = {{color: "white"}}>
                   Enjoy the history of East San Diego County
               </h1><br></br>
               </Container>
           </Jumbotron>
           <Container>
                <h2 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "37px"}}>
                    East County has much to see and do
                </h2>
                <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                    Experience the history and nature of San Diego
                </h2>
                <h4 style = {{fontFamily: "Cambria", color: "black"}}>
                    East County is a must see destination for experiencing the natural wonders of San Diego as well as much of its                    
                    history.  North County Luxury Transportation can offer safe and reliable transportation to anywhere 
                    in East San Diego County so you can experience the nature and history of San Diego. 
                </h4><br></br>
            </Container>
        <div style = {{backgroundColor: "#E8E5DD", fontFamily: "Cambria"}}>
           <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Visit the city of Julian
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Learn the history and culture of Julian
                        </h3>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}> 
                            Julian is a historical town of San Diego and offers a wide array of activities, whether you want to try the famous apple pies,
                            visit the gold mines or tour the historical museums and art galleries.  
                        </h5><br></br>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}>
                            Our knowledgeable staff can take your group to Julian and make sure you have an enjoyable day, tailored to all your interests.
                            You don't have to worry about making the drive out to Julian, let us take the worry about the details so you 
                            can truly enjoy your day taking in the history and experience of Julian.
                        </h5>
                    </Col>
                    <Col>
                <Image height= {350} width = {500} src="https://i.pinimg.com/originals/92/ea/23/92ea235a9f2d9119be286c492725cdb7.jpg" rounded />
                    </Col>
                </Row><br></br>
            </Container>
        </div>
            <Container style = {{fontFamily: "Cambria"}}><br></br>
                <Row>
                    <Col>
                    <Image height= {330} width= {500} src="https://miro.medium.com/max/6048/1*EWtCCFmfeQXEKFv7yMEG4A.jpeg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Exhilirating hikes and waterfalls
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Exciting hikes for all skill levels 
                        </h3>
                        <h5 style = {{textAlign: "left"}}> 
                            East County has the most spectacular nature hikes and waterfalls in San Diego.  They are a true destination for
                            for nature lovers and hikers of all skill levels.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            Our knowledgeable staff can take your group to the best nature sights so you don't have to worry navigating and
                            finding your way to the locations.  We can take you to the best hikes and waterfalls so you can enjoy
                            your day out in nature.
                        </h5>
                    </Col>
                </Row><br></br>
            </Container>
      </React.Fragment>
           )
    }
}

export default East