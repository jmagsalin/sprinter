import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Image} from 'react-bootstrap';

class Camps extends Component {
    render(){
      return (
      <React.Fragment>
          <Jumbotron fluid className = "campsJumbotron">           
               <Container>
               <h1 style = {{fontFamily: "Cambria", color: "#94790D" }}>Youth Camps</h1>
               <h1 className = "aboutText" style = {{color: "white"}}>
                   Transportation to the youth camps of San Diego
               </h1><br></br>
               </Container>
           </Jumbotron>
           <Container>
                <h2 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "37px"}}>
                    Safe and reliable transportation to San Diego's youth camps
                </h2>
                <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                    We provide safe transportation to any youth camp in San Diego
                </h2>
                <h4 style = {{fontFamily: "Cambria", color: "black"}}>
                    San Diego is home to some of the finest youth camps in America. North
                    County Luxury Transportation can offer safe and reliable transportation to any 
                    youth camp in San Diego, whether learning how to surf at the beach, camping in the wilderness
                    or learning ballet. 
                </h4><br></br>
            </Container>
        <div style = {{backgroundColor: "#E8E5DD", fontFamily: "Cambria"}}>
           <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Youth camps outdoors
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Watersports camps and outdoors camps
                        </h3>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}> 
                            San Diego has some of the best outdoor camps in the country.  
                            Whether your child is learning how to surf or looking for an outdoor adventure we will make sure they 
                            get to their camp safely. 
                        </h5><br></br>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}>
                            Our professional staff will transport your children safely and reliable to their youth camp, whether it is 
                            along the beach or in San Diego's wilderness areas.  Let us take the worry out of driving your children 
                            to their camp, our staff will take care of all the details.
                        </h5>
                    </Col>
                    <Col>
                <Image height= {350} width = {500} src="https://mbaquaticcenter.com/news/wp-content/uploads/2015/02/family_fun_day.jpg" rounded />
                    </Col>
                </Row><br></br>
            </Container>
        </div>
            <Container style = {{fontFamily: "Cambria"}}><br></br>
                <Row>
                    <Col>
                    <Image height= {330} width= {500} src="https://www.onedanceuk.org/wp-content/uploads/2016/02/Collaborate-Durham_Brian-Slater_5572.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Youth camps for the arts
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Dance camps and theater camps
                        </h3>
                        <h5 style = {{textAlign: "left"}}> 
                            San Diego is regarded as one of the premier destinations for its performing arts camps whether
                            learning the art of ballet or developing acting skills.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            North County Luxury Transportation can take your children to any of the performing arts camps in San Diego.  
                            No need to worry about finding the camp location, our knowledgeable staff knows all of San Diego to 
                            ensure your children will get to their camps safely and on time.
                        </h5>
                    </Col>
                </Row><br></br>
            </Container>
      </React.Fragment>
           )
    }
}

export default Camps