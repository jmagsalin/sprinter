import React, {Component} from 'react';
import {Container, Jumbotron, Row, Col, Image} from 'react-bootstrap';

class Downtown extends Component {
    render(){
      return (
      <React.Fragment>
          <Jumbotron fluid className = "downtownJumbotron">           
               <Container><br></br><br></br><br></br>
               <h1 style = {{fontFamily: "Cambria", color: "#94790D" }}>Downtown San Diego</h1>
               <h1 className = "aboutText" style = {{color: "white"}}>
                   Home of the historic Gaslamp Quarter
               </h1><br></br>
               </Container>
           </Jumbotron>
           <Container>
                <h2 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "37px"}}>
                    Visit the heart of San Diego
                </h2>
                <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                    We provide stylish transportation to downtown San Diego
                </h2>
                <h4 style = {{fontFamily: "Cambria", color: "black"}}>
                    Downtown San Diego is home to the historic Gaslamp Quarter, Petco Park, the San Diego Convention Center around
                    many other popular spots. North County Luxury Transportation can offer safe and reliable transportation to any 
                    event or attraction in downtown. 
                </h4><br></br>
            </Container>
        <div style = {{backgroundColor: "#E8E5DD", fontFamily: "Cambria"}}>
           <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Nights out in the Gaslamp Quarter
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            The historic heart of San Diego
                        </h3>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}> 
                            The Gaslamp Quarter is one of the most visited areas in San Diego and with its vibrant nightlife, it
                            attracts visitors from everywhere. Bars and clubs take centerstage in downtown, with a variety of themes
                            and customs.   
                        </h5><br></br>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}>
                            Let North County Luxury Transportation take you to downtown and take the worry of driving out the night.
                            Our knowledgeable staff can take you to the hottest spots in downtown no matter what you are looking for.
                            We will make sure your night is exciting, luxurious, and safe.
                        </h5>
                    </Col>
                    <Col>
                <Image height= {350} width = {500} src="https://i.pinimg.com/originals/b7/3f/10/b73f10cdda3768f65a8af272e7f9e8a8.jpg" rounded />
                    </Col>
                </Row><br></br>
            </Container>
        </div>
            <Container style = {{fontFamily: "Cambria"}}><br></br>
                <Row>
                    <Col>
                    <Image height= {330} width= {500} src="https://visitsandiego.com/sites/default/files/iavm-blog-header.jpg" rounded />
                    </Col>
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            San Diego Convention Center
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Home of the San Diego Comic Con
                        </h3>
                        <h5 style = {{textAlign: "left"}}> 
                            The San Diego Convention Center is home to many events and conferences, no more so popular than the
                            San Diego Comic Con.  The Convention Center hosts millions of visitors every year and the 
                            Comic Con is the crown jewel of the convention season.
                        </h5><br></br>
                        <h5 style = {{textAlign: "left"}}>
                            We can take you to any convention held at the Convention Center.  Why deal with the traffic and parking 
                            of the area, we offer reliable transportation to ensure you get to your event on time. If you are going
                            to Comic Con, you won't have to worry about anything except how great your cosplay outfit turns out.
                        </h5>
                    </Col>
                </Row><br></br>
            </Container>
            <div style = {{backgroundColor: "#E8E5DD", fontFamily: "Cambria"}}>
            <Container><br></br>
                <Row>                  
                    <Col>
                        <h2 style = {{fontFamily: "Cambria", color: "#94790D"}}>
                            Petco Park
                        </h2>
                        <h3 style = {{fontFamily: "Cambria", color: "#848480", fontStyle: "italic"}}>
                            Home of the San Diego Padres
                        </h3>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}> 
                            The San Diego Padres have been the heart and soul of San Diego since 1969 and now call Petco Park in
                            downtown San Diego their home. Enjoy the only professional sports team in San Diego at the 
                            beautiful Petco Park.

                        </h5><br></br>
                        <h5 style = {{textAlign: "left", fontFamily: "Cambria"}}>
                            North County Luxury Transportation can take your group to Petco Park in comfort and style. 
                            Finding parking in the area can be exhausting and expensive but we can take the hassle out of
                            your trip to Petco Park.
                        </h5>
                    </Col>
                    <Col>
                <Image height= {350} width = {500} src="https://cdn.pixabay.com/photo/2013/02/23/03/16/petco-ball-park-85234_1280.jpg" rounded />
                    </Col>
                </Row><br></br>
            </Container>
            </div>
      </React.Fragment>
           )
    }
}

export default Downtown