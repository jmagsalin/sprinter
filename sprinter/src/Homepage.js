import React, {Component} from 'react';
import {Row, Col, Card, Container, Button} from 'react-bootstrap';

class Homepage extends Component {
    render() {
        return(
            <React.Fragment>
      
      <div className = "homeJumbotron">         
             <Container><br></br>
                <h1 style = {{fontFamily: "Cambria", color: "#94790D", fontSize: "100px"}}>North County Luxury Transportation</h1>
                <h1 className = "homeText" style = {{fontFamily: "Cambria", color: "white", fontSize: "50px"}}>
                    San Diego's Premier Luxury Transportation Service</h1><br></br>
                {/* <h1 className = "homeText" style = {{fontFamily: "Cambria", color: "white", fontSize: "30px"}}>
                Call for reservations (858) 555-4444</h1> */}
                <Button 
                    className = "homeButton"
                    variant="outline-light"
                    size = "lg"
                    href = "Contact"
                    fontFamily = "Cambria">Make a Reservation</Button>
             </Container>
         </div>
         <br></br>
            <Container>
                <h2 style = {{color: "#94790D", fontSize: "40px", fontFamily: "Cambria"}}>
                    Luxury Mercedes Sprinter Limo, Vans and Luxury SUV's</h2>
                <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                    For fun, work, high school & every occasion
                </h2>
                <h4 style = {{fontFamily: "Cambria"}}>
                    North County Luxury Transportation provides an unrivaled chauffeured luxury transportation experience.  With our fleet of diverse and distinct vehicles, 
                    we have transportation for any and every occasion.  Whether you need stylish luxury or comfortable group travel, we have something for you.
                    From weddings to wine tours, executive outings to rides to high school, only the finest experiences await when you ride with 
                    North County Luxury Transportation.                
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
                                Match the beauty and grace of your wedding with the luxury, comfort and style of our 
                                Sprinter limousine.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" height = {212} src="https://www.ultimatetoys.com/wp-content/uploads/2018/09/SPRINTER_12_Enhanced-1600x844.jpg" />
                        <Card.Body>
                            <Card.Title>Executive Transportation</Card.Title>
                            <Card.Text>
                                Travel with clients, associates and staff to events and sites in style.
                                Have meetings while on the road.
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
                                Experience going to a formal with your sweetheart and closest friends, 
                                Make it a night that you won't ever forget.
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
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/10/22/20/34/wine-1761613_1280.jpg" />
                        <Card.Body>
                            <Card.Title>Wine Tours</Card.Title>
                            <Card.Text>
                                Visit the amazing wineries of Temecula with friends. Experience the tasting rooms 
                                and vineyards worry free.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" height = {212} src="https://www.svconline.com/wp-content/uploads/2019/04/sym-st-augustine-02-copy.jpg" />
                        <Card.Body>
                            <Card.Title>High School Transportation</Card.Title>
                            <Card.Text>
                                Enjoy comfortable and reliable transportation to and from high school five
                                days a week.
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
                                Have an unforgettable night out. For any occasion, we’ll make sure the evening is memorable.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
              </Row>
              </div>
              <Button 
                    className = "footerb"
                    variant="dark"
                    size = "lg"
                    href = "Services"
                    fontFamily = "Cambria">All Services</Button><br></br>        
            </Container><br></br>
              </div>
            <div className = "homeImage">         
             <Container><br></br><br></br><br></br>
                <h2 style = {{fontFamily: "Cambria", color: "white", fontSize: "50px"}}>Treat Yourself Like a VIP</h2>
                <h3 className = "homeText" style = {{fontFamily: "Cambria", color: "white", fontSize: "25px"}}>
                    Make your experience last a lifetime</h3><br></br>
                <Button                 
                    variant="dark"
                    size = "lg"
                    href = "Contact"
                    fontFamily = "Cambria">Make a reservation</Button><br></br>
             </Container>   
            </div><br></br>   
            <Container>
                <h2 style = {{color: "#94790D", fontSize: "40px", fontFamily: "Cambria"}}>
                    Our fleet fits every transportation need
                </h2>
                <h2 style = {{fontFamily: "Cambria", fontStyle: "italic", color: "#848480"}}>
                    For executives, special events, high school transportation or virtually any occasion
                </h2>
                <h4 style = {{fontFamily: "Cambria"}}>
                    North County Luxury Transportation provides a state-of-the-art fleet, unrivaled in luxury and style for every transportation experience.  
                    With our fleet of diverse and distinct vehicles, we have transportation for any and every occasion.  Whether 
                    you need stylish luxury or comfortable group travel, we have something for you.  Our Mercedes Sprinter Limo is
                    the ultimate in luxury and style while our 15 passenger Sprinter van is unmatched in comfortable group travel.  Our SUV's
                    are classics in the luxury SUV field and are perfect for any occasion.  
                </h4><br></br>
            </Container>  
                <div style = {{backgroundColor:"#E8E5DD"}}>
                <Container fluid>
             <div class = "d-flex justify-content-around"  style = {{padding: "20px"}}>            
              <Row> 
                  <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" height= "191" src="https://www.ultimatetoys.com/wp-content/uploads/2020/02/presidential_open_5_nov_0007_web.jpg" />
                        <Card.Body className = "cardTitle">
                            <Card.Title>Mercedes Sprinter Limo</Card.Title>
                            <Card.Text>
                                Travel in unique style with our luxury Sprinter limousine for events, executives and companies.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" height= "191" src="https://www.mercedes-benz-vans.ca/images/features/sprinter/passenger-van/seating-capacity.jpg" />
                        <Card.Body>
                            <Card.Title>15 Passenger Sprinter Van</Card.Title>
                            <Card.Text>
                            The Sprinter passenger van provides comfortable group travel with seating for up to 15 people.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://hennesseyperformance.com/wp-content/uploads/2014/05/HPE800-Escalade-2016-Supercharged-8-crop-1.jpg" />
                        <Card.Body>
                            <Card.Title>Cadillac Escalade</Card.Title>
                            <Card.Text>
                            Travel in an SUV where tranquility, comfort and entertainment go hand
                            in hand.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" height= "191" src="https://cdn.autoversed.com/autoversed/wp-content/uploads/2018/10/Feature.jpg" />
                        <Card.Body className = "cardTitle">
                            <Card.Title>Chevy Suburban</Card.Title>
                            <Card.Text>
                            Everything about the Chevy Suburban makes it the ideal vehicle for any occasion.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
              </Row>              
              </div><br></br>   
              <div style = {{fontFamily: "Cambria"}}>
                <Button 
                        variant="dark"
                        size = "lg"
                        href = "Sprinter"
                        >Our Fleet
                </Button>
              </div><br></br>
              </Container>                
            </div>
    </React.Fragment>
        )
    }
}

export default Homepage