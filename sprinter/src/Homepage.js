import React, {Component} from 'react';
import {Row, Col, Card, Container, Button} from 'react-bootstrap';

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
             </h4><br></br>
        </Container>
             <div style = {{backgroundColor:"#E8E5DD"}}>
        <Container>
             <div class = "d-flex justify-content-around"  style = {{padding: "20px"}}>
              <Row> 
                  <Col>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/09/02/13/04/marriage-918864_1280.jpg" />
                        <Card.Body className = "cardTitle">
                            <Card.Title>Weddings</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" height = {212} src="https://www.ultimatetoys.com/wp-content/uploads/2018/09/SPRINTER_12_Enhanced-1600x844.jpg" />
                        <Card.Body>
                            <Card.Title>Executive Meetings</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/08/24/21/23/teen-2678447_1280.jpg" />
                        <Card.Body>
                            <Card.Title>Formals</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
              </Row>
              </div>
              <div class = "d-flex justify-content-around" style = {{padding: "20px"}}>
              <Row> 
                  <Col>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_1280.jpg" />
                        <Card.Body>
                            <Card.Title>Events</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" height = {212} src="https://cdn.pixabay.com/photo/2017/08/02/11/36/nature-2571115_1280.jpg" />
                        <Card.Body>
                            <Card.Title>Road Trips</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/10/17/22/18/alcohol-492871_1280.jpg" />
                        <Card.Body>
                            <Card.Title>Nights Out</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
              </Row>
              </div>
              <Button 
                    className = "homeButton"
                    variant="dark"
                    size = "lg"
                    href = "Services"
                    fontFamily = "Cambria">All Services</Button><br></br>
             
            </Container><br></br>
              </div>
              <div className = "homeImage">         
             <Container><br></br><br></br><br></br>
                <h1 style = {{fontFamily: "Cambria", color: "white", fontSize: "50px"}}>Treat Yourself Like a VIP</h1>
                <h3 className = "homeText" style = {{fontFamily: "Cambria", color: "white", fontSize: "25px"}}>
                    Make your experience last a lifetime</h3><br></br>
                <Button 
                    className = "homeButton"
                    variant="dark"
                    size = "lg"
                    href = "Contact"
                    fontFamily = "Cambria">Call for reservations (858) 555-4444</Button><br></br>
             </Container>
         </div><br></br>
    </React.Fragment>
        )
    }
}

export default Homepage